import Button from "@/components/ui/button/button";
import Link from "next/link";
import { IOrder } from "@/types/order.types";
import { useDeleteOrder } from "@/features/order/use-delete-order";

interface IOrderCardProps {
  order: IOrder;
}

export default function OrderCard({ order }: IOrderCardProps) {
  const { handleDelete, isLoading } = useDeleteOrder();

  const onDelete = () => {
    if (confirm("Apakah Anda yakin ingin menghapus pesanan ini?")) {
      handleDelete(order.id);
    }
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
            {status}
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
        <Link href={`/customer/order/${order.id}`} className="w-full sm:w-auto">
          <Button variant="outline" className="w-full sm:w-auto text-xs py-2 px-3">
            <svg className="w-3.5 h-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Detail
          </Button>
        </Link>
        <Link href={`/customer/edit/${order.id}`} className="w-full sm:w-auto">
          <Button variant="primary" className="w-full sm:w-auto text-xs py-2 px-3">
            <svg className="w-3.5 h-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Ubah
          </Button>
        </Link>
        <Button
          variant="danger"
          className="w-full sm:w-auto text-xs py-2 px-3"
          onClick={onDelete}
          disabled={isLoading}
        >
          <svg className="w-3.5 h-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          {isLoading ? "Menghapus..." : "Hapus"}
        </Button>
      </div>
    </div>
  );
}