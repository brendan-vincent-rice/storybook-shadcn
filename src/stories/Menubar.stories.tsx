import type { Meta, StoryObj } from '@storybook/react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  MenubarCheckboxItem,
} from '@/components/ui/menubar'

const meta = {
  title: 'UI/Menubar',
  component: Menubar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Menubar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Tab <MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
          <MenubarItem>New Window <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
          <MenubarItem disabled>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email Link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Print <MenubarShortcut>⌘P</MenubarShortcut></MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo <MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
          <MenubarItem>Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Search the Web</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Find...</MenubarItem>
              <MenubarItem>Find Next</MenubarItem>
              <MenubarItem>Find Previous</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>Always Show Full URLs</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>Reload <MenubarShortcut>⌘R</MenubarShortcut></MenubarItem>
          <MenubarItem disabled inset>Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Toggle Fullscreen</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Hide Sidebar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

export const SimpleMenu: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Actions</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Create New</MenubarItem>
          <MenubarItem>Save</MenubarItem>
          <MenubarItem>Export</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Settings</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

export const WithRadioGroup: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Theme</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="light">
            <MenubarRadioItem value="light">Light</MenubarRadioItem>
            <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
            <MenubarRadioItem value="system">System</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Layout</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="sidebar">
            <MenubarRadioItem value="sidebar">Sidebar</MenubarRadioItem>
            <MenubarRadioItem value="tabs">Tabs</MenubarRadioItem>
            <MenubarRadioItem value="grid">Grid</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

export const ApplicationMenu: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Project <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
          <MenubarItem>Open Project <MenubarShortcut>⌘O</MenubarShortcut></MenubarItem>
          <MenubarItem>Save Project <MenubarShortcut>⌘S</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Recent Projects</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>My Website</MenubarItem>
              <MenubarItem>E-commerce App</MenubarItem>
              <MenubarItem>Dashboard</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Clear Recent</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Close Project <MenubarShortcut>⌘W</MenubarShortcut></MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo <MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
          <MenubarItem>Redo <MenubarShortcut>⌘Y</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Cut <MenubarShortcut>⌘X</MenubarShortcut></MenubarItem>
          <MenubarItem>Copy <MenubarShortcut>⌘C</MenubarShortcut></MenubarItem>
          <MenubarItem>Paste <MenubarShortcut>⌘V</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Select All <MenubarShortcut>⌘A</MenubarShortcut></MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>Show Toolbar</MenubarCheckboxItem>
          <MenubarCheckboxItem>Show Sidebar</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>Show Status Bar</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarRadioGroup value="comfortable">
            <MenubarRadioItem value="compact">Compact</MenubarRadioItem>
            <MenubarRadioItem value="comfortable">Comfortable</MenubarRadioItem>
            <MenubarRadioItem value="spacious">Spacious</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Tools</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Extensions</MenubarItem>
          <MenubarItem>Developer Tools <MenubarShortcut>F12</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Preferences <MenubarShortcut>⌘,</MenubarShortcut></MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Help</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Documentation</MenubarItem>
          <MenubarItem>Keyboard Shortcuts</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>About</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

export const TextEditorMenu: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Document <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
          <MenubarItem>Open <MenubarShortcut>⌘O</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Save <MenubarShortcut>⌘S</MenubarShortcut></MenubarItem>
          <MenubarItem>Save As... <MenubarShortcut>⇧⌘S</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Export</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Export as PDF</MenubarItem>
              <MenubarItem>Export as HTML</MenubarItem>
              <MenubarItem>Export as Markdown</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Print <MenubarShortcut>⌘P</MenubarShortcut></MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Format</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Bold <MenubarShortcut>⌘B</MenubarShortcut></MenubarCheckboxItem>
          <MenubarCheckboxItem>Italic <MenubarShortcut>⌘I</MenubarShortcut></MenubarCheckboxItem>
          <MenubarCheckboxItem>Underline <MenubarShortcut>⌘U</MenubarShortcut></MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Alignment</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarRadioGroup value="left">
                <MenubarRadioItem value="left">Left</MenubarRadioItem>
                <MenubarRadioItem value="center">Center</MenubarRadioItem>
                <MenubarRadioItem value="right">Right</MenubarRadioItem>
                <MenubarRadioItem value="justify">Justify</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Clear Formatting</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Insert</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Image</MenubarItem>
          <MenubarItem>Table</MenubarItem>
          <MenubarItem>Link <MenubarShortcut>⌘K</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Page Break</MenubarItem>
          <MenubarItem>Date & Time</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

export const MediaPlayerMenu: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Playback</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Play/Pause <MenubarShortcut>Space</MenubarShortcut></MenubarItem>
          <MenubarItem>Stop <MenubarShortcut>⌘.</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Previous Track <MenubarShortcut>⌘←</MenubarShortcut></MenubarItem>
          <MenubarItem>Next Track <MenubarShortcut>⌘→</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarCheckboxItem>Shuffle</MenubarCheckboxItem>
          <MenubarRadioGroup value="off">
            <MenubarRadioItem value="off">Repeat Off</MenubarRadioItem>
            <MenubarRadioItem value="one">Repeat One</MenubarRadioItem>
            <MenubarRadioItem value="all">Repeat All</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>Show Playlist</MenubarCheckboxItem>
          <MenubarCheckboxItem>Show Visualizer</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>Show Now Playing</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarRadioGroup value="album">
            <MenubarRadioItem value="list">List View</MenubarRadioItem>
            <MenubarRadioItem value="album">Album View</MenubarRadioItem>
            <MenubarRadioItem value="artist">Artist View</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Audio</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Increase Volume <MenubarShortcut>⌘↑</MenubarShortcut></MenubarItem>
          <MenubarItem>Decrease Volume <MenubarShortcut>⌘↓</MenubarShortcut></MenubarItem>
          <MenubarItem>Mute <MenubarShortcut>⌘M</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Equalizer</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarRadioGroup value="flat">
                <MenubarRadioItem value="flat">Flat</MenubarRadioItem>
                <MenubarRadioItem value="rock">Rock</MenubarRadioItem>
                <MenubarRadioItem value="pop">Pop</MenubarRadioItem>
                <MenubarRadioItem value="jazz">Jazz</MenubarRadioItem>
                <MenubarRadioItem value="classical">Classical</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

export const BrowserMenu: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Navigation</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Back <MenubarShortcut>⌘[</MenubarShortcut></MenubarItem>
          <MenubarItem>Forward <MenubarShortcut>⌘]</MenubarShortcut></MenubarItem>
          <MenubarItem>Reload <MenubarShortcut>⌘R</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Home</MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>Bookmarks</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>GitHub</MenubarItem>
              <MenubarItem>Stack Overflow</MenubarItem>
              <MenubarItem>MDN Web Docs</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Manage Bookmarks</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Developer</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Inspect Element <MenubarShortcut>F12</MenubarShortcut></MenubarItem>
          <MenubarItem>View Source <MenubarShortcut>⌘U</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Console <MenubarShortcut>⌘⌥J</MenubarShortcut></MenubarItem>
          <MenubarItem>Network</MenubarItem>
          <MenubarItem>Performance</MenubarItem>
          <MenubarSeparator />
          <MenubarCheckboxItem>Device Mode</MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Window</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Tab <MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
          <MenubarItem>New Window <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
          <MenubarItem>New Incognito Window <MenubarShortcut>⇧⌘N</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Close Tab <MenubarShortcut>⌘W</MenubarShortcut></MenubarItem>
          <MenubarItem>Close Window <MenubarShortcut>⇧⌘W</MenubarShortcut></MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

export const GameMenu: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Game</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Game <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
          <MenubarItem>Load Game <MenubarShortcut>⌘L</MenubarShortcut></MenubarItem>
          <MenubarItem>Save Game <MenubarShortcut>⌘S</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Pause <MenubarShortcut>Space</MenubarShortcut></MenubarItem>
          <MenubarItem>Restart <MenubarShortcut>⌘R</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarItem>High Scores</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Settings</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="medium">
            <MenubarRadioItem value="easy">Easy</MenubarRadioItem>
            <MenubarRadioItem value="medium">Medium</MenubarRadioItem>
            <MenubarRadioItem value="hard">Hard</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarCheckboxItem checked>Sound Effects</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>Background Music</MenubarCheckboxItem>
          <MenubarCheckboxItem>Animations</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Graphics Quality</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarRadioGroup value="high">
                <MenubarRadioItem value="low">Low</MenubarRadioItem>
                <MenubarRadioItem value="medium">Medium</MenubarRadioItem>
                <MenubarRadioItem value="high">High</MenubarRadioItem>
                <MenubarRadioItem value="ultra">Ultra</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Help</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>How to Play</MenubarItem>
          <MenubarItem>Controls</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Tips & Tricks</MenubarItem>
          <MenubarItem>FAQ</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>About</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

export const DashboardMenu: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Dashboard</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Refresh Data <MenubarShortcut>⌘R</MenubarShortcut></MenubarItem>
          <MenubarItem>Export Report <MenubarShortcut>⌘E</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Time Range</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarRadioGroup value="week">
                <MenubarRadioItem value="day">Last 24 Hours</MenubarRadioItem>
                <MenubarRadioItem value="week">Last Week</MenubarRadioItem>
                <MenubarRadioItem value="month">Last Month</MenubarRadioItem>
                <MenubarRadioItem value="quarter">Last Quarter</MenubarRadioItem>
                <MenubarRadioItem value="year">Last Year</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>Show Charts</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>Show Tables</MenubarCheckboxItem>
          <MenubarCheckboxItem>Show KPIs</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarRadioGroup value="auto">
            <MenubarRadioItem value="light">Light Theme</MenubarRadioItem>
            <MenubarRadioItem value="dark">Dark Theme</MenubarRadioItem>
            <MenubarRadioItem value="auto">Auto</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Filters</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Sales</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>Revenue</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>Users</MenubarCheckboxItem>
          <MenubarCheckboxItem>Traffic</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem>Clear All Filters</MenubarItem>
          <MenubarItem>Save Filter Set</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}