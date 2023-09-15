import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getDropDownValues<T>(data: T[], selector: string) {
  const uniqueArray = [...new Set(data.map(item => item[selector]))]
  const noEmptyValues = uniqueArray.filter(element => element !== "").sort()
  const optionsArray = noEmptyValues.map(listItem => {
    return {
      value: listItem,
      label: listItem,
    };
  })
  return optionsArray
}

export function moveColumnsDown(columnObj, columnId: string) {
  const array = columnObj.map(item => item.id)
  const index = array.indexOf(columnId)
  if (index < 0 || index === array.length - 2) { //not found or next to actions whic can't be moved
    return array
  }

  const temp = array[index];
  array[index] = array[index + 1];
  array[index + 1] = temp;
  console.log(array)
  return array;
}

export function moveColumnsUp(columnObj, columnId:string) {
  const array = columnObj.map(item => item.id)
  const index = array.indexOf(columnId)
  if (index < 2 ) { //not found or next to checkbox column which can't be moved
    return array
  }

  const temp = array[index];
  array[index] = array[index - 1];
  array[index - 1] = temp;
  return array;
}

