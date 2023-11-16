export const validateDate = (d: any): any => {
const date = new Date(d)

  const newDate =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  return newDate;
};
