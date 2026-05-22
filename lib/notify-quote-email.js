import { SITE_EMAIL } from '@/lib/site-config'

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function formatEquipmentList(quote) {
  const equipment = quote.equipment
  if (!Array.isArray(equipment) || equipment.length === 0) {
    return '<p><em>No equipment list (quick quote form).</em></p>'
  }

  const rows = equipment
    .map((item, index) => {
      const qty = item.quantity || '1'
      const type = item.type || item.serviceType || '—'
      const details = [
        item.makeModel && `Model: ${escapeHtml(item.makeModel)}`,
        item.serialNumber && `S/N: ${escapeHtml(item.serialNumber)}`,
        item.location && `Location: ${escapeHtml(item.location)}`,
        item.notes && `Notes: ${escapeHtml(item.notes)}`,
      ]
        .filter(Boolean)
        .join('<br>')

      return `<tr>
        <td style="padding:8px;border:1px solid #e2e8f0;">${index + 1}</td>
        <td style="padding:8px;border:1px solid #e2e8f0;">${escapeHtml(type)}</td>
        <td style="padding:8px;border:1px solid #e2e8f0;">${escapeHtml(qty)}</td>
        <td style="padding:8px;border:1px solid #e2e8f0;">${details || '—'}</td>
      </tr>`
    })
    .join('')

  return `<table style="border-collapse:collapse;width:100%;font-size:14px;">
    <thead>
      <tr style="background:#f1f5f9;">
        <th style="padding:8px;border:1px solid #e2e8f0;text-align:left;">#</th>
        <th style="padding:8px;border:1px solid #e2e8f0;text-align:left;">Type</th>
        <th style="padding:8px;border:1px solid #e2e8f0;text-align:left;">Qty</th>
        <th style="padding:8px;border:1px solid #e2e8f0;text-align:left;">Details</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>`
}

function buildQuoteEmailContent(quote) {
  const siteName = process.env.SITE_NAME || 'Oakrange Engineering'
  const source = quote.source || 'website'
  const formType = quote.formType === 'quick' ? 'Quick quote (popup form)' : 'Full quote request'

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;color:#0f172a;line-height:1.5;max-width:640px;">
      <h2 style="margin:0 0 8px;">New quote request — ${escapeHtml(siteName)}</h2>
      <p style="margin:0 0 16px;color:#475569;">A visitor submitted a quote on your website. Reply to the customer using the contact details below.</p>
      <table style="width:100%;font-size:14px;margin-bottom:20px;">
        <tr><td style="padding:4px 12px 4px 0;color:#64748b;">Reference</td><td><strong>${escapeHtml(quote.id)}</strong></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#64748b;">Submitted</td><td>${escapeHtml(quote.createdAt || new Date().toISOString())}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#64748b;">Form</td><td>${escapeHtml(formType)} (${escapeHtml(source)})</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#64748b;">Name</td><td>${escapeHtml(quote.name)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#64748b;">Email</td><td><a href="mailto:${escapeHtml(quote.email)}">${escapeHtml(quote.email)}</a></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#64748b;">Phone</td><td>${escapeHtml(quote.phone || '—')}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#64748b;">Company</td><td>${escapeHtml(quote.company || '—')}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#64748b;">Service</td><td>${escapeHtml(quote.serviceType || '—')}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#64748b;">Instruments</td><td>${escapeHtml(quote.instrumentCount || '—')}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#64748b;">Location</td><td>${escapeHtml(quote.location || quote.address || '—')}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#64748b;">Preferred date</td><td>${escapeHtml(quote.preferredDate || '—')}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#64748b;">Audit deadline</td><td>${escapeHtml(quote.auditDeadline || '—')}</td></tr>
      </table>
      <h3 style="margin:24px 0 8px;font-size:16px;">Equipment / details</h3>
      ${formatEquipmentList(quote)}
      ${quote.message || quote.notes ? `<h3 style="margin:24px 0 8px;font-size:16px;">Notes</h3><p style="white-space:pre-wrap;">${escapeHtml(quote.message || quote.notes)}</p>` : ''}
      ${quote.includePAT ? '<p style="margin-top:16px;"><strong>Includes PAT testing</strong> (via EcoTec).</p>' : ''}
    </div>
  `

  const text = [
    `New quote request — ${siteName}`,
    `Reference: ${quote.id}`,
    `Name: ${quote.name || '—'}`,
    `Email: ${quote.email || '—'}`,
    `Phone: ${quote.phone || '—'}`,
    `Company: ${quote.company || '—'}`,
    `Form: ${formType} (${source})`,
    quote.message || quote.notes ? `Notes: ${quote.message || quote.notes}` : '',
  ]
    .filter(Boolean)
    .join('\n')

  return { html, text }
}

/**
 * Notify Oakrange staff when a quote is saved. Does not email the customer.
 * Returns { sent: true } or { sent: false, reason } — never throws.
 */
export async function notifyOakrangeOfQuote(quote) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.QUOTE_NOTIFY_EMAIL || SITE_EMAIL
  const from = process.env.EMAIL_FROM

  if (!apiKey) {
    console.warn('RESEND_API_KEY not set — quote saved but staff email skipped')
    return { sent: false, reason: 'missing_api_key' }
  }

  if (!from) {
    console.warn('EMAIL_FROM not set — quote saved but staff email skipped')
    return { sent: false, reason: 'missing_from_address' }
  }

  const siteName = process.env.SITE_NAME || 'Oakrange Engineering'
  const { html, text } = buildQuoteEmailContent(quote)

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: quote.email || undefined,
        subject: `[${siteName}] New quote request — ${quote.id}`,
        html,
        text,
      }),
    })

    if (!response.ok) {
      const errorBody = await response.text()
      console.error('Resend API error:', response.status, errorBody)
      return { sent: false, reason: 'resend_api_error' }
    }

    return { sent: true }
  } catch (error) {
    console.error('Failed to send quote notification email:', error)
    return { sent: false, reason: 'send_failed' }
  }
}
