'use client'

import { useState } from 'react'
import { Calculator, Users, Gauge, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { submitQuickQuote } from '@/lib/submit-quote'

const emptyForm = {
  name: '',
  email: '',
  company: '',
  phone: '',
  serviceType: '',
  instrumentCount: '',
  location: '',
  message: '',
}

export function QuoteBuilderSheet({
  isOpen,
  onClose,
  source = 'website',
  title = 'Request a Quote',
  description = "Fill in your details and we'll provide a tailored quote within 24 hours.",
  includePAT = false,
}) {
  const [formData, setFormData] = useState(emptyForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const resetAndClose = () => {
    setFormData(emptyForm)
    setError(null)
    onClose()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const result = await submitQuickQuote(
        { ...formData, includePAT },
        { source }
      )
      alert(
        `Thank you! Your quote request has been submitted.\n\nReference: ${result.quoteId}\n\nWe will contact you within 24 hours.`
      )
      resetAndClose()
    } catch (err) {
      console.error('Quote submit error:', err)
      setError('There was an error submitting your request. Please try again or call us on 01709 542334.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && resetAndClose()}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl flex items-center gap-2">
            <Calculator className="w-6 h-6 text-primary" />
            {title}
          </SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900 flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              Contact Information
            </h4>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="qb-name">Full Name *</Label>
                <Input
                  id="qb-name"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="qb-phone">Phone</Label>
                <Input
                  id="qb-phone"
                  type="tel"
                  placeholder="01709 ..."
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="qb-email">Email Address *</Label>
              <Input
                id="qb-email"
                type="email"
                placeholder="john@company.co.uk"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="qb-company">Company Name</Label>
              <Input
                id="qb-company"
                placeholder="Your Company Ltd"
                value={formData.company}
                onChange={(e) => handleChange('company', e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-200">
            <h4 className="font-semibold text-slate-900 flex items-center gap-2">
              <Gauge className="w-4 h-4 text-primary" />
              Service Requirements
            </h4>

            <div className="space-y-2">
              <Label htmlFor="qb-serviceType">Service Type *</Label>
              <Select
                value={formData.serviceType}
                onValueChange={(value) => handleChange('serviceType', value)}
                required
              >
                <SelectTrigger id="qb-serviceType">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="temperature">Temperature Calibration</SelectItem>
                  <SelectItem value="pressure">Pressure Calibration</SelectItem>
                  <SelectItem value="dimensional">Dimensional Calibration</SelectItem>
                  <SelectItem value="mass">Mass Calibration</SelectItem>
                  <SelectItem value="electrical">Electrical Calibration</SelectItem>
                  <SelectItem value="torque">Torque Calibration</SelectItem>
                  {includePAT && <SelectItem value="pat">PAT Testing (via Ecotec)</SelectItem>}
                  <SelectItem value="multiple">Multiple Services</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>No. of Instruments</Label>
                <Select
                  value={formData.instrumentCount}
                  onValueChange={(value) => handleChange('instrumentCount', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10</SelectItem>
                    <SelectItem value="11-25">11-25</SelectItem>
                    <SelectItem value="26-50">26-50</SelectItem>
                    <SelectItem value="51-100">51-100</SelectItem>
                    <SelectItem value="100+">100+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Location</Label>
                <Select
                  value={formData.location}
                  onValueChange={(value) => handleChange('location', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="onsite">Onsite Service</SelectItem>
                    <SelectItem value="laboratory">Laboratory</SelectItem>
                    <SelectItem value="either">Either</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="qb-message">Additional Details</Label>
              <Textarea
                id="qb-message"
                placeholder="Tell us about your instruments, any specific requirements, or questions..."
                rows={4}
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
              />
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
              {error}
            </p>
          )}

          <div className="pt-4 border-t border-slate-200">
            <Button type="submit" className="btn-primary w-full text-lg py-6" disabled={isSubmitting}>
              <Send className="w-5 h-5 mr-2" />
              {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
            </Button>
            <p className="text-xs text-slate-500 text-center mt-4">
              We typically respond within 24 hours. For urgent enquiries, please call 01709 542334.
            </p>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  )
}
