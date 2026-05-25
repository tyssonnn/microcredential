"use client";

import Button from "@/components/ui/button/button";
import { useUpdateOrder } from "@/features/order/use-update-user";
import { ORDER_STATUS_OPTIONS } from "@/libs/constant/options";
import { IOrder } from "@/types/order.types";

interface IEditOrderFormProps {
  order: IOrder;
}

export default function EditOrderForm({ order }: IEditOrderFormProps) {
  const { formik, isLoading } = useUpdateOrder(order);

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4 text-slate-800">
      
      {/* Order Status field */}
      <div className="space-y-1.5">
        <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500 font-display">
          Status Pesanan (Order Status)
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </span>
          <select
            name="status"
            onChange={formik.handleChange}
            value={formik.values.status}
            className="w-full pl-10 pr-10 py-2.5 rounded-xl text-sm font-bold bg-white glass-input shadow-inner text-slate-800 appearance-none cursor-pointer"
          >
            {ORDER_STATUS_OPTIONS.map((status) => (
              <option key={status} value={status} className="font-semibold text-slate-800">
                {status}
              </option>
            ))}
          </select>
          <span className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-slate-400">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-2 pt-4">
        <Button
          type="submit"
          disabled={isLoading}
          variant="primary"
          className="px-6 py-2.5 rounded-xl font-bold font-display shadow-md shadow-indigo-600/10 text-xs flex items-center gap-1.5"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Memperbarui...
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Simpan Perubahan
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
