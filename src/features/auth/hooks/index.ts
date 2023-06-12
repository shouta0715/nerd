import { useMutation } from "@tanstack/react-query";
import {
  OAuthProvider,
  deleteUser,
  reauthenticateWithPopup,
} from "firebase/auth";
import { NotificationState } from "src/components/Elements/Notification/store";
import { HttpError, ErrorType } from "src/libs/error";
import { auth } from "src/libs/firebase";
import {
  CreateClaimsSchema,
  CreateUserSchema,
  ReturnCreateUser,
} from "src/libs/server/types";

const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT as string;

export const handleSetCustomClaims = async (body: CreateClaimsSchema) => {
  const res = await fetch(`${API_URL}/setCustomClaims`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const status = res.status as ErrorType;

    throw new HttpError(status);
  }

  return res;
};

export const createUserHandler = async ({
  id,
  user_name,
  photo_url,
  isAnonymous,
}: CreateUserSchema): Promise<ReturnCreateUser> => {
  const res = await fetch(`${API_URL}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, user_name, photo_url, isAnonymous }),
  });

  if (!res.ok) {
    const status = res.status as ErrorType;

    throw new HttpError(status);
  }

  const user = (await res.json()) as ReturnCreateUser;

  return user;
};
export const useUser = () => {
  const createUser = useMutation({
    mutationFn: createUserHandler,
  });

  return {
    createMutateAsync: createUser.mutateAsync,
  };
};

type HandleReset = {
  setIsDeleteConfirmationOpen: (value: boolean) => void;
  setAuthLoading: (value: boolean) => void;
  onShow: (state: Partial<NotificationState>) => void;
};

export const handleNoUser = ({
  setIsDeleteConfirmationOpen,
  setAuthLoading,
  onShow,
}: HandleReset) => {
  setIsDeleteConfirmationOpen(false);
  setAuthLoading(false);
  onShow({
    title: "エラーが発生しました",
    message: "ログアウト後、再度ログインしてください",
    type: "error",
  });
};

export const handleRequireReLogin = async ({
  setIsDeleteConfirmationOpen,
  setAuthLoading,
  onShow,
}: {
  setIsDeleteConfirmationOpen: (value: boolean) => void;
  setAuthLoading: (value: boolean) => void;
  onShow: (state: Partial<NotificationState>) => void;
}) => {
  if (!auth.currentUser) {
    handleNoUser({
      setIsDeleteConfirmationOpen,
      setAuthLoading,
      onShow,
    });

    return;
  }
  const provider = new OAuthProvider("google.com");

  const { user: deletedUser } = await reauthenticateWithPopup(
    auth.currentUser,
    provider
  );

  await deleteUser(deletedUser);
  setIsDeleteConfirmationOpen(false);
  setAuthLoading(false);
  onShow({
    title: "アカウントを消去しました",
    type: "success",
  });

  localStorage.removeItem("user_name");
};

export const handleError = ({
  setIsDeleteConfirmationOpen,
  setAuthLoading,
  onShow,
}: HandleReset) => {
  setIsDeleteConfirmationOpen(false);
  setAuthLoading(false);
  onShow({
    title: "エラーが発生しました",
    message: "ログアウト後、再度ログインしてください",
    type: "error",
  });
};
