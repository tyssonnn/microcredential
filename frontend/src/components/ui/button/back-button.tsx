import { useRouter } from "next/navigation";
import Button from "./button";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      variant="secondary"
      onClick={() => router.back()}
      className="flex items-center gap-1.5 text-xs py-2 px-3.5 rounded-lg"
    >
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      Kembali
    </Button>
  );
}