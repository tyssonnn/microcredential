import { formatDate } from "@/libs/utils/format-date";
import { IUser } from "@/types/user.types";

interface IUserCardProps {
  user: IUser;
}

export default function UserDetailCard({ user }: IUserCardProps) {
  const getRoleBadge = (role: string) => {
    switch (role) {
      case "ADMIN":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 border border-indigo-200 text-indigo-700 shadow-sm shadow-indigo-100/50">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            ADMIN REGION
          </span>
        );
      case "CUSTOMER":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-50 border border-cyan-200 text-cyan-700 shadow-sm shadow-cyan-100/50">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            CUSTOMER MEMBER
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-50 border border-slate-200 text-slate-700">
            {role}
          </span>
        );
    }
  };

  const getAvatarGradient = (role: string) => {
    switch (role) {
      case "ADMIN":
        return "from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20";
      case "CUSTOMER":
        return "from-cyan-500 to-indigo-500 text-white shadow-lg shadow-cyan-500/20";
      default:
        return "from-slate-400 to-slate-600 text-white shadow-lg shadow-slate-500/20";
    }
  };

  const initialLetter = user.name ? user.name.charAt(0).toUpperCase() : "?";

  return (
    <div className="w-full glass-card rounded-3xl p-6 sm:p-8 space-y-6 text-slate-800">
      {/* Profile Header Grid */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 border-b border-indigo-50/50 pb-6 text-center sm:text-left">
        {/* Large Avatar */}
        <div className={`w-20 h-20 rounded-3xl flex items-center justify-center font-display font-black text-3xl shadow-xl bg-gradient-to-tr ${getAvatarGradient(user.role)} ring-4 ring-white/50 shrink-0`}>
          {initialLetter}
        </div>

        {/* User identification info */}
        <div className="space-y-2 flex-1">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h3 className="text-2xl font-black text-slate-800 tracking-tight">{user.name}</h3>
              {getRoleBadge(user.role)}
            </div>
            <p className="text-xs text-slate-400">
              Unique ID: <span className="font-mono font-bold text-slate-500">#{user.id}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Grid of details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone details box */}
        <div className="bg-slate-50/50 border border-slate-100 p-5 rounded-2xl flex items-start gap-3 shadow-inner">
          <div className="bg-indigo-100/50 p-2.5 rounded-xl text-indigo-600">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <span className="text-[10px] uppercase font-black tracking-wider text-slate-400 block mb-0.5">
              Nomor Telepon
            </span>
            <p className="font-bold text-slate-800 text-base leading-relaxed">
              {user.phone}
            </p>
          </div>
        </div>

        {/* Email details box */}
        <div className="bg-slate-50/50 border border-slate-100 p-5 rounded-2xl flex items-start gap-3 shadow-inner">
          <div className="bg-cyan-100/50 p-2.5 rounded-xl text-cyan-600">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <span className="text-[10px] uppercase font-black tracking-wider text-slate-400 block mb-0.5">
              Alamat Email
            </span>
            <p className="font-bold text-slate-800 text-base leading-relaxed break-all">
              {user.email}
            </p>
          </div>
        </div>
      </div>

      {/* Date metadata footer */}
      <div className="border-t border-indigo-50/50 pt-4 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Terdaftar Sejak:</span>
          <span className="font-semibold text-slate-600">{formatDate(user.createdAt)}</span>
        </div>
        <span className="text-[10px] tracking-wide text-indigo-400 font-extrabold uppercase font-display">
          BANGJEK SECURE SYSTEM
        </span>
      </div>
    </div>
  );
}
