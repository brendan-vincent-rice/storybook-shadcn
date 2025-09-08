import type { Meta, StoryObj } from '@storybook/react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const meta = {
  title: 'UI/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
    },
    collapsible: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
        <AccordionContent>
          Yes! With type="multiple" you can expand multiple sections at once.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What about styling?</AccordionTrigger>
        <AccordionContent>
          All the styling is customizable and follows design system patterns.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Any other features?</AccordionTrigger>
        <AccordionContent>
          It supports keyboard navigation, focus management, and screen readers.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const SingleNotCollapsible: Story = {
  render: () => (
    <Accordion type="single" defaultValue="item-1" className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Always one open</AccordionTrigger>
        <AccordionContent>
          With collapsible=false (default for single type), one item must always remain open.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Switch between items</AccordionTrigger>
        <AccordionContent>
          Click on another trigger to switch which section is open.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Cannot close all</AccordionTrigger>
        <AccordionContent>
          You cannot close all sections when collapsible is false.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const FAQ: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full max-w-2xl">
      <AccordionItem value="shipping">
        <AccordionTrigger>What are your shipping options?</AccordionTrigger>
        <AccordionContent>
          We offer standard shipping (5-7 business days) for $5.99, express shipping 
          (2-3 business days) for $12.99, and overnight shipping for $24.99. 
          Free shipping is available on orders over $75.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="returns">
        <AccordionTrigger>What is your return policy?</AccordionTrigger>
        <AccordionContent>
          We accept returns within 30 days of purchase. Items must be in original 
          condition with tags attached. Return shipping is free for defective items, 
          otherwise there is a $7.99 return shipping fee.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="sizing">
        <AccordionTrigger>How do I find the right size?</AccordionTrigger>
        <AccordionContent>
          We provide detailed size charts for each product. You can also use our 
          virtual fitting tool or contact customer service for personalized sizing advice.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="support">
        <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
        <AccordionContent>
          Our customer support team is available Monday-Friday 9AM-6PM EST. 
          You can reach us via email at support@example.com, phone at 1-800-123-4567, 
          or through our live chat feature.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const LongContent: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full max-w-2xl">
      <AccordionItem value="terms">
        <AccordionTrigger>Terms and Conditions</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4 text-sm">
            <p>
              By using this website, you agree to be bound by these terms and conditions. 
              Please read them carefully before proceeding.
            </p>
            <p>
              <strong>1. Acceptance of Terms</strong><br />
              Your access to and use of this service is conditioned on your acceptance 
              of and compliance with these Terms.
            </p>
            <p>
              <strong>2. Use License</strong><br />
              Permission is granted to temporarily download one copy of the materials 
              on our website for personal, non-commercial transitory viewing only.
            </p>
            <p>
              <strong>3. Disclaimer</strong><br />
              The materials on our website are provided on an 'as is' basis. We make 
              no warranties, expressed or implied, and hereby disclaim all other warranties.
            </p>
            <p>
              <strong>4. Limitations</strong><br />
              In no event shall our company or its suppliers be liable for any damages 
              arising out of the use or inability to use the materials on our website.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}