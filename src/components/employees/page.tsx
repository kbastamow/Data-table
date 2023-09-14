import { employeeData } from "@/data/employeeData"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { Employee } from "@/types/employee"
import { useEffect, useState } from 'react';
 
async function getData(): Promise<Employee[]> {
  // Fetch data from your API here and return it. 
  return employeeData // Simply returning fake data
}
 
export default function EmployeePage() {
    const [data, setData] = useState<Employee[]>([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
          try {
            const result: Employee[] = await getData();
            setData(result);
          } catch (error) {
            // Handle error
            console.error('Error fetching data:', error);
          } finally {
            setLoading(false);
          }
        }
    
        fetchData();
      }, []);
    
      if (loading) {
        // Render a loading indicator or message
        return <div>Loading...</div>;
      }
    
 
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
