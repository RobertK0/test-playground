const getDates = (year, month) => {
  const startDate = new Date(year, month + 1, 1);

  const dates = [];

  while (startDate.getMonth() === month + 1) {
    dates.push(new Date(startDate));
    startDate.setDate(startDate.getDate() + 1);
  }
  return dates;
};

export default getDates;
