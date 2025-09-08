import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from '@/components/ui/progress'
import { useEffect, useState } from 'react'

const meta = {
  title: 'UI/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 33,
  },
}

export const Empty: Story = {
  args: {
    value: 0,
  },
}

export const Half: Story = {
  args: {
    value: 50,
  },
}

export const Full: Story = {
  args: {
    value: 100,
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-2">
      <div className="flex justify-between text-sm">
        <span>Uploading...</span>
        <span>75%</span>
      </div>
      <Progress value={75} />
    </div>
  ),
}

export const MultipleProgress: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>HTML</span>
          <span>90%</span>
        </div>
        <Progress value={90} />
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>CSS</span>
          <span>75%</span>
        </div>
        <Progress value={75} />
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>JavaScript</span>
          <span>60%</span>
        </div>
        <Progress value={60} />
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>React</span>
          <span>45%</span>
        </div>
        <Progress value={45} />
      </div>
    </div>
  ),
}

export const Animated: Story = {
  render: function AnimatedProgress() {
    const [progress, setProgress] = useState(13)

    useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500)
      return () => clearTimeout(timer)
    }, [])

    return (
      <div className="w-full max-w-md space-y-2">
        <div className="flex justify-between text-sm">
          <span>Loading...</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} />
      </div>
    )
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <div className="text-sm">Small</div>
        <Progress value={50} className="h-1" />
      </div>
      
      <div className="space-y-2">
        <div className="text-sm">Default</div>
        <Progress value={50} />
      </div>
      
      <div className="space-y-2">
        <div className="text-sm">Large</div>
        <Progress value={50} className="h-4" />
      </div>
    </div>
  ),
}