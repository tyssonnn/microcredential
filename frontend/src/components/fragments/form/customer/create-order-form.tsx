"use client";

import Button from "@/components/ui/button/button";
import ErrorText from "@/components/ui/text/error-text";
import { useCreateOrder } from "@/features/order/use-create-order";

export default function CreateOrderForm() {
  const { formik, isLoading } = useCreateOrder();

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4 text-slate-800">
      
      {/* Customer ID field */}
      <div className="space-y-1.5">
        <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500 font-display">
          Customer ID / ID Pelanggan
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </span>
          <input
            type="number"
            name="customerId"
            onChange={formik.handleChange}
            value={formik.values.customerId}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm font-semibold glass-input shadow-inner text-slate-800"
            placeholder="Masukkan ID Pelanggan..."
          />
        </div>
        {formik.touched.customerId && formik.errors.customerId && (
          <div className="pl-1">
            <ErrorText message={formik.errors.customerId} />
          </div>
        )}
      </div>

      {/* Pickup location */}
      <div className="space-y-1.5">
        <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500 font-display">
          Pickup Location / Alamat Penjemputan
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </span>
          <input
            type="text"
            name="pickup"
            onChange={formik.handleChange}
            value={formik.values.pickup}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm font-semibold glass-input shadow-inner text-slate-800"
            placeholder="Masukkan lokasi penjemputan..."
          />
        </div>
        {formik.touched.pickup && formik.errors.pickup && (
          <div className="pl-1">
            <ErrorText message={formik.errors.pickup} />
          </div>
        )}
      </div>

      {/* Destination location */}
      <div className="space-y-1.5">
        <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500 font-display">
          Destination Location / Alamat Tujuan
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </span>
          <input
            type="text"
            name="destination"
            onChange={formik.handleChange}
            value={formik.values.destination}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm font-semibold glass-input shadow-inner text-slate-800"
            placeholder="Masukkan lokasi tujuan..."
          />
        </div>
        {formik.touched.destination && formik.errors.destination && (
          <div className="pl-1">
            <ErrorText message={formik.errors.destination} />
          </div>
        )}
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
              Membuat...
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Buat Pesanan Baru
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
