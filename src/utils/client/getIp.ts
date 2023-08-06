export const getIp = async () => {
  const ip = await fetch("https://ipapi.co/ip/").then((res) => res.text());

  if (!ip) return null;

  return ip;
};
