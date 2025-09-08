import type { Meta, StoryObj } from '@storybook/react'
import { DatePicker, DateRangePicker } from '@/components/ui/date-picker'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

const meta = {
  title: 'UI/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: function DefaultDatePicker() {
    const [date, setDate] = useState<Date>()

    return (
      <div className="space-y-2">
        <Label>Select date</Label>
        <DatePicker date={date} onSelect={setDate} />
      </div>
    )
  },
}

export const WithPreselectedDate: Story = {
  render: function PreselectedDatePicker() {
    const [date, setDate] = useState<Date>(new Date())

    return (
      <div className="space-y-2">
        <Label>Select date</Label>
        <DatePicker date={date} onSelect={setDate} />
      </div>
    )
  },
}

export const CustomPlaceholder: Story = {
  render: function CustomPlaceholderDatePicker() {
    const [date, setDate] = useState<Date>()

    return (
      <div className="space-y-2">
        <Label>Birth date</Label>
        <DatePicker 
          date={date} 
          onSelect={setDate} 
          placeholder="Select your birth date"
        />
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => (
    <div className="space-y-2">
      <Label>Disabled date picker</Label>
      <DatePicker disabled placeholder="This is disabled" />
    </div>
  ),
}

export const CustomWidth: Story = {
  render: function CustomWidthDatePicker() {
    const [date, setDate] = useState<Date>()

    return (
      <div className="space-y-2">
        <Label>Custom width</Label>
        <DatePicker 
          date={date} 
          onSelect={setDate} 
          className="w-[200px]"
        />
      </div>
    )
  },
}

export const DateRange: Story = {
  render: function DateRangeStory() {
    const [dateRange, setDateRange] = useState<{from: Date, to?: Date}>()

    return (
      <div className="space-y-2">
        <Label>Select date range</Label>
        <DateRangePicker dateRange={dateRange} onSelect={setDateRange} />
      </div>
    )
  },
}

export const DateRangePreselected: Story = {
  render: function DateRangePreselectedStory() {
    const [dateRange, setDateRange] = useState<{from: Date, to?: Date}>({
      from: new Date(),
      to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    })

    return (
      <div className="space-y-2">
        <Label>Vacation dates</Label>
        <DateRangePicker dateRange={dateRange} onSelect={setDateRange} />
      </div>
    )
  },
}

export const DateRangeCustomPlaceholder: Story = {
  render: function DateRangeCustomPlaceholderStory() {
    const [dateRange, setDateRange] = useState<{from: Date, to?: Date}>()

    return (
      <div className="space-y-2">
        <Label>Project timeline</Label>
        <DateRangePicker 
          dateRange={dateRange} 
          onSelect={setDateRange}
          placeholder="Select project start and end dates"
        />
      </div>
    )
  },
}

export const DateRangeDisabled: Story = {
  render: () => (
    <div className="space-y-2">
      <Label>Disabled date range picker</Label>
      <DateRangePicker disabled placeholder="This range picker is disabled" />
    </div>
  ),
}

export const BookingForm: Story = {
  render: function BookingFormStory() {
    const [checkIn, setCheckIn] = useState<Date>()
    const [checkOut, setCheckOut] = useState<Date>()

    return (
      <div className="space-y-6 p-6 border rounded-lg">
        <h3 className="text-lg font-semibold">Hotel Booking</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Check-in Date</Label>
            <DatePicker 
              date={checkIn} 
              onSelect={setCheckIn}
              placeholder="Select check-in"
            />
          </div>
          
          <div className="space-y-2">
            <Label>Check-out Date</Label>
            <DatePicker 
              date={checkOut} 
              onSelect={setCheckOut}
              placeholder="Select check-out"
            />
          </div>
        </div>

        {checkIn && checkOut && (
          <div className="p-3 bg-muted rounded-md">
            <p className="text-sm">
              Stay duration: {Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 3600 * 24))} nights
            </p>
          </div>
        )}
      </div>
    )
  },
}

export const EventPlanning: Story = {
  render: function EventPlanningStory() {
    const [eventDate, setEventDate] = useState<Date>()
    const [registrationPeriod, setRegistrationPeriod] = useState<{from: Date, to?: Date}>()

    return (
      <div className="space-y-6 p-6 border rounded-lg max-w-md">
        <h3 className="text-lg font-semibold">Event Planning</h3>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Event Date</Label>
            <DatePicker 
              date={eventDate} 
              onSelect={setEventDate}
              placeholder="When is your event?"
            />
          </div>
          
          <div className="space-y-2">
            <Label>Registration Period</Label>
            <DateRangePicker 
              dateRange={registrationPeriod} 
              onSelect={setRegistrationPeriod}
              placeholder="Registration open period"
            />
          </div>
        </div>

        {eventDate && (
          <div className="p-3 bg-muted rounded-md">
            <p className="text-sm font-medium mb-1">Event Summary:</p>
            <p className="text-sm">Date: {eventDate.toLocaleDateString()}</p>
            {registrationPeriod?.from && (
              <p className="text-sm">
                Registration: {registrationPeriod.from.toLocaleDateString()}
                {registrationPeriod.to ? ` - ${registrationPeriod.to.toLocaleDateString()}` : ''}
              </p>
            )}
          </div>
        )}
      </div>
    )
  },
}

export const ProjectTimeline: Story = {
  render: function ProjectTimelineStory() {
    const [planningPhase, setPlanningPhase] = useState<{from: Date, to?: Date}>()
    const [developmentPhase, setDevelopmentPhase] = useState<{from: Date, to?: Date}>()
    const [testingPhase, setTestingPhase] = useState<{from: Date, to?: Date}>()

    return (
      <div className="space-y-6 p-6 border rounded-lg">
        <h3 className="text-lg font-semibold">Project Timeline</h3>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Planning Phase</Label>
            <DateRangePicker 
              dateRange={planningPhase} 
              onSelect={setPlanningPhase}
              placeholder="Planning start and end dates"
            />
          </div>
          
          <div className="space-y-2">
            <Label>Development Phase</Label>
            <DateRangePicker 
              dateRange={developmentPhase} 
              onSelect={setDevelopmentPhase}
              placeholder="Development start and end dates"
            />
          </div>
          
          <div className="space-y-2">
            <Label>Testing Phase</Label>
            <DateRangePicker 
              dateRange={testingPhase} 
              onSelect={setTestingPhase}
              placeholder="Testing start and end dates"
            />
          </div>
        </div>

        <div className="space-y-2 p-3 bg-muted rounded-md">
          <p className="text-sm font-medium">Project Phases:</p>
          {planningPhase?.from && (
            <div className="text-sm">
              📋 Planning: {planningPhase.from.toLocaleDateString()}
              {planningPhase.to ? ` - ${planningPhase.to.toLocaleDateString()}` : ''}
            </div>
          )}
          {developmentPhase?.from && (
            <div className="text-sm">
              💻 Development: {developmentPhase.from.toLocaleDateString()}
              {developmentPhase.to ? ` - ${developmentPhase.to.toLocaleDateString()}` : ''}
            </div>
          )}
          {testingPhase?.from && (
            <div className="text-sm">
              🧪 Testing: {testingPhase.from.toLocaleDateString()}
              {testingPhase.to ? ` - ${testingPhase.to.toLocaleDateString()}` : ''}
            </div>
          )}
        </div>
      </div>
    )
  },
}