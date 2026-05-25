"use client";

import Link from "next/link";
import Button from "@/components/ui/button/button";
import ErrorText from "@/components/ui/text/error-text";
import { useRegister } from "@/features/auth/use-register";
import { USER_ROLE_OPTIONS } from "@/libs/constant/options";

export default function RegisterForm() {
  const { formik, isLoading } = useRegister();

  return (
    <div className="w-full flex justify-center py-2 text-slate-800">
      <div className="w-full max-w-md space-y-5">
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          
          {/* Name input */}
          <div className="space-y-1.5">
            <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500 font-display">
              Full Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <input
                type="text"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm font-medium glass-input shadow-inner text-slate-800"
                placeholder="Masukkan nama lengkap..."
              />
            </div>
            {formik.touched.name && formik.errors.name && (
              <div className="pl-1">
                <ErrorText message={formik.errors.name} />
              </div>
            )}
          </div>

          {/* Email input */}
          <div className="space-y-1.5">
            <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500 font-display">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </span>
              <input
                type="text"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm font-medium glass-input shadow-inner text-slate-800"
                placeholder="nama@email.com"
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <div className="pl-1">
                <ErrorText message={formik.errors.email} />
              </div>
            )}
          </div>

          {/* Password input */}
          <div className="space-y-1.5">
            <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500 font-display">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input
                type="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm font-medium glass-input shadow-inner text-slate-800"
                placeholder="Buat password baru..."
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <div className="pl-1">
                <ErrorText message={formik.errors.password} />
              </div>
            )}
          </div>

          {/* Phone input */}
          <div className="space-y-1.5">
            <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500 font-display">
              Phone Number
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <input
                type="text"
                name="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm font-medium glass-input shadow-inner text-slate-800"
                placeholder="0812xxxxxx"
              />
            </div>
            {formik.touched.phone && formik.errors.phone && (
              <div className="pl-1">
                <ErrorText message={formik.errors.phone} />
              </div>
            )}
          </div>

          {/* Role selection */}
          <div className="space-y-1.5">
            <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500 font-display">
              Role / Peran Pengguna
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
              <select
                name="role"
                onChange={formik.handleChange}
                value={formik.values.role}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl text-sm font-bold bg-white glass-input shadow-inner text-slate-850 appearance-none cursor-pointer"
              >
                {USER_ROLE_OPTIONS.map((role) => (
                  <option key={role} value={role} className="font-medium text-slate-850">
                    {role}
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

          {/* Submit Action */}
          <div className="pt-2">
            <Button
              type="submit"
              disabled={isLoading}
              variant="primary"
              className="w-full py-3 rounded-xl font-bold font-display shadow-md shadow-indigo-600/10 text-base"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Mendaftarkan Akun...
                </span>
              ) : (
                "Daftar Akun Baru"
              )}
            </Button>
          </div>
        </form>

        {/* Footer Link */}
        <div className="text-center pt-1">
          <Link
            href="/login"
            className="text-xs text-indigo-600 font-semibold hover:text-indigo-800 hover:underline transition-colors"
          >
            Sudah memiliki akun? Masuk di sini
          </Link>
        </div>
      </div>
    </div>
  );
}
