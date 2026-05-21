/**
 * Seed sample certificates for verify-certificate testing.
 * Run: node scripts/seed-certificates.mjs
 * Requires MONGO_URL in environment or .env.local (load manually).
 */
import { MongoClient } from 'mongodb'
import { readFileSync, existsSync } from 'fs'
import { resolve } from 'path'

function loadEnvLocal() {
  const envPath = resolve(process.cwd(), '.env.local')
  if (!existsSync(envPath)) return
  const content = readFileSync(envPath, 'utf8')
  for (const line of content.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq === -1) continue
    const key = trimmed.slice(0, eq)
    const value = trimmed.slice(eq + 1).replace(/^["']|["']$/g, '')
    if (!process.env[key]) process.env[key] = value
  }
}

loadEnvLocal()

const mongoUrl = process.env.MONGO_URL
if (!mongoUrl) {
  console.error('Missing MONGO_URL. Set it in .env.local or your shell.')
  process.exit(1)
}

const samples = [
  {
    certificateId: 'OAK-2024-001',
    issuedTo: 'Patterson\'s Garage',
    instrument: 'Torque Wrench 1/2" Drive',
    calibrationDate: '2024-11-15',
    validUntil: '2025-11-15',
    status: 'valid',
  },
  {
    certificateId: 'OAK-2024-002',
    issuedTo: 'Thornton Agricultural Ltd',
    instrument: 'Digital Pressure Gauge',
    calibrationDate: '2024-10-02',
    validUntil: '2025-10-02',
    status: 'valid',
  },
  {
    certificateId: 'OAK-DEMO-001',
    issuedTo: 'Demo Workshop',
    instrument: 'Multimeter',
    calibrationDate: '2025-01-10',
    validUntil: '2026-01-10',
    status: 'valid',
  },
]

const client = new MongoClient(mongoUrl)

try {
  await client.connect()
  const db = client.db('oakrange_engineering')
  const collection = db.collection('certificates')

  for (const cert of samples) {
    await collection.updateOne(
      { certificateId: cert.certificateId },
      { $set: cert },
      { upsert: true }
    )
    console.log(`Upserted certificate: ${cert.certificateId}`)
  }

  console.log('\nDone. Test at /verify-certificate with IDs:')
  samples.forEach((c) => console.log(`  - ${c.certificateId}`))
} finally {
  await client.close()
}
