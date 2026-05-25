"use client";

import Link from "next/link";
import Button from "@/components/ui/button/button";
import { useLogin } from "@/features/auth/use-login";
import ErrorText from "@/components/ui/text/error-text";

export default function LoginForm() {
  const { formik, isLoading } = useLogin();

  return (
    <div className="w-full flex justify-center py-2">
      <div className="w-full max-w-md space-y-6">
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          
          {/* Email input field */}
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
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full pl-10 pr-4 py-3 rounded-xl text-sm font-medium glass-input shadow-inner text-slate-800"
                placeholder="nama@email.com"
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <div className="pl-1">
                <ErrorText message={formik.errors.email} />
              </div>
            )}
          </div>

          {/* Password input field */}
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
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="w-full pl-10 pr-4 py-3 rounded-xl text-sm font-medium glass-input shadow-inner text-slate-800"
                placeholder="Masukkan password Anda..."
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <div className="pl-1">
                <ErrorText message={formik.errors.password} />
              </div>
            )}
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <Button
              type="submit"
              disabled={isLoading}
              variant="primary"
              className="w-full py-3.5 rounded-xl font-bold font-display shadow-md shadow-indigo-600/10 text-base"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Masuk Sistem...
                </span>
              ) : (
                "Masuk Ke Portal"
              )}
            </Button>
          </div>
        </form>

        {/* Footer Link */}
        <div className="text-center pt-2">
          <Link
            href="/register"
            className="text-xs text-indigo-600 font-semibold hover:text-indigo-800 hover:underline transition-colors"
          >
            Belum memiliki akun? Daftar sekarang
          </Link>
        </div>
      </div>
    </div>
  );
}
