import { ColumnDef } from "@tanstack/react-table";
import { Employee } from "../../types/employee";
import { HiArrowsUpDown } from "react-icons/hi2";
import { RiMore2Fill } from "react-icons/ri";
// import { MoreHorizontal } from "lucide-react"
 
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "../ui/checkbox";


export const columns: ColumnDef<Employee>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return   (
        <div className="flex justify-between text-left display ">Name
            <HiArrowsUpDown className="w-4 h-4 ml-2 cursor-pointer" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}/>
        </div>
      )
    },
    cell: ({row}) => {
        const { name } = row.original;
        return <div className="font-medium text-left ">{name}</div>
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const employee = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 p-0">
           <RiMore2Fill></RiMore2Fill>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(employee.id)}
            >
              Copy employee id
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View employee</DropdownMenuItem>
            <DropdownMenuItem>View more details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
  // ...
]

