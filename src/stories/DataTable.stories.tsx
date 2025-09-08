import type { Meta, StoryObj } from '@storybook/react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { MoreHorizontal, Search, Filter, Download } from 'lucide-react'
import { useState } from 'react'

const meta = {
  title: 'UI/DataTable',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const sampleUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active', role: 'Admin', avatar: '' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'inactive', role: 'User', avatar: '' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'active', role: 'Editor', avatar: '' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', status: 'pending', role: 'User', avatar: '' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', status: 'active', role: 'Admin', avatar: '' },
]

const sampleOrders = [
  { id: 1001, customer: 'John Doe', product: 'MacBook Pro', amount: 2399, status: 'completed', date: '2024-03-15' },
  { id: 1002, customer: 'Jane Smith', product: 'iPhone 15', amount: 999, status: 'processing', date: '2024-03-14' },
  { id: 1003, customer: 'Bob Johnson', product: 'AirPods Pro', amount: 249, status: 'shipped', date: '2024-03-13' },
  { id: 1004, customer: 'Alice Brown', product: 'iPad Air', amount: 599, status: 'cancelled', date: '2024-03-12' },
  { id: 1005, customer: 'Charlie Wilson', product: 'Apple Watch', amount: 399, status: 'completed', date: '2024-03-11' },
]

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleUsers.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              <Badge variant={user.status === 'active' ? 'default' : user.status === 'inactive' ? 'destructive' : 'secondary'}>
                {user.status}
              </Badge>
            </TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

export const WithActions: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Role</TableHead>
          <TableHead className="w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleUsers.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              {user.name}
            </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              <Badge variant={user.status === 'active' ? 'default' : user.status === 'inactive' ? 'destructive' : 'secondary'}>
                {user.status}
              </Badge>
            </TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

export const OrdersTable: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Product</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleOrders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-mono">#{order.id}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell>{order.product}</TableCell>
            <TableCell className="text-right font-medium">${order.amount}</TableCell>
            <TableCell>
              <Badge 
                variant={
                  order.status === 'completed' ? 'default' : 
                  order.status === 'processing' ? 'secondary' : 
                  order.status === 'shipped' ? 'outline' : 
                  'destructive'
                }
              >
                {order.status}
              </Badge>
            </TableCell>
            <TableCell>{order.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

export const WithSearch: Story = {
  render: function WithSearchTable() {
    const [search, setSearch] = useState('')
    const filteredUsers = sampleUsers.filter(user => 
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    )

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search users..." 
              className="pl-8"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-muted-foreground">
                  No users found matching "{search}"
                </TableCell>
              </TableRow>
            ) : (
              filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge variant={user.status === 'active' ? 'default' : user.status === 'inactive' ? 'destructive' : 'secondary'}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.role}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    )
  },
}

