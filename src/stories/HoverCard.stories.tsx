import type { Meta, StoryObj } from '@storybook/react'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const meta = {
  title: 'UI/HoverCard',
  component: HoverCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@shadcn</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@shadcn</h4>
            <p className="text-sm">
              The React framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <svg className="mr-2 h-4 w-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const UserProfile: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@johndoe</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/johndoe.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">John Doe</h4>
            <p className="text-sm text-muted-foreground">@johndoe</p>
            <p className="text-sm">
              Software engineer passionate about building great user experiences. 
              Currently working on open source projects.
            </p>
            <div className="flex items-center pt-2 space-x-4">
              <div className="flex items-center">
                <svg className="mr-1 h-3 w-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-xs text-muted-foreground">San Francisco</span>
              </div>
              <div className="flex items-center">
                <svg className="mr-1 h-3 w-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
                <span className="text-xs text-muted-foreground">johndoe.dev</span>
              </div>
            </div>
            <div className="flex items-center pt-1 space-x-2 text-xs text-muted-foreground">
              <span>1.2k followers</span>
              <span>•</span>
              <span>Following 543</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const ProductInfo: Story = {
  render: () => (
    <div className="text-center">
      <p className="mb-2">Check out this</p>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">MacBook Pro</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-72">
          <div className="space-y-2">
            <img
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=200&fit=crop"
              alt="MacBook Pro"
              className="rounded-lg w-full h-32 object-cover"
            />
            <div>
              <h4 className="text-sm font-semibold">MacBook Pro 14-inch</h4>
              <p className="text-sm text-muted-foreground mt-1">
                The most powerful MacBook Pro ever is here. With the blazing-fast M2 Pro or M2 Max chip.
              </p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-sm font-semibold">From $1,999</span>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">(4.8)</span>
                </div>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
}

export const LinkPreview: Story = {
  render: () => (
    <div className="max-w-md text-sm">
      <p>
        I just read this amazing article about{' '}
        <HoverCard>
          <HoverCardTrigger asChild>
            <a href="#" className="text-blue-600 hover:underline">
              React Server Components
            </a>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-semibold">Understanding React Server Components</h4>
              <p className="text-sm text-muted-foreground">
                A comprehensive guide to React Server Components, their benefits, 
                and how they change the way we think about React applications.
              </p>
              <div className="flex items-center text-xs text-muted-foreground">
                <span>blog.example.com</span>
                <span className="mx-2">•</span>
                <span>5 min read</span>
                <span className="mx-2">•</span>
                <span>Dec 15, 2023</span>
              </div>
              <div className="flex items-center space-x-2 pt-1">
                <Avatar className="h-6 w-6">
                  <AvatarFallback className="text-xs">AB</AvatarFallback>
                </Avatar>
                <span className="text-xs">by Alex Johnson</span>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        {' '}that explains the concepts really well.
      </p>
    </div>
  ),
}

export const DocumentPreview: Story = {
  render: () => (
    <div className="space-y-2">
      <p className="text-sm">Recent documents:</p>
      <ul className="space-y-1">
        <li>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link" className="h-auto p-0 text-left">
                📄 Project Proposal.docx
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-64">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-blue-100 rounded">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Project Proposal.docx</h4>
                    <p className="text-xs text-muted-foreground">45 KB</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Last modified: Dec 15, 2023 at 3:24 PM
                </p>
                <p className="text-xs">
                  This document outlines the project scope, timeline, and requirements for the new application.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </li>
      </ul>
    </div>
  ),
}

export const MultipleTriggers: Story = {
  render: () => (
    <div className="flex space-x-4">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline" size="sm">User 1</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="flex space-x-3">
            <Avatar>
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="text-sm font-semibold">User One</h4>
              <p className="text-xs text-muted-foreground">Software Developer</p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline" size="sm">User 2</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="flex space-x-3">
            <Avatar>
              <AvatarFallback>U2</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="text-sm font-semibold">User Two</h4>
              <p className="text-xs text-muted-foreground">Product Designer</p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline" size="sm">User 3</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="flex space-x-3">
            <Avatar>
              <AvatarFallback>U3</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="text-sm font-semibold">User Three</h4>
              <p className="text-xs text-muted-foreground">Project Manager</p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
}