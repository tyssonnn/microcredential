import { formatDate } from "@/libs/utils/format-date";
import { IOrder } from "@/types/order.types";

interface IOrderCardProps {
  order: IOrder;
}

export default function OrderDetailCard({ order }: IOrderCardProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "COMPLETED":
        return (
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-50 border border-emerald-200 text-emerald-700 shadow-sm shadow-emerald-100">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            COMPLETED
          </span>
        );
      case "PROCESS":
        return (
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-amber-50 border border-amber-200 text-amber-700 shadow-sm shadow-amber-100">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
            IN PROCESS
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-slate-50 border border-slate-200 text-slate-700">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
            {status}
          </span>
        );
    }
  };

  return (
    <div className="w-full glass-card rounded-3xl p-6 sm:p-8 space-y-6">
      {/* Detail Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-indigo-50/50 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-extrabold tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
              Order Detail
            </span>
            <span className="text-sm font-semibold text-slate-400">
              #ID-{order.id}
            </span>
          </div>
          <h3 className="text-lg font-bold text-slate-800">
            Pelanggan ID: <span className="text-indigo-600 font-display font-black">{order.customerId}</span>
          </h3>
        </div>
        <div>{getStatusBadge(order.status)}</div>
      </div>

      {/* Detail Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Pickup Card */}
        <div className="bg-slate-50/50 border border-slate-100 p-5 rounded-2xl flex items-start gap-3 shadow-inner">
          <div className="bg-emerald-100/50 p-2.5 rounded-xl text-emerald-600">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <span className="text-[10px] uppercase font-black tracking-wider text-slate-400 block mb-0.5">
              Lokasi Penjemputan (Pickup)
            </span>
            <p className="font-bold text-slate-800 text-sm leading-relaxed">
              {order.pickup}
            </p>
          </div>
        </div>

        {/* Destination Card */}
        <div className="bg-slate-50/50 border border-slate-100 p-5 rounded-2xl flex items-start gap-3 shadow-inner">
          <div className="bg-indigo-100/50 p-2.5 rounded-xl text-indigo-600">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <div>
            <span className="text-[10px] uppercase font-black tracking-wider text-slate-400 block mb-0.5">
              Lokasi Tujuan (Destination)
            </span>
            <p className="font-bold text-slate-800 text-sm leading-relaxed">
              {order.destination}
            </p>
          </div>
        </div>
      </div>

      {/* Meta Footer */}
      <div className="border-t border-indigo-50/50 pt-4 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Dibuat Pada:</span>
          <span className="font-semibold text-slate-600">{formatDate(order.createdAt)}</span>
        </div>
        <span className="text-[10px] tracking-wide text-indigo-400 font-extrabold uppercase font-display">
          BangJek Secure Order
        </span>
      </div>
    </div>
  );
}
