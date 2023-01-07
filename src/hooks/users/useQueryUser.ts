import { useQuery } from "@tanstack/react-query";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../libs/firebase";
import { User } from "../../types/userType";

const getUser = async (uid: string): Promise<User> => {
  const userRef = doc(db, "user_meta", uid);
  const user = (await getDoc(userRef).then((result) => result.data())) as User;

  return user;
};

export const useQueryUser = (uid: string) =>
  useQuery<User, Error>({
    queryKey: ["user", uid],
    queryFn: () => getUser(uid),
    enabled: !!uid,
    staleTime: Infinity,
    cacheTime: Infinity,
  });
