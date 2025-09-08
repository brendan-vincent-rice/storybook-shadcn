import type { Meta, StoryObj } from '@storybook/react'
import { Toaster } from '@/components/ui/sonner'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

const meta = {
  title: 'UI/Sonner',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div>
        <Story />
        <Toaster />
      </div>
    ),
  ],
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
        })
      }
    >
      Show Toast
    </Button>
  ),
}

export const Success: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast.success('Profile updated successfully', {
          description: 'Your changes have been saved.',
        })
      }
    >
      Success Toast
    </Button>
  ),
}

export const Error: Story = {
  render: () => (
    <Button
      variant="destructive"
      onClick={() =>
        toast.error('Something went wrong', {
          description: 'There was a problem with your request.',
        })
      }
    >
      Error Toast
    </Button>
  ),
}

export const Warning: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast.warning('Storage almost full', {
          description: 'You are using 90% of your available storage.',
        })
      }
    >
      Warning Toast
    </Button>
  ),
}

export const Info: Story = {
  render: () => (
    <Button
      variant="secondary"
      onClick={() =>
        toast.info('New feature available', {
          description: 'Check out our latest updates in the changelog.',
        })
      }
    >
      Info Toast
    </Button>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast('Meeting reminder', {
          description: 'You have a meeting in 15 minutes',
          action: {
            label: 'Join',
            onClick: () => console.log('Joining meeting...'),
          },
        })
      }
    >
      Toast with Action
    </Button>
  ),
}

export const WithCancel: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast('File deleted', {
          description: 'The file has been moved to trash.',
          cancel: {
            label: 'Undo',
            onClick: () => console.log('Undoing...'),
          },
        })
      }
    >
      Toast with Cancel
    </Button>
  ),
}

export const Loading: Story = {
  render: () => (
    <Button
      onClick={() => {
        const toastId = toast.loading('Uploading file...', {
          description: 'Please wait while we process your request.',
        })
        
        // Simulate async operation
        setTimeout(() => {
          toast.success('File uploaded successfully', {
            id: toastId,
            description: 'Your file is now available.',
          })
        }, 2000)
      }}
    >
      Loading Toast
    </Button>
  ),
}

export const Promise: Story = {
  render: () => {
    const uploadFile = () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          Math.random() > 0.5 ? resolve('success') : reject('error')
        }, 2000)
      })

    return (
      <Button
        onClick={() =>
          toast.promise(uploadFile, {
            loading: 'Uploading...',
            success: 'File uploaded successfully!',
            error: 'Failed to upload file.',
          })
        }
      >
        Promise Toast
      </Button>
    )
  },
}

export const CustomPosition: Story = {
  render: () => (
    <div className="space-y-2">
      <Button
        onClick={() =>
          toast('Top left toast', {
            position: 'top-left',
          })
        }
      >
        Top Left
      </Button>
      <Button
        onClick={() =>
          toast('Top center toast', {
            position: 'top-center',
          })
        }
      >
        Top Center
      </Button>
      <Button
        onClick={() =>
          toast('Bottom right toast', {
            position: 'bottom-right',
          })
        }
      >
        Bottom Right
      </Button>
    </div>
  ),
}

export const CustomDuration: Story = {
  render: () => (
    <div className="space-y-2">
      <Button
        onClick={() =>
          toast('Quick message', {
            duration: 1000,
          })
        }
      >
        1 second
      </Button>
      <Button
        onClick={() =>
          toast('Standard message', {
            duration: 4000,
          })
        }
      >
        4 seconds
      </Button>
      <Button
        onClick={() =>
          toast('Persistent message', {
            duration: Infinity,
            cancel: {
              label: 'Dismiss',
              onClick: () => {},
            },
          })
        }
      >
        Persistent
      </Button>
    </div>
  ),
}

export const RichContent: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast(
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              JD
            </div>
            <div>
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-muted-foreground">Sent you a message</p>
            </div>
          </div>,
          {
            duration: 5000,
          }
        )
      }
    >
      Rich Content Toast
    </Button>
  ),
}

export const Multiple: Story = {
  render: () => (
    <Button
      onClick={() => {
        toast.success('First toast')
        setTimeout(() => toast.error('Second toast'), 500)
        setTimeout(() => toast.warning('Third toast'), 1000)
        setTimeout(() => toast.info('Fourth toast'), 1500)
      }}
    >
      Multiple Toasts
    </Button>
  ),
}

export const Dismiss: Story = {
  render: () => {
    let toastId: string | number

    return (
      <div className="space-x-2">
        <Button
          onClick={() => {
            toastId = toast('This toast can be dismissed', {
              duration: Infinity,
            })
          }}
        >
          Show Toast
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            if (toastId) {
              toast.dismiss(toastId)
            }
          }}
        >
          Dismiss
        </Button>
        <Button
          variant="destructive"
          onClick={() => {
            toast.dismiss()
          }}
        >
          Dismiss All
        </Button>
      </div>
    )
  },
}

export const FormValidation: Story = {
  render: () => (
    <Button
      onClick={() => {
        const errors = [
          'Email is required',
          'Password must be at least 8 characters',
          'Please accept the terms and conditions',
        ]
        
        errors.forEach((error, index) => {
          setTimeout(() => {
            toast.error(error)
          }, index * 200)
        })
      }}
    >
      Show Form Errors
    </Button>
  ),
}

export const NetworkStatus: Story = {
  render: () => (
    <div className="space-x-2">
      <Button
        onClick={() =>
          toast.success('Connected', {
            description: 'You are now online',
            duration: 2000,
          })
        }
        variant="outline"
      >
        Online
      </Button>
      <Button
        onClick={() =>
          toast.error('Disconnected', {
            description: 'Check your internet connection',
            duration: Infinity,
            cancel: {
              label: 'Retry',
              onClick: () => console.log('Retrying connection...'),
            },
          })
        }
        variant="destructive"
      >
        Offline
      </Button>
    </div>
  ),
}