import {UserRecord} from "firebase-functions/v1/auth";
import {getClient} from "../../config/client";
import {DeleteUserMutation} from "../../types";
import {DELETE_USER} from "../../../user/userQuery";

export const onDeleteHandler = async (user: UserRecord) => {
  const id = user.uid;

  try {
    await getClient().request<DeleteUserMutation>(DELETE_USER, {
      id,
    });
  } catch (err) {
    console.log(err);
  }
};
