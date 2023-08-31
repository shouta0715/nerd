export const TrendsSkelton = () => {
  return (
    <div className="grid animate-pulse gap-y-8">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={`trends-skelton-${i}`}
          className="flex flex-wrap justify-between gap-x-6"
        >
          <div className="flex flex-1 gap-x-4 ">
            <div className="flex-1">
              <div className="flex w-full max-w-sm  items-center text-xs text-gray-500">
                {i + 1}.{" "}
                <span className="ml-2 inline-block h-2 w-full rounded-md bg-slate-200" />
              </div>

              <div className="mt-1 h-4 w-full max-w-xl rounded-md bg-slate-200" />
              <div className="mt-1 h-2 w-full max-w-xs rounded-md bg-slate-200" />
            </div>
          </div>

          <div className="flex h-2 w-5 rounded-md bg-slate-200" />
        </div>
      ))}
    </div>
  );
};
