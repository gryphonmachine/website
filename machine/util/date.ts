export const convertDate = (dateParam: string) => {
  const date = new Date(dateParam);

  const months = [
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

  const monthName = months[date.getMonth()];

  const day = date.getDate();

  function getDayOrdinal(day: number) {
    const suffixes = ["th", "st", "nd", "rd"];
    const v = day % 100;
    return day + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
  }

  const dayOrdinal = getDayOrdinal(day);

  const output = `${monthName} ${dayOrdinal}`;
  return output;
};

export const convertTime = (epochTime: number) => {
  const dateObj = new Date(epochTime * 1000);
  const timeString = dateObj.toLocaleTimeString([], {
    hour: "numeric",
    minute: "numeric",
  });
  return timeString;
};
