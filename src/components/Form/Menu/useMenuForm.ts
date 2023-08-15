import { valibotResolver } from "@hookform/resolvers/valibot";
import { useForm } from "react-hook-form";
import { Username, usernameSchema } from "src/components/Form/Menu/types";
import { useNotificationState } from "src/components/Notification/store";
import { useUserState } from "src/store/user/userState";

export const useMenuForm = () => {
  const [user, setUser] = useUserState((state) => [state.user, state.setUser]);
  const onNotification = useNotificationState((state) => state.onShow);

  const { register, handleSubmit, reset, watch } = useForm<Username>({
    resolver: valibotResolver(usernameSchema),
  });

  const onInValid = () => {
    onNotification({
      title: "投稿名は1文字以上20文字以下で入力してください",
      type: "error",
    });
    reset();
  };

  const onValid = (data: Username) => {
    if (!user) return;
    const { username } = data;
    setUser({ ...user, user_name: username });
    localStorage.setItem("user_name", username);
    onNotification({
      title: "投稿名を変更しました",
      type: "success",
    });
    reset();
  };

  const isChange = watch("username") !== user?.user_name && watch("username");

  return {
    register,
    handleSubmit,
    onInValid,
    onValid,
    isChange,
    user,
  };
};
