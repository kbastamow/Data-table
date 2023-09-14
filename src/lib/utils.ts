import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getDropDownValues<T>(data: T[], selector: string ) {
  const uniqueArray = [...new Set(data.map(item => item[selector]))]
  const noEmptyValues = uniqueArray.filter(element => element !== "").sort()
  const optionsArray = noEmptyValues.map(listItem =>  {
    return {
      value: listItem,
      label: listItem,
    };
})
 return optionsArray
}

//Filteroptions expects this:

// [
//   {
//     value: "Miami",
//     label: "Miami",
//   },
//   {
//     value: "Los angeles",
//     label: "Los angeles",
//   },
// ]

