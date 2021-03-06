export default function Loading() {
  return (
    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4 py-1">
          <div className="h-8 bg-blue-450 rounded " />
          <div className="space-y-2">
            <div className="h-4 bg-blue-450 rounded w-3/4" />
            <div className="h-4 rounded w-3/6" />
            <div className="h-4 rounded w-3/6" />
            <div className="flex justify-between">
              <div className="h-4 bg-blue-450 rounded w-1/4" />
              <div className=" rounded-full bg-blue-450 h-12 w-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
