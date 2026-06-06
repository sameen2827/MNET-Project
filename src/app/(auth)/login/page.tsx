import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = { title: "Sign In" };

export default function LoginPage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-slate-100">Sign In</h1>
      <p className="mt-2 text-sm text-slate-400">
        Access your MNETINC dashboard
      </p>
      <form className="mt-6 space-y-4" action="/api/auth/login" method="POST">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-100 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-slate-300">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-100 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
          />
        </div>
        <Button type="submit" variant="glow" className="w-full">
          Sign In
        </Button>
      </form>
      <p className="mt-6 text-center text-sm text-slate-500">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-medium text-cyan-400 hover:underline">
          Register
        </Link>
      </p>
      <div className="mt-4 flex justify-center gap-4 text-xs text-slate-600">
        <Link href="/dashboard" className="hover:text-cyan-400">User Demo</Link>
        <Link href="/agent" className="hover:text-cyan-400">Agent Demo</Link>
        <Link href="/admin" className="hover:text-cyan-400">Admin Demo</Link>
      </div>
    </>
  );
}
