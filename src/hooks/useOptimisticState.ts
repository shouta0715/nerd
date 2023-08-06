import {
  MutationKey,
  MutationStatus,
  useMutationState,
} from "@tanstack/react-query";

type Result<TVariables> = {
  submittedAt: number;
  variables: TVariables;
  error: unknown;
  status: MutationStatus;
}[];

export const useOptimisticState = <TVariables>(
  mutationKey: MutationKey
): Result<TVariables> => {
  const mutateState = useMutationState({
    filters: {
      mutationKey,
      status: "pending",
    },
    select: (mutation) => {
      return {
        submittedAt: mutation.state.submittedAt,
        error: mutation.state.error,
        variables: mutation.state.variables as TVariables,
        status: mutation.state.status,
      };
    },
  });

  return mutateState;
};
