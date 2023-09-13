export interface Employee {
    id: string
    name: string
    department: string
    email: string
    location: string
    status: "active" | "vacation" | "on leave" | "ex"
  }