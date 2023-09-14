export interface Employee {
    id: string
    name: string
    department: string
    email: string
    location: string
    status: "active" | "vacation" | "other leave" | "left"
  }