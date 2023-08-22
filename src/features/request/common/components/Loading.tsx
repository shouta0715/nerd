import { Loader } from "src/components/Elements/Loader";
import { RequestHeader } from "src/features/request/common/components/Header";

export const RequestLoading = () => {
  return (
    <>
      <RequestHeader hasData={false} isFetching />
      <p className="mt-20 flex items-center justify-center break-words  text-dimmed">
        <Loader size="xl" variant="dots" />
      </p>
    </>
  );
};
