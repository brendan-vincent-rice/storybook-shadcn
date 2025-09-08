import type { Meta, StoryObj } from '@storybook/react'
import { AspectRatio } from '@/components/ui/aspect-ratio'

const meta = {
  title: 'UI/AspectRatio',
  component: AspectRatio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: { type: 'number' },
      description: 'The aspect ratio (width / height)',
    },
  },
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  ),
}

export const Square: Story = {
  render: () => (
    <div className="w-[300px]">
      <AspectRatio ratio={1}>
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&dpr=2&q=80"
          alt="Square aspect ratio"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  ),
}

export const Portrait: Story = {
  render: () => (
    <div className="w-[250px]">
      <AspectRatio ratio={3 / 4}>
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&dpr=2&q=80"
          alt="Portrait aspect ratio"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  ),
}

export const VideoPlaceholder: Story = {
  render: () => (
    <div className="w-[600px]">
      <AspectRatio ratio={16 / 9}>
        <div className="flex items-center justify-center w-full h-full bg-muted rounded-md">
          <div className="text-center">
            <svg
              className="mx-auto h-12 w-12 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-muted-foreground">No video</h3>
            <p className="mt-1 text-sm text-muted-foreground">16:9 aspect ratio</p>
          </div>
        </div>
      </AspectRatio>
    </div>
  ),
}

export const ImageGrid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[600px]">
      <AspectRatio ratio={4 / 3}>
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&dpr=2&q=80"
          alt="Landscape 1"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
      <AspectRatio ratio={4 / 3}>
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&dpr=2&q=80"
          alt="Landscape 2"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
      <AspectRatio ratio={4 / 3}>
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&dpr=2&q=80"
          alt="Landscape 3"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
      <AspectRatio ratio={4 / 3}>
        <img
          src="https://images.unsplash.com/photo-1418065460487-3956ef220c04?w=400&dpr=2&q=80"
          alt="Landscape 4"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  ),
}

export const WithOverlay: Story = {
  render: () => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9} className="relative">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&dpr=2&q=80"
          alt="Photo with overlay"
          className="rounded-md object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40 rounded-md flex items-center justify-center">
          <button className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
        </div>
      </AspectRatio>
    </div>
  ),
}

export const ResponsiveGallery: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
      {[
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&dpr=2&q=80',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&dpr=2&q=80',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&dpr=2&q=80',
        'https://images.unsplash.com/photo-1418065460487-3956ef220c04?w=400&dpr=2&q=80',
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=400&dpr=2&q=80',
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&dpr=2&q=80',
      ].map((src, index) => (
        <AspectRatio key={index} ratio={1}>
          <img
            src={src}
            alt={`Gallery image ${index + 1}`}
            className="rounded-md object-cover w-full h-full hover:scale-105 transition-transform cursor-pointer"
          />
        </AspectRatio>
      ))}
    </div>
  ),
}

export const CustomRatios: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-2xl">
      <div>
        <h3 className="text-lg font-semibold mb-2">Golden Ratio (1.618:1)</h3>
        <AspectRatio ratio={1.618}>
          <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-md flex items-center justify-center text-white font-semibold">
            Golden Ratio
          </div>
        </AspectRatio>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Ultra Wide (21:9)</h3>
        <AspectRatio ratio={21 / 9}>
          <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-md flex items-center justify-center text-white font-semibold">
            Ultra Wide
          </div>
        </AspectRatio>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Classic Film (4:3)</h3>
        <AspectRatio ratio={4 / 3}>
          <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-md flex items-center justify-center text-white font-semibold">
            Classic Film
          </div>
        </AspectRatio>
      </div>
    </div>
  ),
}