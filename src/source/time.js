export const isMoreThanADay = (unix) => {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const now = new Date();
  const d = unix;
  const date = new Date(+d);
  let createdAt = date;
  const oneDay = 60 * 60 * 24 * 1000;

  const compareDatesBoolean = now - createdAt > oneDay;

  return compareDatesBoolean
    ? date.toLocaleDateString("id", options)
    : date.toLocaleTimeString("id");
};

export const fullFormat = (unix) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Jakarta",
    timeZoneName: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  const d = unix;
  const date = new Date(+d);

  const format = new Intl.DateTimeFormat(
    ["id", "en-US", "ja-JP-u-ca-japanese"],
    options
  ).format(date);

  return format;
};
