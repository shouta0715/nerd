import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNotificationState } from "src/components/Elements/Notification/store";
import { Username, usernameSchema } from "src/components/Form/Menu/types";
import { useUserState } from "src/store/user/userState";

export const useMenuForm = () => {
  const [user, setUser] = useUserState((state) => [state.user, state.setUser]);
  const onNotification = useNotificationState((state) => state.onShow);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm<Username>({
    resolver: zodResolver(usernameSchema),
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

  const handleChangeName = handleSubmit(onValid, onInValid);

  const isChange = watch("username") !== user?.user_name && watch("username");

  return {
    register,
    errors,
    handleChangeName,
    isChange,
    setValue,
    user,
  };
};