export const CompactTable: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="h-10 px-3 text-xs">ID</TableHead>
          <TableHead className="h-10 px-3 text-xs">Name</TableHead>
          <TableHead className="h-10 px-3 text-xs">Email</TableHead>
          <TableHead className="h-10 px-3 text-xs">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleUsers.map((user) => (
          <TableRow key={user.id} className="h-10">
            <TableCell className="px-3 text-sm">{user.id}</TableCell>
            <TableCell className="px-3 text-sm">{user.name}</TableCell>
            <TableCell className="px-3 text-sm">{user.email}</TableCell>
            <TableCell className="px-3">
              <Badge variant={user.status === 'active' ? 'default' : 'destructive'} className="text-xs">
                {user.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

export const SelectableRows: Story = {
  render: function SelectableTable() {
    const [selectedRows, setSelectedRows] = useState<number[]>([])

    const toggleRow = (id: number) => {
      setSelectedRows(prev => 
        prev.includes(id) 
          ? prev.filter(rowId => rowId !== id)
          : [...prev, id]
      )
    }

    const toggleAll = () => {
      setSelectedRows(prev => 
        prev.length === sampleUsers.length 
          ? []
          : sampleUsers.map(user => user.id)
      )
    }

    return (
      <div className="space-y-4">
        {selectedRows.length > 0 && (
          <div className="flex items-center gap-2 p-2 bg-muted rounded-md">
            <span className="text-sm">{selectedRows.length} row(s) selected</span>
            <Button size="sm" variant="outline">Delete Selected</Button>
            <Button size="sm" variant="outline">Bulk Edit</Button>
          </div>
        )}
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <input
                  type="checkbox"
                  checked={selectedRows.length === sampleUsers.length}
                  onChange={toggleAll}
                  className="rounded"
                />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleUsers.map((user) => (
              <TableRow 
                key={user.id} 
                className={selectedRows.includes(user.id) ? 'bg-muted/50' : ''}
              >
                <TableCell>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(user.id)}
                    onChange={() => toggleRow(user.id)}
                    className="rounded"
                  />
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge variant={user.status === 'active' ? 'default' : user.status === 'inactive' ? 'destructive' : 'secondary'}>
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell>{user.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  },
}

export const LoadingState: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 5 }).map((_, index) => (
          <TableRow key={index}>
            <TableCell>
              <div className="h-4 bg-muted animate-pulse rounded"></div>
            </TableCell>
            <TableCell>
              <div className="h-4 bg-muted animate-pulse rounded"></div>
            </TableCell>
            <TableCell>
              <div className="h-6 w-16 bg-muted animate-pulse rounded"></div>
            </TableCell>
            <TableCell>
              <div className="h-4 w-12 bg-muted animate-pulse rounded"></div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

export const EmptyState: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={4} className="text-center py-12">
            <div className="space-y-2">
              <div className="text-muted-foreground">No users found</div>
              <Button variant="outline" size="sm">Add User</Button>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

export const ResponsiveTable: Story = {
  render: () => (
    <div className="overflow-x-auto">
      <Table className="min-w-[800px]">
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Salary</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            { name: 'John Doe', email: 'john@company.com', dept: 'Engineering', location: 'San Francisco', salary: '$120,000', startDate: '2022-01-15', status: 'active' },
            { name: 'Jane Smith', email: 'jane@company.com', dept: 'Marketing', location: 'New York', salary: '$95,000', startDate: '2021-11-03', status: 'active' },
            { name: 'Bob Johnson', email: 'bob@company.com', dept: 'Sales', location: 'Chicago', salary: '$85,000', startDate: '2023-03-20', status: 'inactive' },
          ].map((employee, index) => (
            <TableRow key={index}>
              <TableCell className="flex items-center gap-2">
                <Avatar className="w-8 h-8">
                  <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                {employee.name}
              </TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.dept}</TableCell>
              <TableCell>{employee.location}</TableCell>
              <TableCell className="font-medium">{employee.salary}</TableCell>
              <TableCell>{employee.startDate}</TableCell>
              <TableCell>
                <Badge variant={employee.status === 'active' ? 'default' : 'destructive'}>
                  {employee.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
}

export const FinancialData: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Transaction ID</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          { id: 'TXN001', date: '2024-03-15', desc: 'Office Supplies', amount: -156.78, category: 'Expenses', status: 'completed' },
          { id: 'TXN002', date: '2024-03-14', desc: 'Client Payment - ABC Corp', amount: 5000.00, category: 'Revenue', status: 'completed' },
          { id: 'TXN003', date: '2024-03-13', desc: 'Software License', amount: -299.99, category: 'Software', status: 'pending' },
          { id: 'TXN004', date: '2024-03-12', desc: 'Consulting Services', amount: 2500.00, category: 'Revenue', status: 'completed' },
          { id: 'TXN005', date: '2024-03-11', desc: 'Travel Expenses', amount: -450.25, category: 'Travel', status: 'completed' },
        ].map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell className="font-mono">{transaction.id}</TableCell>
            <TableCell>{transaction.date}</TableCell>
            <TableCell>{transaction.desc}</TableCell>
            <TableCell className={`text-right font-medium ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
              ${Math.abs(transaction.amount).toFixed(2)}
            </TableCell>
            <TableCell>{transaction.category}</TableCell>
            <TableCell>
              <Badge variant={transaction.status === 'completed' ? 'default' : 'secondary'}>
                {transaction.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}