const calculateTime = (fromDate: Date, toDate: Date) => {
  // convert to the same type
  const fDate = new Date(fromDate);
  const tDate = new Date(toDate);

  const diffTime = tDate.getTime() - fDate.getTime();
  const diffHours = diffTime / (1000 * 3600);
  const diffDays = diffHours / 24;
  const diffMonths = diffDays / 30;
  const diffYears = diffMonths / 12;

  const addS = (numberValue: number, text: string) =>
    numberValue > 1 ? `${text}s` : text;

  if (diffHours < 24)
    return {
      label: addS(diffHours, "hour"),
      type: "hour",
      value: Math.floor(diffHours),
    };
  if (diffDays < 30)
    return {
      label: addS(diffDays, "day"),
      type: "day",
      value: Math.floor(diffDays),
    };
  if (diffMonths < 12)
    return {
      label: addS(diffMonths, "month"),
      type: "month",
      value: Math.floor(diffMonths),
    };

  return {
    label: addS(diffYears, "year"),
    type: "year",
    value: Math.floor(diffYears),
  };
};

export default calculateTime;
