export const genBuildDate = () => {
  return new Date().toLocaleDateString("ja-JP", {
    month: "long",
    day: "numeric",
    timeZone: "Asia/Tokyo",
    hour: "numeric",
    minute: "numeric",
  });
};

export const getTotallingDate = () => {
  const date = new Date();
  date.setDate(date.getDate() - 1);

  return date.toLocaleDateString("ja-JP", {
    month: "long",
    day: "numeric",
    timeZone: "Asia/Tokyo",
  });
};
