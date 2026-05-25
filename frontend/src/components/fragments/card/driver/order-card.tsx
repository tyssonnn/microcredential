import Button from "@/components/ui/button/button";
import { IOrder } from "@/types/order.types";
import { useUpdateOrderDriver } from "@/features/order/use-update-order-driver";

interface IOrderCardProps {
  order: IOrder;
}

export default function OrderCard({ order }: IOrderCardProps) {
  const { updateOrderStatus, isLoading } = useUpdateOrderDriver();

  const handleAccept = () => {
    updateOrderStatus({ id: order.id, body: { status: "PROCESS" } });
  };

  const handleComplete = () => {
    updateOrderStatus({ id: order.id, body: { status: "COMPLETED" } });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "COMPLETED":
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 border border-emerald-200 text-emerald-700 shadow-sm shadow-emerald-100">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            COMPLETED
          </span>
        );
      case "PROCESS":
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 border border-amber-200 text-amber-700 shadow-sm shadow-amber-100">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
            IN PROCESS
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-slate-50 border border-slate-200 text-slate-700">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
            CREATED
          </span>
        );
    }
  };

  return (
    <div className="glass-card p-5 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4">
      {/* Visual Route Information */}
      <div className="flex-1 space-y-4 w-full">
        <div className="flex justify-between items-center w-full border-b border-indigo-50/50 pb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
              Order #{order.id}
            </span>
            <span className="text-xs text-slate-400">
              Customer ID: {order.customerId}
            </span>
          </div>
          <div>{getStatusBadge(order.status)}</div>
        </div>

        {/* Route visualization */}
        <div className="relative pl-6 space-y-3">
          {/* Vertical line indicator */}
          <div className="absolute left-[7px] top-[7px] bottom-[7px] w-0.5 border-l-2 border-dashed border-slate-200/80" />
          
          {/* Pickup point */}
          <div className="relative flex flex-col items-start text-sm">
            <div className="absolute -left-[24px] top-[3px] w-3 h-3 rounded-full bg-emerald-500 border-2 border-white shadow-md shadow-emerald-500/20" />
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-emerald-600 font-display">
              Pickup (Jemput)
            </span>
            <span className="font-semibold text-slate-800">{order.pickup}</span>
          </div>

          {/* Destination point */}
          <div className="relative flex flex-col items-start text-sm">
            <div className="absolute -left-[24px] top-[3px] w-3 h-3 rounded-full bg-indigo-500 border-2 border-white shadow-md shadow-indigo-500/20" />
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-indigo-600 font-display">
              Destination (Tujuan)
            </span>
            <span className="font-semibold text-slate-800">{order.destination}</span>
          </div>
        </div>
      </div>

      {/* Modern Actions Column */}
      <div className="flex sm:flex-row md:flex-col lg:flex-row items-center gap-2 w-full md:w-auto border-t md:border-t-0 pt-3 md:pt-0 border-indigo-50/50 justify-end">
        {order.status === "CREATED" && (
          <Button
            variant="primary"
            className="w-full sm:w-auto text-xs py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white"
            onClick={handleAccept}
            disabled={isLoading}
          >
            <svg className="w-3.5 h-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {isLoading ? "Processing..." : "Accept Order"}
          </Button>
        )}
        {order.status === "PROCESS" && (
          <Button
            variant="primary"
            className="w-full sm:w-auto text-xs py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white"
            onClick={handleComplete}
            disabled={isLoading}
          >
            <svg className="w-3.5 h-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {isLoading ? "Processing..." : "Complete Order"}
          </Button>
        )}
      </div>
    </div>
  );
}
