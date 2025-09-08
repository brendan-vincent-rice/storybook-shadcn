import type { Meta, StoryObj } from '@storybook/react'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { Separator } from '@/components/ui/separator'

const meta = {
  title: 'UI/Resizable',
  component: ResizablePanelGroup,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ResizablePanelGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="h-[400px] w-full p-4">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[200px] max-w-md rounded-lg border"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">One</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">Two</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="h-[400px] w-full p-4">
      <ResizablePanelGroup
        direction="vertical"
        className="min-h-[200px] max-w-md rounded-lg border"
      >
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Header</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
}

export const ThreePanels: Story = {
  render: () => (
    <div className="h-[400px] w-full p-4">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[200px] rounded-lg border"
      >
        <ResizablePanel defaultSize={25}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">Sidebar</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">Main Content</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={25}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">Right Panel</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
}

export const NestedPanels: Story = {
  render: () => (
    <div className="h-[500px] w-full p-4">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[400px] rounded-lg border"
      >
        <ResizablePanel defaultSize={30}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Left Sidebar</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={70}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={25}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Top Panel</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={75}>
              <ResizablePanelGroup direction="horizontal">
                <ResizablePanel defaultSize={70}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Main Content</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={30}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Info Panel</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
}

export const CodeEditor: Story = {
  render: () => (
    <div className="h-[500px] w-full p-4">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[400px] rounded-lg border"
      >
        <ResizablePanel defaultSize={20} minSize={15}>
          <div className="flex h-full flex-col">
            <div className="border-b p-2">
              <span className="text-sm font-medium">Explorer</span>
            </div>
            <div className="flex-1 p-2">
              <div className="space-y-1 text-sm">
                <div>📁 src</div>
                <div className="ml-4">📁 components</div>
                <div className="ml-8">📄 Button.tsx</div>
                <div className="ml-8">📄 Input.tsx</div>
                <div className="ml-4">📁 pages</div>
                <div className="ml-8">📄 Home.tsx</div>
                <div className="ml-8">📄 About.tsx</div>
                <div>📄 package.json</div>
              </div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={60}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={70}>
              <div className="flex h-full flex-col">
                <div className="border-b p-2">
                  <span className="text-sm font-medium">Editor</span>
                </div>
                <div className="flex-1 p-4 font-mono text-sm bg-muted/20">
                  <div>import React from 'react'</div>
                  <div></div>
                  <div>export function Button() {"{"}</div>
                  <div>  return (</div>
                  <div>    &lt;button&gt;</div>
                  <div>      Click me</div>
                  <div>    &lt;/button&gt;</div>
                  <div>  )</div>
                  <div>{"}"}</div>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={30} minSize={20}>
              <div className="flex h-full flex-col">
                <div className="border-b p-2">
                  <span className="text-sm font-medium">Terminal</span>
                </div>
                <div className="flex-1 p-4 font-mono text-sm bg-black text-green-400">
                  <div>$ npm run dev</div>
                  <div>Starting development server...</div>
                  <div>Server running on http://localhost:3000</div>
                  <div className="animate-pulse">█</div>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={20} minSize={15}>
          <div className="flex h-full flex-col">
            <div className="border-b p-2">
              <span className="text-sm font-medium">Properties</span>
            </div>
            <div className="flex-1 p-2 space-y-2 text-sm">
              <div>
                <div className="font-medium">Size</div>
                <div className="text-muted-foreground">Medium</div>
              </div>
              <Separator />
              <div>
                <div className="font-medium">Variant</div>
                <div className="text-muted-foreground">Primary</div>
              </div>
              <Separator />
              <div>
                <div className="font-medium">Disabled</div>
                <div className="text-muted-foreground">False</div>
              </div>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
}

export const EmailClient: Story = {
  render: () => (
    <div className="h-[600px] w-full p-4">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[500px] rounded-lg border"
      >
        <ResizablePanel defaultSize={25} minSize={20}>
          <div className="flex h-full flex-col">
            <div className="border-b p-3">
              <span className="font-semibold">Folders</span>
            </div>
            <div className="flex-1 p-3 space-y-2">
              <div className="font-medium">📥 Inbox (12)</div>
              <div className="text-muted-foreground">📤 Sent</div>
              <div className="text-muted-foreground">📄 Drafts (2)</div>
              <div className="text-muted-foreground">🗑️ Trash</div>
              <Separator />
              <div className="text-muted-foreground">🏷️ Work</div>
              <div className="text-muted-foreground">🏷️ Personal</div>
              <div className="text-muted-foreground">🏷️ Important</div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={35}>
          <div className="flex h-full flex-col">
            <div className="border-b p-3">
              <span className="font-semibold">Inbox</span>
            </div>
            <div className="flex-1 overflow-y-auto">
              {[
                { from: 'John Doe', subject: 'Meeting Tomorrow', preview: 'Hi team, just a reminder...', time: '2:30 PM' },
                { from: 'Sarah Wilson', subject: 'Project Update', preview: 'The latest changes have been...', time: '1:15 PM' },
                { from: 'Mike Johnson', subject: 'Code Review', preview: 'Please review the PR for...', time: '11:45 AM' },
                { from: 'Emma Davis', subject: 'Design Assets', preview: 'Attached are the latest...', time: '10:20 AM' },
              ].map((email, index) => (
                <div key={index} className={`border-b p-3 hover:bg-muted/50 cursor-pointer ${index === 0 ? 'bg-muted/30' : ''}`}>
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-medium text-sm">{email.from}</span>
                    <span className="text-xs text-muted-foreground">{email.time}</span>
                  </div>
                  <div className="text-sm font-medium mb-1">{email.subject}</div>
                  <div className="text-xs text-muted-foreground line-clamp-2">{email.preview}</div>
                </div>
              ))}
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={40}>
          <div className="flex h-full flex-col">
            <div className="border-b p-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold">Meeting Tomorrow</div>
                  <div className="text-sm text-muted-foreground">From: John Doe</div>
                </div>
                <div className="text-sm text-muted-foreground">2:30 PM</div>
              </div>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                <div>Hi team,</div>
                <div>
                  Just a reminder that we have our weekly team meeting tomorrow at 10:00 AM. 
                  We'll be discussing the project timeline and any blockers you might have.
                </div>
                <div>
                  Please come prepared with:
                  <ul className="list-disc ml-6 mt-2">
                    <li>Status update on your current tasks</li>
                    <li>Any questions or concerns</li>
                    <li>Ideas for process improvements</li>
                  </ul>
                </div>
                <div>
                  Looking forward to seeing everyone there!
                </div>
                <div className="pt-4 border-t">
                  <div>Best regards,</div>
                  <div>John Doe</div>
                  <div className="text-sm text-muted-foreground">Project Manager</div>
                </div>
              </div>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
}

export const Dashboard: Story = {
  render: () => (
    <div className="h-[600px] w-full p-4">
      <ResizablePanelGroup
        direction="vertical"
        className="min-h-[500px] rounded-lg border"
      >
        <ResizablePanel defaultSize={20} minSize={15}>
          <div className="flex h-full items-center justify-between p-6 border-b">
            <span className="text-xl font-bold">Analytics Dashboard</span>
            <div className="flex gap-2">
              <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                ● Online
              </div>
              <div className="text-sm text-muted-foreground">
                Last updated: 2 min ago
              </div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={80}>
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={70}>
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-full items-center justify-center p-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-2">Main Chart Area</div>
                      <div className="text-muted-foreground">Revenue over time visualization</div>
                    </div>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-full items-center justify-center p-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-2">Secondary Chart</div>
                      <div className="text-muted-foreground">User engagement metrics</div>
                    </div>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={30} minSize={25}>
              <div className="flex h-full flex-col">
                <div className="border-b p-3">
                  <span className="font-semibold">Key Metrics</span>
                </div>
                <div className="flex-1 p-3 space-y-4">
                  <div>
                    <div className="text-2xl font-bold">$24,500</div>
                    <div className="text-sm text-muted-foreground">Revenue</div>
                  </div>
                  <Separator />
                  <div>
                    <div className="text-2xl font-bold">1,250</div>
                    <div className="text-sm text-muted-foreground">Active Users</div>
                  </div>
                  <Separator />
                  <div>
                    <div className="text-2xl font-bold">89%</div>
                    <div className="text-sm text-muted-foreground">Conversion Rate</div>
                  </div>
                  <Separator />
                  <div>
                    <div className="text-2xl font-bold">342</div>
                    <div className="text-sm text-muted-foreground">New Signups</div>
                  </div>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
}

export const MinMaxSizes: Story = {
  render: () => (
    <div className="h-[400px] w-full p-4">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[200px] max-w-md rounded-lg border"
      >
        <ResizablePanel defaultSize={30} minSize={20} maxSize={40}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <div className="text-center">
              <span className="font-semibold">Sidebar</span>
              <div className="text-xs text-muted-foreground mt-1">
                Min: 20%, Max: 40%
              </div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={70} minSize={60}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <div className="text-center">
              <span className="font-semibold">Main Content</span>
              <div className="text-xs text-muted-foreground mt-1">
                Min: 60%
              </div>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
}

export const CollapsiblePanels: Story = {
  render: () => (
    <div className="h-[400px] w-full p-4">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[200px] rounded-lg border"
      >
        <ResizablePanel defaultSize={20} collapsible minSize={10}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <div className="text-center">
              <span className="font-semibold">Collapsible Left</span>
              <div className="text-xs text-muted-foreground mt-1">
                Can be collapsed
              </div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={60}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">Main Content</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={20} collapsible minSize={10}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <div className="text-center">
              <span className="font-semibold">Collapsible Right</span>
              <div className="text-xs text-muted-foreground mt-1">
                Can be collapsed
              </div>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
}