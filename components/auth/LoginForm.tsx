"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LogoIcon from "../svg/LogoIcon";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login with:", { email, password });
    router.push("/");
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white p-6 sm:p-8">
      <div className="max-w-md w-full mx-auto">
        <div className="mb-10">
          <Link href="/" className="inline-flex items-center">
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <LogoIcon />
            </div>
            <span className="text-[18px] font-manrope font-bold text-[#635BFF] pb-1 ml-2">
              Your logo
            </span>
          </Link>
        </div>

        <div>
          <h1 className="text-[32px] font-bold text-[#1E293B] font-manrope">Sign in</h1>
          <p className="text-[#64748B] mt-2 mb-8 font-manrope">
            Welcome back! Please enter your details.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-[#1E293B] mb-2 font-manrope">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#635BFF] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-semibold text-[#1E293B] font-manrope">
                  Password
                </label>
                <Link href="#" className="text-sm font-semibold text-[#635BFF] hover:underline font-manrope">
                  Forgot Password?
                </Link>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#635BFF] focus:border-transparent transition-all"
              />
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="w-5 h-5 rounded border-[#E2E8F0] text-[#635BFF] focus:ring-[#635BFF]"
              />
              <span className="text-sm text-[#64748B] font-manrope">
                Remember me for 30 days
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#635BFF] text-white rounded-lg font-bold text-lg hover:bg-[#534dfd] transition-all shadow-lg shadow-[#635BFF]/20"
            >
              Sign In
            </button>
          </form>

          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#E2E8F0]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-[#64748B] font-manrope">or sign in with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center space-x-2 py-3 px-4 border border-[#E2E8F0] rounded-lg hover:bg-gray-50 transition-all font-manrope font-semibold text-[#1E293B]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c3.15 0 5.8-1.05 7.73-2.85l-3.57-2.77c-1.08.73-2.48 1.15-4.16 1.15-3.2 0-5.92-2.16-6.88-5.06H1.54v2.92C3.49 20.3 7.51 23 12 23z" fill="#34A853" />
                <path d="M5.12 14.47c-.25-.73-.39-1.5-.39-2.3 0-.8.14-1.57.39-2.3V6.95H1.54C.56 8.9 0 11.05 0 12.3c0 1.25.56 3.4 1.54 5.35l3.58-3.18z" fill="#FBBC05" />
                <path d="M12 4.75c1.71 0 3.25.59 4.46 1.74l3.34-3.34C17.8 1.19 15.15 0 12 0 7.51 0 3.49 2.7 1.54 6.95l3.58 2.92c.96-2.9 3.68-5.06 6.88-5.06z" fill="#EA4335" />
              </svg>
              <span>Google</span>
            </button>
            <button className="flex items-center justify-center space-x-2 py-3 px-4 border border-[#E2E8F0] rounded-lg hover:bg-gray-50 transition-all font-manrope font-semibold text-[#1E293B] cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
