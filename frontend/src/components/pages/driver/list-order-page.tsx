"use client";
import OrderCard from "@/components/fragments/card/driver/order-card";
import LogoutButton from "@/components/ui/button/logout-button";
import SpinnerLoading from "@/components/ui/loading/spinner-loading";
import ErrorText from "@/components/ui/text/error-text";
import { useGetOrderList } from "@/features/order/use-get-order-list";

export default function ListOrderPage() {
  const { data, isLoading, error } = useGetOrderList();

  return (
    <div className="space-y-4 w-full">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl text-slate-800">Available Orders</h2>
        <LogoutButton />
      </div>

      {isLoading && (
        <div className="text-center py-10">
          <SpinnerLoading />
          <p className="text-slate-500 mt-2 text-sm">Fetching orders...</p>
        </div>
      )}

      {error && (
        <div className="text-center py-10 bg-red-50 rounded-xl">
          <ErrorText message={error.message} />
        </div>
      )}

      {!isLoading && !error && data?.length === 0 && (
        <div className="text-center py-10 bg-slate-50 rounded-xl border border-dashed border-slate-200">
          <p className="text-slate-500 font-medium">No orders available right now.</p>
        </div>
      )}

      {!isLoading && !error && data && data.length > 0 && (
        <div className="space-y-4 w-full">
          {/* Active Orders (Process) first, then Created, then Completed */}
          {data
            .sort((a, b) => {
              const statusWeight = { PROCESS: 0, CREATED: 1, COMPLETED: 2 };
              return statusWeight[a.status] - statusWeight[b.status];
            })
            .map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
        </div>
      )}
    </div>
  );
}
