export const formatDate = (date) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let dateArr = date.substring(0, 10).split("-");

  let themonths = months[Number(dateArr[1]) - 1];

  return `${themonths} ${dateArr[2]}, ${dateArr[0]}`;
};
