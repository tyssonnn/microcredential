import { useRouter } from "next/navigation";
import Button from "./button";

export default function LogoutButton() {
  const router = useRouter();
  return (
    <Button
      variant="danger"
      onClick={() => {
        localStorage.removeItem("token");
        document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=Lax; Secure";
        router.push("/login");
      }}
      className="flex items-center gap-1.5 text-xs py-2 px-3.5 rounded-lg shadow-sm"
    >
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
      </svg>
      Keluar (Logout)
    </Button>
  );
}
