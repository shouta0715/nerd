import React, { FC } from "react";
import { useQueryInvites } from "../hooks/invites/useQueryInvites";
import { InviteItem } from "./invites/InviteItem";
import { Layout } from "./layouts/Layout";
import { InviteLoading } from "./layouts/loading/InviteLoading";

export const Dashboard: FC = () => {
  const { isLoading, data } = useQueryInvites();

  if (isLoading)
    return (
      <Layout>
        <InviteLoading />
      </Layout>
    );

  return (
    <div>
      <ul className="relative p-4 py-4 md:p-6">
        {data?.invites?.map((invite) => (
          <InviteItem key={invite.id} invite={invite} />
        ))}
      </ul>
    </div>
  );
};
