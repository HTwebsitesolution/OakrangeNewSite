export async function submitQuickQuote(formData, { source = 'website' } = {}) {
  const response = await fetch('/api/quotes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...formData,
      source,
      formType: 'quick',
      submittedAt: new Date().toISOString(),
    }),
  })

  const result = await response.json()

  if (!response.ok || !result.success) {
    throw new Error(result.error || 'Failed to submit quote request')
  }

  return result
}
