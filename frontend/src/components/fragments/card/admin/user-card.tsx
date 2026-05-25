import Button from "@/components/ui/button/button";
import Link from "next/link";
import { useDeleteUser } from "@/features/admin/use-delete-user";
import { IUser } from "@/types/user.types";

interface IUserCardProps {
  user: IUser;
}

export default function UserCard({ user }: IUserCardProps) {
  const { handleDelete, isLoading } = useDeleteUser();

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "ADMIN":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-indigo-50 border border-indigo-200 text-indigo-700 shadow-sm shadow-indigo-100/50">
            ADMIN
          </span>
        );
      case "CUSTOMER":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-cyan-50 border border-cyan-200 text-cyan-700 shadow-sm shadow-cyan-100/50">
            CUSTOMER
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-slate-50 border border-slate-200 text-slate-700">
            {role}
          </span>
        );
    }
  };

  const getAvatarGradient = (role: string) => {
    switch (role) {
      case "ADMIN":
        return "from-indigo-500 to-purple-600 text-white shadow-indigo-100";
      case "CUSTOMER":
        return "from-cyan-500 to-indigo-500 text-white shadow-cyan-100";
      default:
        return "from-slate-400 to-slate-600 text-white shadow-slate-100";
    }
  };

  const initialLetter = user.name ? user.name.charAt(0).toUpperCase() : "?";

  return (
    <div className="glass-card p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4 transition-all duration-300">
      {/* User Information with Avatar */}
      <div className="flex items-center gap-4 flex-1">
        {/* Avatar badge */}
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-display font-extrabold text-lg shadow-md bg-gradient-to-tr ${getAvatarGradient(user.role)} shrink-0`}>
          {initialLetter}
        </div>

        {/* User Info details */}
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="font-extrabold text-slate-800 text-base">{user.name}</h4>
            {getRoleBadge(user.role)}
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-1 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {user.phone}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {user.email}
            </span>
          </div>
        </div>
      </div>

      {/* Admin Actions */}
      <div className="flex items-center gap-2 w-full sm:w-auto justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-indigo-50/50 shrink-0">
        <Link href={`/admin/user/${user.id}`} className="w-full sm:w-auto">
          <Button variant="outline" className="w-full sm:w-auto text-xs py-2 px-3">
            <svg className="w-3.5 h-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Detail
          </Button>
        </Link>
        <Link href={`/admin/edit/${user.id}`} className="w-full sm:w-auto">
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
          onClick={() => confirm("Apakah Anda yakin ingin menghapus pengguna ini?") && handleDelete(user.id)}
          disabled={isLoading}
        >
          <svg className="w-3.5 h-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Hapus
        </Button>
      </div>
    </div>
  );
}