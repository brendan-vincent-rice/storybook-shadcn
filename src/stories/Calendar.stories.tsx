import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from '@/components/ui/calendar'
import { useState } from 'react'

const meta = {
  title: 'UI/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: function DefaultCalendar() {
    const [selected, setSelected] = useState<Date>()
    return (
      <Calendar
        mode="single"
        selected={selected}
        onSelect={setSelected}
        className="rounded-md border"
      />
    )
  },
}

export const WithPreselectedDate: Story = {
  render: function PreselectedCalendar() {
    const [selected, setSelected] = useState<Date>(new Date())
    return (
      <Calendar
        mode="single"
        selected={selected}
        onSelect={setSelected}
        className="rounded-md border"
      />
    )
  },
}

export const MultipleSelection: Story = {
  render: function MultipleCalendar() {
    const [selected, setSelected] = useState<Date[]>([])
    return (
      <Calendar
        mode="multiple"
        selected={selected}
        onSelect={setSelected}
        className="rounded-md border"
      />
    )
  },
}

export const RangeSelection: Story = {
  render: function RangeCalendar() {
    const [selected, setSelected] = useState<{from: Date, to?: Date}>()
    return (
      <Calendar
        mode="range"
        selected={selected}
        onSelect={setSelected}
        className="rounded-md border"
        numberOfMonths={2}
      />
    )
  },
}

export const DisabledDates: Story = {
  render: function DisabledCalendar() {
    const [selected, setSelected] = useState<Date>()
    
    // Disable weekends
    const disableWeekends = (date: Date) => {
      const day = date.getDay()
      return day === 0 || day === 6
    }
    
    return (
      <Calendar
        mode="single"
        selected={selected}
        onSelect={setSelected}
        disabled={disableWeekends}
        className="rounded-md border"
      />
    )
  },
}

export const MinMaxDates: Story = {
  render: function MinMaxCalendar() {
    const [selected, setSelected] = useState<Date>()
    const today = new Date()
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate())
    
    return (
      <Calendar
        mode="single"
        selected={selected}
        onSelect={setSelected}
        disabled={(date) => date < today || date > nextMonth}
        className="rounded-md border"
      />
    )
  },
}

export const WithFooter: Story = {
  render: function FooterCalendar() {
    const [selected, setSelected] = useState<Date>()
    
    return (
      <div className="rounded-md border">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={setSelected}
        />
        <div className="border-t p-3 text-center">
          <p className="text-sm text-muted-foreground">
            {selected ? `Selected: ${selected.toLocaleDateString()}` : 'Select a date'}
          </p>
        </div>
      </div>
    )
  },
}

export const MultipleMonths: Story = {
  render: function MultiMonthCalendar() {
    const [selected, setSelected] = useState<Date>()
    
    return (
      <Calendar
        mode="single"
        selected={selected}
        onSelect={setSelected}
        numberOfMonths={2}
        className="rounded-md border"
      />
    )
  },
}

export const DropdownNavigation: Story = {
  render: function DropdownCalendar() {
    const [selected, setSelected] = useState<Date>()
    
    return (
      <Calendar
        mode="single"
        selected={selected}
        onSelect={setSelected}
        captionLayout="dropdown"
        fromYear={2020}
        toYear={2030}
        className="rounded-md border"
      />
    )
  },
}

export const EventCalendar: Story = {
  render: function EventCalendar() {
    const [selected, setSelected] = useState<Date>()
    
    // Mock events
    const events = [
      new Date(2024, 11, 15), // December 15, 2024
      new Date(2024, 11, 20), // December 20, 2024
      new Date(2024, 11, 25), // December 25, 2024
    ]
    
    const hasEvent = (date: Date) => {
      return events.some(event => 
        event.getDate() === date.getDate() &&
        event.getMonth() === date.getMonth() &&
        event.getFullYear() === date.getFullYear()
      )
    }
    
    return (
      <div className="rounded-md border">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={setSelected}
          modifiers={{
            event: hasEvent
          }}
          modifiersStyles={{
            event: { 
              backgroundColor: 'hsl(var(--primary))', 
              color: 'hsl(var(--primary-foreground))',
              borderRadius: '4px'
            }
          }}
        />
        <div className="border-t p-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="w-3 h-3 bg-primary rounded"></div>
            <span>Events</span>
          </div>
        </div>
      </div>
    )
  },
}

export const BookingCalendar: Story = {
  render: function BookingCalendar() {
    const [selected, setSelected] = useState<{from: Date, to?: Date}>()
    
    const today = new Date()
    const bookedDates = [
      new Date(2024, 11, 10),
      new Date(2024, 11, 11),
      new Date(2024, 11, 12),
      new Date(2024, 11, 18),
      new Date(2024, 11, 19),
    ]
    
    const isBooked = (date: Date) => {
      return bookedDates.some(booked => 
        booked.getDate() === date.getDate() &&
        booked.getMonth() === date.getMonth() &&
        booked.getFullYear() === date.getFullYear()
      )
    }
    
    return (
      <div className="rounded-md border">
        <Calendar
          mode="range"
          selected={selected}
          onSelect={setSelected}
          disabled={(date) => date < today || isBooked(date)}
          modifiers={{
            booked: isBooked
          }}
          modifiersStyles={{
            booked: { 
              backgroundColor: 'hsl(var(--destructive))', 
              color: 'hsl(var(--destructive-foreground))',
              textDecoration: 'line-through',
              opacity: 0.5
            }
          }}
          numberOfMonths={2}
        />
        <div className="border-t p-3 space-y-2">
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 bg-primary rounded"></div>
            <span>Available</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 bg-destructive rounded opacity-50"></div>
            <span>Booked</span>
          </div>
          {selected?.from && (
            <p className="text-xs text-muted-foreground mt-2">
              Selected: {selected.from.toLocaleDateString()}
              {selected.to && ` - ${selected.to.toLocaleDateString()}`}
            </p>
          )}
        </div>
      </div>
    )
  },
}

export const CompactCalendar: Story = {
  render: function CompactCalendar() {
    const [selected, setSelected] = useState<Date>()
    
    return (
      <Calendar
        mode="single"
        selected={selected}
        onSelect={setSelected}
        className="rounded-md border"
        classNames={{
          cell: "h-8 w-8 text-center text-xs p-0 relative",
        }}
      />
    )
  },
}