export const showTime = () => {
  const myDate = new Date();
  const hours = myDate.getHours();
  const minutes = myDate.getMinutes();
  const seconds = myDate.getSeconds();
  const year = myDate.getFullYear();
  const month = myDate.getMonth() + 1;
  const day = myDate.getDate();
  const date = (`${hours}:${minutes}:${seconds} ${year}-${month}-${day}`);
  return date;
};
