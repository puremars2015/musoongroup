export function delete_slice(array: any[], element: any): any[] {
    return array.slice(0, array.indexOf(element)).concat(array.slice(array.indexOf(element) + 1));
  }