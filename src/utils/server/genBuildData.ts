export const genBuildDate = () => {
  const buildDate = new Date().toLocaleDateString("ja-JP", {
    month: "long",
    day: "numeric",
    timeZone: "Asia/Tokyo",
    hour: "numeric",
    minute: "numeric",
  });

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const yesterdayStr = yesterday.toLocaleDateString("ja-JP", {
    month: "long",
    day: "numeric",
    timeZone: "Asia/Tokyo",
    hour: "numeric",
    minute: "numeric",
  });

  // eslint-disable-next-line no-underscore-dangle
  const _gte = new Date(yesterday);

  return {
    buildDate,
    totallingDate: yesterdayStr,
    _gte,
  };
};
