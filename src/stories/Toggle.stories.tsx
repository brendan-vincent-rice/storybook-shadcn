import type { Meta, StoryObj } from '@storybook/react'
import { Toggle } from '@/components/ui/toggle'

const meta = {
  title: 'UI/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg'],
    },
    pressed: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Toggle',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Toggle',
  },
}

export const WithIcon: Story = {
  render: () => (
    <Toggle aria-label="Toggle italic">
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4" />
      </svg>
    </Toggle>
  ),
}

export const TextFormatting: Story = {
  render: () => (
    <div className="flex space-x-1">
      <Toggle aria-label="Toggle bold">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z" />
        </svg>
      </Toggle>
      <Toggle aria-label="Toggle italic" pressed>
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 4v3M14 17v3M8 20h8M9.5 4h5" />
        </svg>
      </Toggle>
      <Toggle aria-label="Toggle underline">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </Toggle>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Toggle size="sm" aria-label="Small toggle">
        Small
      </Toggle>
      <Toggle size="default" aria-label="Default toggle">
        Default
      </Toggle>
      <Toggle size="lg" aria-label="Large toggle">
        Large
      </Toggle>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Toggle aria-label="Default state">Default</Toggle>
        <Toggle pressed aria-label="Pressed state">Pressed</Toggle>
        <Toggle disabled aria-label="Disabled state">Disabled</Toggle>
        <Toggle disabled pressed aria-label="Disabled pressed state">Disabled Pressed</Toggle>
      </div>
      
      <div className="flex items-center space-x-2">
        <Toggle variant="outline" aria-label="Outline default">Outline</Toggle>
        <Toggle variant="outline" pressed aria-label="Outline pressed">Outline Pressed</Toggle>
        <Toggle variant="outline" disabled aria-label="Outline disabled">Outline Disabled</Toggle>
        <Toggle variant="outline" disabled pressed aria-label="Outline disabled pressed">Outline Disabled Pressed</Toggle>
      </div>
    </div>
  ),
}

export const Toolbar: Story = {
  render: () => (
    <div className="flex items-center space-x-1 p-2 border rounded-lg">
      <Toggle size="sm" aria-label="Cut">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8M6 4h12M6 20h12" />
        </svg>
      </Toggle>
      <Toggle size="sm" aria-label="Copy">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      </Toggle>
      <Toggle size="sm" aria-label="Paste">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      </Toggle>
      
      <div className="w-px h-6 bg-border mx-1" />
      
      <Toggle size="sm" pressed aria-label="Bold">
        <strong>B</strong>
      </Toggle>
      <Toggle size="sm" aria-label="Italic">
        <em>I</em>
      </Toggle>
      <Toggle size="sm" aria-label="Underline">
        <u>U</u>
      </Toggle>
      
      <div className="w-px h-6 bg-border mx-1" />
      
      <Toggle size="sm" aria-label="Align left">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M3 8h12M3 12h18M3 16h12" />
        </svg>
      </Toggle>
      <Toggle size="sm" pressed aria-label="Align center">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M6 8h12M3 12h18M6 16h12" />
        </svg>
      </Toggle>
      <Toggle size="sm" aria-label="Align right">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M9 8h12M3 12h18M9 16h12" />
        </svg>
      </Toggle>
    </div>
  ),
}

export const WithText: Story = {
  render: () => (
    <div className="flex space-x-2">
      <Toggle>
        <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        Like
      </Toggle>
      <Toggle variant="outline">
        <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
        </svg>
        Share
      </Toggle>
      <Toggle pressed>
        <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
        Bookmarked
      </Toggle>
    </div>
  ),
}