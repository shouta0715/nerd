/* eslint-disable react-hooks/rules-of-hooks */

import React, { FC } from "react";
import { useQueryInvites } from "../../hooks/invites/useQueryInvites";
import { InviteItem } from "./InviteItem";

export const MainInvite: FC = () => {
  const { invites } = useQueryInvites();

  return (
    <div>
      <ul className="relative p-4 py-4 md:p-6">
        {invites?.map((invite) => (
          <InviteItem key={invite.id} invite={invite} />
        ))}
      </ul>
    </div>
  );
};
