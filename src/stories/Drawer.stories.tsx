import type { Meta, StoryObj } from '@storybook/react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useState } from 'react'

const meta = {
  title: 'UI/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Continue</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const EditProfile: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Edit Profile</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit Profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" defaultValue="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" defaultValue="john@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" placeholder="Tell us about yourself" defaultValue="Software developer passionate about creating great user experiences." />
          </div>
        </div>
        <DrawerFooter>
          <Button>Save changes</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const ShoppingCart: Story = {
  render: () => {
    const [items] = useState([
      { id: 1, name: 'MacBook Pro 16"', price: 2399, quantity: 1 },
      { id: 2, name: 'Magic Mouse', price: 79, quantity: 2 },
      { id: 3, name: 'USB-C Cable', price: 19, quantity: 3 },
    ])

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button>
            Shopping Cart
            <Badge variant="secondary" className="ml-2">
              {items.reduce((sum, item) => sum + item.quantity, 0)}
            </Badge>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Shopping Cart</DrawerTitle>
            <DrawerDescription>
              Review your items before checkout
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 space-y-4 max-h-60 overflow-y-auto">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                </div>
                <p className="font-medium">${item.price * item.quantity}</p>
              </div>
            ))}
          </div>
          <div className="px-4 py-2 border-t">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-lg font-bold">${total}</span>
            </div>
          </div>
          <DrawerFooter>
            <Button>Proceed to Checkout</Button>
            <DrawerClose asChild>
              <Button variant="outline">Continue Shopping</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  },
}

export const ContactForm: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Contact Us</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Get in Touch</DrawerTitle>
          <DrawerDescription>
            Send us a message and we'll get back to you as soon as possible.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="First name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Last name" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="What's this about?" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea 
              id="message" 
              placeholder="Your message here..." 
              className="min-h-[100px]"
            />
          </div>
        </div>
        <DrawerFooter>
          <Button>Send Message</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const TeamMembers: Story = {
  render: () => {
    const [members] = useState([
      { id: 1, name: 'Alice Johnson', role: 'Product Manager', avatar: '' },
      { id: 2, name: 'Bob Smith', role: 'Lead Developer', avatar: '' },
      { id: 3, name: 'Carol Davis', role: 'UI Designer', avatar: '' },
      { id: 4, name: 'David Wilson', role: 'Backend Developer', avatar: '' },
      { id: 5, name: 'Eva Brown', role: 'QA Engineer', avatar: '' },
    ])

    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">View Team</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Team Members</DrawerTitle>
            <DrawerDescription>
              Meet our amazing team of professionals
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 space-y-3 max-h-80 overflow-y-auto">
            {members.map((member) => (
              <div key={member.id} className="flex items-center gap-3 p-3 border rounded-lg">
                <Avatar>
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  },
}

export const Settings: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost">Settings</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Settings</DrawerTitle>
          <DrawerDescription>
            Manage your account settings and preferences
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4 space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Account</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                Change Password
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Two-Factor Authentication
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Privacy Settings
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">Preferences</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                Notifications
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Theme
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Language
              </Button>
            </div>
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const ProductDetails: Story = {
  render: () => {
    const [selectedSize, setSelectedSize] = useState('M')
    const [selectedColor, setSelectedColor] = useState('Black')

    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button>View Product</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Premium T-Shirt</DrawerTitle>
            <DrawerDescription>
              100% Organic Cotton • Sustainable • Comfortable
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold">$29.99</span>
              <Badge>In Stock</Badge>
            </div>
            
            <div>
              <Label className="text-base font-medium">Size</Label>
              <div className="flex gap-2 mt-2">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-base font-medium">Color</Label>
              <div className="flex gap-2 mt-2">
                {['Black', 'White', 'Navy', 'Gray'].map((color) => (
                  <Button
                    key={color}
                    variant={selectedColor === color ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-base font-medium">Description</Label>
              <p className="text-sm text-muted-foreground mt-1">
                This premium t-shirt is made from 100% organic cotton. It features a comfortable fit and is perfect for everyday wear.
              </p>
            </div>
          </div>
          <DrawerFooter>
            <Button>Add to Cart</Button>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  },
}

export const Notifications: Story = {
  render: () => {
    const [notifications] = useState([
      {
        id: 1,
        title: 'New message from John',
        description: 'Hey, how are you doing?',
        time: '2 min ago',
        read: false,
      },
      {
        id: 2,
        title: 'Meeting reminder',
        description: 'Team standup in 15 minutes',
        time: '10 min ago',
        read: false,
      },
      {
        id: 3,
        title: 'System update',
        description: 'Your system has been updated successfully',
        time: '1 hour ago',
        read: true,
      },
      {
        id: 4,
        title: 'New follower',
        description: 'Sarah started following you',
        time: '2 hours ago',
        read: true,
      },
    ])

    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">
            Notifications
            <Badge variant="destructive" className="ml-2">
              {notifications.filter(n => !n.read).length}
            </Badge>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Notifications</DrawerTitle>
            <DrawerDescription>
              Stay up to date with your latest activity
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 space-y-3 max-h-80 overflow-y-auto">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-3 border rounded-lg ${!notification.read ? 'bg-muted/50' : ''}`}
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="font-medium">{notification.title}</p>
                    <p className="text-sm text-muted-foreground">{notification.description}</p>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                  {!notification.read && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <DrawerFooter>
            <Button variant="outline">Mark All as Read</Button>
            <DrawerClose asChild>
              <Button variant="ghost">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  },
}

export const FilterPanel: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Filters</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filter Products</DrawerTitle>
          <DrawerDescription>
            Narrow down your search results
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4 space-y-6">
          <div>
            <Label className="text-base font-medium">Price Range</Label>
            <div className="flex gap-2 mt-2">
              <Input placeholder="Min" type="number" />
              <Input placeholder="Max" type="number" />
            </div>
          </div>

          <div>
            <Label className="text-base font-medium">Category</Label>
            <div className="space-y-2 mt-2">
              {['Electronics', 'Clothing', 'Home & Garden', 'Sports', 'Books'].map((category) => (
                <label key={category} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <Label className="text-base font-medium">Brand</Label>
            <div className="space-y-2 mt-2">
              {['Apple', 'Samsung', 'Nike', 'Adidas', 'Sony'].map((brand) => (
                <label key={brand} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span>{brand}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <Label className="text-base font-medium">Rating</Label>
            <div className="space-y-2 mt-2">
              {['4+ Stars', '3+ Stars', '2+ Stars', '1+ Stars'].map((rating) => (
                <label key={rating} className="flex items-center space-x-2">
                  <input type="radio" name="rating" className="rounded border-gray-300" />
                  <span>{rating}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <DrawerFooter>
          <Button>Apply Filters</Button>
          <Button variant="outline">Clear All</Button>
          <DrawerClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}