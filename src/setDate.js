export const showTime = () => {
  const myDate = new Date();
  const hours = myDate.getHours();
  const minutes = myDate.getMinutes();
  const seconds = myDate.getSeconds();
  const year = myDate.getFullYear();
  const month = myDate.getMonth();
  const day = myDate.getDay();
  const date = (`${hours}:${minutes}:${seconds} ${year}-${month}-${day}`).toString();
  return date;
};
