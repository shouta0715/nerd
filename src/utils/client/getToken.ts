export const getToken = async () => {
  const { auth } = await import("src/libs/client/firebase");

  const token = await auth.currentUser?.getIdToken();

  if (!token) return null;

  return token;
};
