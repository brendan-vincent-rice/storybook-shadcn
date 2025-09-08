import type { Meta, StoryObj } from '@storybook/react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'UI/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const Simple: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Click me</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p className="text-sm">This is a simple popover content.</p>
      </PopoverContent>
    </Popover>
  ),
}

export const UserMenu: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-10 rounded-full p-0">
          <img
            src="https://github.com/shadcn.png"
            alt="Avatar"
            className="rounded-full w-8 h-8"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56" align="end">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label className="text-xs">Name</Label>
              <div className="col-span-2 text-sm">John Doe</div>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label className="text-xs">Email</Label>
              <div className="col-span-2 text-sm text-muted-foreground">john@example.com</div>
            </div>
          </div>
          <hr />
          <div className="grid gap-1">
            <Button variant="ghost" size="sm" className="justify-start">
              Profile
            </Button>
            <Button variant="ghost" size="sm" className="justify-start">
              Settings
            </Button>
            <Button variant="ghost" size="sm" className="justify-start">
              Help
            </Button>
            <hr className="my-1" />
            <Button variant="ghost" size="sm" className="justify-start text-red-600">
              Sign out
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const ColorPicker: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-12 h-10">
          <div className="w-4 h-4 rounded-full bg-blue-500" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Color Picker</h4>
            <p className="text-sm text-muted-foreground">
              Select a color for your element.
            </p>
          </div>
          <div className="grid grid-cols-8 gap-2">
            {[
              'bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500',
              'bg-blue-500', 'bg-indigo-500', 'bg-purple-500', 'bg-pink-500',
              'bg-red-400', 'bg-orange-400', 'bg-yellow-400', 'bg-green-400',
              'bg-blue-400', 'bg-indigo-400', 'bg-purple-400', 'bg-pink-400',
            ].map((color, index) => (
              <button
                key={index}
                className={`w-6 h-6 rounded-full ${color} hover:scale-110 transition-transform`}
              />
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const DatePicker: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Pick a date
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <div className="p-3">
          <p className="text-sm text-muted-foreground mb-3">Select a date from the calendar</p>
          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
              <div key={day} className="p-2 text-muted-foreground font-medium">
                {day}
              </div>
            ))}
            {Array.from({ length: 35 }, (_, i) => {
              const day = i - 6
              const isCurrentMonth = day > 0 && day <= 30
              const isToday = day === 15
              
              return (
                <button
                  key={i}
                  className={`p-2 rounded-md hover:bg-accent text-sm ${
                    !isCurrentMonth 
                      ? 'text-muted-foreground' 
                      : isToday 
                      ? 'bg-primary text-primary-foreground' 
                      : ''
                  }`}
                  disabled={!isCurrentMonth}
                >
                  {isCurrentMonth ? day : ''}
                </button>
              )
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const Positions: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8 p-8">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Top</Button>
        </PopoverTrigger>
        <PopoverContent side="top">
          <p className="text-sm">Popover on top</p>
        </PopoverContent>
      </Popover>
      
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Right</Button>
        </PopoverTrigger>
        <PopoverContent side="right">
          <p className="text-sm">Popover on right</p>
        </PopoverContent>
      </Popover>
      
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </PopoverTrigger>
        <PopoverContent side="bottom">
          <p className="text-sm">Popover on bottom</p>
        </PopoverContent>
      </Popover>
      
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Left</Button>
        </PopoverTrigger>
        <PopoverContent side="left">
          <p className="text-sm">Popover on left</p>
        </PopoverContent>
      </Popover>
      
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Center</Button>
        </PopoverTrigger>
        <PopoverContent>
          <p className="text-sm">Centered popover</p>
        </PopoverContent>
      </Popover>
      
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Start</Button>
        </PopoverTrigger>
        <PopoverContent align="start">
          <p className="text-sm">Aligned to start</p>
        </PopoverContent>
      </Popover>
    </div>
  ),
}