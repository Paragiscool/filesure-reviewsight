import { loginWithGoogle, loginWithGitHub, loginWithDemo } from "./actions";
import { Globe, Key, UserCircle } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-reviewsight-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="w-full max-w-md rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/30 dark:border-slate-800 shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          ReviewSight
        </h1>
        <p className="mt-2 text-center text-gray-500 dark:text-slate-400">
          AI-powered review intelligence
        </p>
        <div className="mt-8 space-y-3">
          <form action={loginWithGoogle}>
            <button className="w-full flex items-center justify-center gap-3 rounded-xl bg-white dark:bg-slate-800 border dark:border-slate-700 py-3 hover:shadow-md transition-all text-gray-900 dark:text-white">
              <Globe size={18} />
              Continue with Google
            </button>
          </form>
          <form action={loginWithGitHub}>
            <button className="w-full flex items-center justify-center gap-3 rounded-xl bg-slate-900 text-white py-3 hover:bg-slate-800 transition-all dark:bg-white dark:text-slate-900 dark:hover:bg-gray-200">
              <Key size={18} />
              Continue with GitHub
            </button>
          </form>
          
          <div className="pt-2 pb-2">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300 dark:border-slate-700" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white/70 dark:bg-slate-900 px-2 text-gray-500">Or bypass for demo</span>
              </div>
            </div>
          </div>

          <form action={loginWithDemo}>
            <button className="w-full flex items-center justify-center gap-3 rounded-xl bg-reviewsight-600 text-white py-3 hover:bg-reviewsight-700 transition-all font-medium shadow-md">
              <UserCircle size={18} />
              Demo Login (Admin)
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
