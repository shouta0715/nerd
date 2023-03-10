import { Box, Loader } from "@mantine/core";
import React, { FC } from "react";
import { FinishComment } from "src/features/comments/components/FinishComment";

import { useFinishComments } from "src/features/comments/hooks/useFInishComments";

type Props = {
  episode_id: string;
};

const FinishComments: FC<Props> = ({ episode_id }) => {
  const { data, ref, hasNextPage } = useFinishComments(episode_id);

  return (
    <Box
      component="ul"
      className="relative mx-auto w-full flex-1 space-y-3 px-4 pt-4 pb-1 md:max-w-xl"
    >
      {data?.pages.map((page) =>
        page.finish_comments.map((comment) => (
          <FinishComment key={comment.id} comment={comment} />
        ))
      )}
      <div
        ref={ref}
        className={`flex h-20 items-center justify-center text-center  ${
          hasNextPage ? "block" : "hidden"
        }`}
      >
        <Loader variant="oval" />
      </div>
    </Box>
  );
};

export default FinishComments;
