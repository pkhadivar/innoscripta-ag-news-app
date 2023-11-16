export const sliceDescription = (description: string) => {
  const newDescription = description.length > 120 ?  `${description.slice(0, 120)}...` : description
  return newDescription
}