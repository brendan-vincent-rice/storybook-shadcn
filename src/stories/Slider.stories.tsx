import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

const meta = {
  title: 'UI/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    min: {
      control: { type: 'number' },
    },
    max: {
      control: { type: 'number' },
    },
    step: {
      control: { type: 'number' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: 'w-[60%]',
  },
}

export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState([50])
    return (
      <div className="w-full max-w-sm space-y-3">
        <div className="flex justify-between">
          <Label>Volume</Label>
          <span className="text-sm text-muted-foreground">{value[0]}%</span>
        </div>
        <Slider
          value={value}
          onValueChange={setValue}
          max={100}
          step={1}
        />
      </div>
    )
  },
}

export const Range: Story = {
  render: () => {
    const [value, setValue] = useState([20, 80])
    return (
      <div className="w-full max-w-sm space-y-3">
        <div className="flex justify-between">
          <Label>Price Range</Label>
          <span className="text-sm text-muted-foreground">
            ${value[0]} - ${value[1]}
          </span>
        </div>
        <Slider
          value={value}
          onValueChange={setValue}
          max={100}
          min={0}
          step={1}
        />
      </div>
    )
  },
}

export const Steps: Story = {
  render: () => {
    const [value, setValue] = useState([25])
    return (
      <div className="w-full max-w-sm space-y-3">
        <div className="flex justify-between">
          <Label>Difficulty</Label>
          <span className="text-sm text-muted-foreground">
            {value[0] === 0 ? 'Easy' : 
             value[0] === 25 ? 'Normal' : 
             value[0] === 50 ? 'Hard' : 
             value[0] === 75 ? 'Expert' : 'Nightmare'}
          </span>
        </div>
        <Slider
          value={value}
          onValueChange={setValue}
          max={100}
          min={0}
          step={25}
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Easy</span>
          <span>Normal</span>
          <span>Hard</span>
          <span>Expert</span>
          <span>Nightmare</span>
        </div>
      </div>
    )
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    disabled: true,
    className: 'w-[60%]',
  },
}

export const MultipleValues: Story = {
  render: () => {
    const [value1, setValue1] = useState([30])
    const [value2, setValue2] = useState([60])
    const [value3, setValue3] = useState([90])
    
    return (
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label>Red</Label>
            <span className="text-sm text-muted-foreground">{value1[0]}</span>
          </div>
          <Slider
            value={value1}
            onValueChange={setValue1}
            max={100}
            step={1}
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label>Green</Label>
            <span className="text-sm text-muted-foreground">{value2[0]}</span>
          </div>
          <Slider
            value={value2}
            onValueChange={setValue2}
            max={100}
            step={1}
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label>Blue</Label>
            <span className="text-sm text-muted-foreground">{value3[0]}</span>
          </div>
          <Slider
            value={value3}
            onValueChange={setValue3}
            max={100}
            step={1}
            className="w-full"
          />
        </div>
        
        <div 
          className="h-20 rounded-lg border"
          style={{
            backgroundColor: `rgb(${Math.round(value1[0] * 2.55)}, ${Math.round(value2[0] * 2.55)}, ${Math.round(value3[0] * 2.55)})`
          }}
        />
      </div>
    )
  },
}

export const Settings: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label>Master Volume</Label>
          <span className="text-sm text-muted-foreground">75%</span>
        </div>
        <Slider defaultValue={[75]} max={100} step={1} />
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label>Music Volume</Label>
          <span className="text-sm text-muted-foreground">60%</span>
        </div>
        <Slider defaultValue={[60]} max={100} step={1} />
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label>Sound Effects</Label>
          <span className="text-sm text-muted-foreground">80%</span>
        </div>
        <Slider defaultValue={[80]} max={100} step={1} />
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label>Voice Chat</Label>
          <span className="text-sm text-muted-foreground">45%</span>
        </div>
        <Slider defaultValue={[45]} max={100} step={1} />
      </div>
    </div>
  ),
}

export const CustomRange: Story = {
  render: () => {
    const [value, setValue] = useState([2024])
    return (
      <div className="w-full max-w-sm space-y-3">
        <div className="flex justify-between">
          <Label>Year</Label>
          <span className="text-sm text-muted-foreground">{value[0]}</span>
        </div>
        <Slider
          value={value}
          onValueChange={setValue}
          min={2000}
          max={2030}
          step={1}
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>2000</span>
          <span>2030</span>
        </div>
      </div>
    )
  },
}

export const Vertical: Story = {
  render: () => (
    <div className="flex space-x-8 h-48 items-end">
      <div className="space-y-2">
        <Label className="text-xs">Bass</Label>
        <Slider
          defaultValue={[40]}
          max={100}
          step={1}
          orientation="vertical"
          className="h-32"
        />
      </div>
      <div className="space-y-2">
        <Label className="text-xs">Mid</Label>
        <Slider
          defaultValue={[60]}
          max={100}
          step={1}
          orientation="vertical"
          className="h-32"
        />
      </div>
      <div className="space-y-2">
        <Label className="text-xs">Treble</Label>
        <Slider
          defaultValue={[80]}
          max={100}
          step={1}
          orientation="vertical"
          className="h-32"
        />
      </div>
    </div>
  ),
}