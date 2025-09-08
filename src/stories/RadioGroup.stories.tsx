import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'UI/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    defaultValue: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  ),
}

export const WithoutDefault: Story = {
  render: () => (
    <RadioGroup>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="no-default-one" />
        <Label htmlFor="no-default-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="no-default-two" />
        <Label htmlFor="no-default-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="no-default-three" />
        <Label htmlFor="no-default-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
}

export const PaymentMethods: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Payment Method</h3>
      <RadioGroup defaultValue="card">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="card" id="card" />
          <Label htmlFor="card" className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            Credit Card
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="paypal" id="paypal" />
          <Label htmlFor="paypal" className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            PayPal
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="apple" id="apple" />
          <Label htmlFor="apple" className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Apple Pay
          </Label>
        </div>
      </RadioGroup>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold mb-2">Small</h4>
        <RadioGroup defaultValue="small-one" className="gap-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="small-one" id="small-one" className="size-3" />
            <Label htmlFor="small-one" className="text-sm">Small Option</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="small-two" id="small-two" className="size-3" />
            <Label htmlFor="small-two" className="text-sm">Another Small</Label>
          </div>
        </RadioGroup>
      </div>
      
      <div>
        <h4 className="font-semibold mb-2">Default</h4>
        <RadioGroup defaultValue="default-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default-one" id="default-one" />
            <Label htmlFor="default-one">Default Option</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default-two" id="default-two" />
            <Label htmlFor="default-two">Another Default</Label>
          </div>
        </RadioGroup>
      </div>
      
      <div>
        <h4 className="font-semibold mb-2">Large</h4>
        <RadioGroup defaultValue="large-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="large-one" id="large-one" className="size-5" />
            <Label htmlFor="large-one" className="text-base">Large Option</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="large-two" id="large-two" className="size-5" />
            <Label htmlFor="large-two" className="text-base">Another Large</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="enabled" disabled>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="enabled" id="disabled-one" />
        <Label htmlFor="disabled-one">Disabled Selected</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="disabled" id="disabled-two" />
        <Label htmlFor="disabled-two">Disabled Option</Label>
      </div>
    </RadioGroup>
  ),
}

export const Survey: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <div>
        <h3 className="text-lg font-semibold mb-3">Customer Satisfaction Survey</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">How would you rate our service?</h4>
            <RadioGroup name="satisfaction">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="excellent" id="excellent" />
                <Label htmlFor="excellent">Excellent</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="good" id="good" />
                <Label htmlFor="good">Good</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="fair" id="fair" />
                <Label htmlFor="fair">Fair</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="poor" id="poor" />
                <Label htmlFor="poor">Poor</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Would you recommend us?</h4>
            <RadioGroup name="recommend" defaultValue="yes">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="recommend-yes" />
                <Label htmlFor="recommend-yes">Yes, definitely</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="maybe" id="recommend-maybe" />
                <Label htmlFor="recommend-maybe">Maybe</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="recommend-no" />
                <Label htmlFor="recommend-no">No, probably not</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  ),
}