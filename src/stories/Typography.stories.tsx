import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from '@/components/ui/typography'

const meta = {
  title: 'UI/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Typography>
      This is the default paragraph text. It uses the default styling for body text content.
    </Typography>
  ),
}

export const Headings: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
    </div>
  ),
}

export const Paragraph: Story = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <Typography variant="p">
        The king, seeing how much happier his subjects were, realized the error of his ways and repealed the unjust law.
      </Typography>
      <Typography variant="p">
        Typography is the art and technique of arranging type to make written language legible, readable and appealing when displayed.
      </Typography>
    </div>
  ),
}

export const TextVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="lead">
        A modal dialog that interrupts the user with important content and expects a response.
      </Typography>
      <Typography variant="large">This is large text.</Typography>
      <Typography variant="small">This is small text.</Typography>
      <Typography variant="muted">This is muted text.</Typography>
    </div>
  ),
}

export const Blockquote: Story = {
  render: () => (
    <Typography variant="blockquote">
      "After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."
    </Typography>
  ),
}

export const List: Story = {
  render: () => (
    <Typography variant="list">
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners : 20 gold coins</li>
    </Typography>
  ),
}

export const InlineCode: Story = {
  render: () => (
    <Typography variant="p">
      Install the component using{" "}
      <Typography variant="inlineCode" as="span">npm install @radix-ui/react-alert-dialog</Typography>
    </Typography>
  ),
}

export const BlogPost: Story = {
  render: () => (
    <article className="prose prose-slate max-w-3xl mx-auto">
      <Typography variant="h1">Introduction to React</Typography>
      
      <Typography variant="lead">
        React is a JavaScript library for building user interfaces. It's maintained by Facebook and a community of developers.
      </Typography>
      
      <Typography variant="h2">Getting Started</Typography>
      
      <Typography variant="p">
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
      </Typography>
      
      <Typography variant="h3">Key Features</Typography>
      
      <Typography variant="list">
        <li>Declarative views make your code more predictable and easier to debug</li>
        <li>Component-based architecture for building encapsulated components</li>
        <li>Learn once, write anywhere - use React for web, mobile, and desktop</li>
      </Typography>
      
      <Typography variant="blockquote">
        "React has been designed from the start for gradual adoption, and you can use as little or as much React as you need."
      </Typography>
      
      <Typography variant="h3">Installation</Typography>
      
      <Typography variant="p">
        You can install React using npm. Run{" "}
        <Typography variant="inlineCode" as="span">npm install react react-dom</Typography>{" "}
        in your project directory.
      </Typography>
      
      <Typography variant="h2">Conclusion</Typography>
      
      <Typography variant="p">
        React provides a solid foundation for building modern web applications with its component-based architecture and efficient rendering system.
      </Typography>
      
      <Typography variant="small">
        Last updated: March 2024
      </Typography>
    </article>
  ),
}

export const Documentation: Story = {
  render: () => (
    <div className="max-w-4xl mx-auto space-y-8">
      <header>
        <Typography variant="h1">API Documentation</Typography>
        <Typography variant="lead">
          Complete reference for our REST API endpoints and authentication methods.
        </Typography>
      </header>
      
      <section className="space-y-4">
        <Typography variant="h2">Authentication</Typography>
        
        <Typography variant="p">
          All API requests require authentication. Include your API key in the{" "}
          <Typography variant="inlineCode" as="span">Authorization</Typography>{" "}
          header.
        </Typography>
        
        <Typography variant="blockquote">
          Keep your API keys secure and never expose them in client-side code.
        </Typography>
      </section>
      
      <section className="space-y-4">
        <Typography variant="h3">Available Endpoints</Typography>
        
        <Typography variant="list">
          <li><Typography variant="inlineCode" as="span">GET /api/users</Typography> - Retrieve all users</li>
          <li><Typography variant="inlineCode" as="span">POST /api/users</Typography> - Create a new user</li>
          <li><Typography variant="inlineCode" as="span">PUT /api/users/:id</Typography> - Update a user</li>
          <li><Typography variant="inlineCode" as="span">DELETE /api/users/:id</Typography> - Delete a user</li>
        </Typography>
      </section>
      
      <section className="space-y-4">
        <Typography variant="h3">Response Codes</Typography>
        
        <Typography variant="p">
          Our API uses conventional HTTP response codes to indicate the success or failure of an API request.
        </Typography>
        
        <div className="space-y-2">
          <div>
            <Typography variant="inlineCode" as="span">200</Typography>
            <Typography variant="muted" as="span" className="ml-2">OK - Everything worked as expected</Typography>
          </div>
          <div>
            <Typography variant="inlineCode" as="span">400</Typography>
            <Typography variant="muted" as="span" className="ml-2">Bad Request - The request was unacceptable</Typography>
          </div>
          <div>
            <Typography variant="inlineCode" as="span">401</Typography>
            <Typography variant="muted" as="span" className="ml-2">Unauthorized - No valid API key provided</Typography>
          </div>
          <div>
            <Typography variant="inlineCode" as="span">500</Typography>
            <Typography variant="muted" as="span" className="ml-2">Server Error - Something went wrong on our end</Typography>
          </div>
        </div>
      </section>
      
      <footer className="border-t pt-6">
        <Typography variant="small">
          For additional support, contact our developer team at api@company.com
        </Typography>
      </footer>
    </div>
  ),
}

