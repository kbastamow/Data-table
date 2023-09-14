import { employeeData } from "@/data/employeeData"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { Employee } from "@/types/employee"
import { useEffect, useState } from 'react';
 
async function getData(): Promise<Employee[]> {
  // Fetch data from your API here and return it. 
  return employeeData // Simply returning fake data
}

// async function deleteData(id: string): Promise<Employee[]> {
//   // Delete from api.
//   const index = employeeData.findIndex((value) => value.id === id) 
//   employeeData.splice(index, 1)
//   return employeeData // Simply returning fake data
// }
 
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
    
//  async function deleteRow(id:string) {
//   console.log("delete this row")
//     try {
//       const result: Employee[] = await deleteData(id);
//       setData(result);
//     } catch (error) {
//       // Handle error
//       console.error('Error deleting data:', error);
//     } 
//   }
 

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data}/>
    </div>
  )
}
