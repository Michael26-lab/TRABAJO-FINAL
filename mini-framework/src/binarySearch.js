export function binarySearch(arr, target) {
  if (!Array.isArray(arr)) throw new Error("El primer parámetro debe ser un arreglo");
  if (arr.some(v => typeof v !== "number")) throw new Error("El arreglo debe contener números");

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}