export const Newsletter: Story = {
  render: () => (
    <div className="max-w-2xl mx-auto space-y-6 p-8 border rounded-lg">
      <header className="text-center space-y-2">
        <Typography variant="h2">Weekly Newsletter</Typography>
        <Typography variant="muted">March 15, 2024 • Issue #47</Typography>
      </header>
      
      <Typography variant="lead">
        Welcome to this week's edition of our developer newsletter, featuring the latest updates, tutorials, and community highlights.
      </Typography>
      
      <section className="space-y-4">
        <Typography variant="h3">🎉 This Week's Highlights</Typography>
        
        <Typography variant="list">
          <li>New React 18 features released with improved concurrent rendering</li>
          <li>TypeScript 5.0 beta now available for testing</li>
          <li>Tailwind CSS v3.3 introduces new color palette options</li>
        </Typography>
      </section>
      
      <section className="space-y-4">
        <Typography variant="h3">💡 Tutorial of the Week</Typography>
        
        <Typography variant="p">
          Learn how to build a responsive dashboard with React and Tailwind CSS. This comprehensive guide covers everything from setup to deployment.
        </Typography>
        
        <Typography variant="blockquote">
          "The best way to learn is by building real projects that solve actual problems."
        </Typography>
      </section>
      
      <section className="space-y-4">
        <Typography variant="h3">🔧 Quick Tips</Typography>
        
        <Typography variant="p">
          Use <Typography variant="inlineCode" as="span">console.table()</Typography> instead of{" "}
          <Typography variant="inlineCode" as="span">console.log()</Typography> to better visualize array and object data in your browser's developer tools.
        </Typography>
      </section>
      
      <footer className="border-t pt-4 space-y-2">
        <Typography variant="small">
          You're receiving this because you subscribed to our developer newsletter.
        </Typography>
        <Typography variant="muted">
          Unsubscribe • Update preferences • Forward to a friend
        </Typography>
      </footer>
    </div>
  ),
}

export const TermsOfService: Story = {
  render: () => (
    <div className="max-w-4xl mx-auto space-y-8 p-8">
      <header className="space-y-2">
        <Typography variant="h1">Terms of Service</Typography>
        <Typography variant="muted">Last updated: March 1, 2024</Typography>
      </header>
      
      <Typography variant="lead">
        These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our service, you agree to be bound by these Terms.
      </Typography>
      
      <section className="space-y-4">
        <Typography variant="h2">1. Acceptance of Terms</Typography>
        
        <Typography variant="p">
          By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
        </Typography>
      </section>
      
      <section className="space-y-4">
        <Typography variant="h2">2. Use License</Typography>
        
        <Typography variant="p">
          Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        </Typography>
        
        <Typography variant="list">
          <li>modify or copy the materials</li>
          <li>use the materials for any commercial purpose or for any public display</li>
          <li>attempt to reverse engineer any software contained on our website</li>
          <li>remove any copyright or other proprietary notations from the materials</li>
        </Typography>
      </section>
      
      <section className="space-y-4">
        <Typography variant="h2">3. Disclaimer</Typography>
        
        <Typography variant="blockquote">
          The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.
        </Typography>
        
        <Typography variant="p">
          Further, we do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website.
        </Typography>
      </section>
      
      <section className="space-y-4">
        <Typography variant="h2">4. Contact Information</Typography>
        
        <Typography variant="p">
          If you have any questions about these Terms of Service, please contact us at{" "}
          <Typography variant="inlineCode" as="span">legal@company.com</Typography>
        </Typography>
      </section>
      
      <footer className="border-t pt-6">
        <Typography variant="small">
          © 2024 Company Name. All rights reserved.
        </Typography>
      </footer>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6 max-w-4xl">
      <div className="space-y-2">
        <Typography variant="small" className="text-muted-foreground uppercase tracking-wider">Headings</Typography>
        <Typography variant="h1">Heading 1 - The largest heading</Typography>
        <Typography variant="h2">Heading 2 - Section heading</Typography>
        <Typography variant="h3">Heading 3 - Subsection heading</Typography>
        <Typography variant="h4">Heading 4 - Minor heading</Typography>
      </div>
      
      <div className="space-y-2">
        <Typography variant="small" className="text-muted-foreground uppercase tracking-wider">Text Variants</Typography>
        <Typography variant="lead">Lead text - Used for important introductory text</Typography>
        <Typography variant="p">Paragraph - The default body text for content</Typography>
        <Typography variant="large">Large text - Emphasized body text</Typography>
        <Typography variant="small">Small text - Fine print and captions</Typography>
        <Typography variant="muted">Muted text - Secondary information</Typography>
      </div>
      
      <div className="space-y-2">
        <Typography variant="small" className="text-muted-foreground uppercase tracking-wider">Special Elements</Typography>
        <Typography variant="blockquote">
          Blockquote - "Used for highlighting quotes and important statements"
        </Typography>
        <Typography variant="p">
          Inline code example: <Typography variant="inlineCode" as="span">const greeting = "Hello World"</Typography>
        </Typography>
        <Typography variant="list">
          <li>List item one - First point</li>
          <li>List item two - Second point</li>
          <li>List item three - Third point</li>
        </Typography>
      </div>
    </div>
  ),
}