import ThemeToggle from "./ThemeToggle";
import { Bell } from "lucide-react";
import LogoutButton from "@/components/auth/LogoutButton";
import Image from "next/image";

export default function Header({ session }) {
  const user = session?.user;

  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200 dark:bg-slate-950/70 dark:border-slate-800 px-4 md:px-8 py-4 sticky top-0 z-10 transition-colors duration-300">
      <div className="flex items-center justify-between gap-4">
        {/* Mobile Logo */}
        <div className="md:hidden">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Review<span className="text-reviewsight-600">Sight</span>
          </h1>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-xl hidden sm:block">
          <input
            type="text"
            placeholder="Search products, brands, reviews..."
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 focus:border-reviewsight-500 focus:ring-2 focus:ring-reviewsight-200 outline-none dark:bg-slate-900 dark:border-slate-700 dark:text-white dark:placeholder:text-slate-500 transition-colors duration-300"
          />
        </div>

        {/* User Area */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full dark:hover:bg-slate-800 transition-colors">
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500"></span>
            <Bell size={20} />
          </button>

          <div className="flex items-center gap-3">
            {user?.image ? (
              <Image src={user.image} alt={user.name || "User"} width={40} height={40} className="rounded-full" />
            ) : (
              <div className="h-10 w-10 rounded-full bg-reviewsight-600 flex items-center justify-center text-white font-semibold uppercase">
                {user?.name?.[0] || user?.email?.[0] || "RS"}
              </div>
            )}

            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">{user?.name || "User"}</p>
              <p className="text-xs text-gray-500 dark:text-slate-400 max-w-[120px] truncate">{user?.email || "admin"}</p>
            </div>
            
            <LogoutButton />
          </div>
        </div>
      </div>
    </header>
  );
}
