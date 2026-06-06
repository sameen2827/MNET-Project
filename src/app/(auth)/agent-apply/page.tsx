import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = { title: "Become an Agent" };

export default function AgentApplyPage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-slate-900">Become an Agent</h1>
      <p className="mt-2 text-sm text-slate-500">
        Join the MNETINC reseller program and earn recurring commissions
      </p>
      <form className="mt-6 space-y-4" action="/api/agents/apply" method="POST">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700">
            Company / Agency Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-slate-700">
            Experience & Motivation
          </label>
          <textarea
            id="experience"
            name="experience"
            rows={4}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            placeholder="Tell us about your business and why you want to become an agent..."
          />
        </div>
        <Button type="submit" className="w-full">
          Submit Application
        </Button>
      </form>
      <p className="mt-6 text-center text-sm text-slate-500">
        <Link href="/" className="font-medium text-indigo-600 hover:underline">
          ← Back to Home
        </Link>
      </p>
    </>
  );
}
