export const findString = (base, searchString) => {
  const indx = base.toLowerCase().indexOf(searchString.toLowerCase())
  const splitedString = []

  if (indx > -1) {
    splitedString[0] = base.substr(0, searchString.length)
    splitedString[1] = base.substr(searchString.length, base.length)
    return splitedString
  }

  return [base]
}
