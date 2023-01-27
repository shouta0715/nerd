import { Box } from "@mantine/core";
import React, { FC } from "react";
import { useQueryInvites } from "../hooks/invites/useQueryInvites";
import { InviteItem } from "./invites/InviteItem";

export const Dashboard: FC = () => {
  const { data } = useQueryInvites();

  return (
    <div>
      <Box
        component="ul"
        bg="indigo.0"
        className={`relative space-y-4 p-4 py-4 md:p-6 ${
          !data?.invites?.length ? "p-0 md:p-0" : ""
        }`}
      >
        {data?.invites?.map((invite) => (
          <InviteItem key={invite.id} invite={invite} />
        ))}
      </Box>
    </div>
  );
};
