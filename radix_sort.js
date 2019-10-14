const arr = [830, 921, 163, 373, 961, 559, 89, 199, 535, 959, 40, 641, 355, 689, 621, 183, 182, 524, 1]

function radix_sort(arr) {
  let sorted_array = [...arr]
  const maxElement = Math.max(...sorted_array)
  const maxElementsLength = maxElement.toString().length

  for (let i = 1; i <= maxElementsLength; i++) {
    // вместо можно использовать Array.from(new Array(10), () => [])
    const buckets = [...new Array(10)].map(() => [])
    sorted_array.forEach(element => {
      // element / Math.pow(10, i)
      const position = element.toString().length - i
      const bucket_number = parseInt(element.toString()[position] || 0)
      buckets[bucket_number].push(element)
    })
    sorted_array = []
    buckets.forEach(bucket => {
      sorted_array.push(...bucket)
    })
  }
  return sorted_array
}

const sorted = radix_sort(arr)

console.log(sorted)

function optimize_radix_sort(arr) {
  let sorted_array = [...arr]
  const maxElement = Math.max(...sorted_array)
  const maxElementsLength = maxElement.toString().length

  for (let i = 0; i < maxElementsLength; i++) {
    // вместо можно использовать Array.from(new Array(10), () => [])
    const buckets = [...new Array(10)].map(() => [])
    sorted_array.forEach(element => {
      const bucket_number = Math.floor(element / Math.pow(10, i)) % 10
      buckets[bucket_number].push(element)
    })
    sorted_array = []
    buckets.forEach(bucket => {
      sorted_array.push(...bucket)
    })
  }
  return sorted_array
}

const optimize_sorted = optimize_radix_sort(arr)

console.log(sorted)
