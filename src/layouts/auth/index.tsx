// layouts/LoginLayout.tsx
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function LoginLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#f9f9f9] grid grid-rows-[auto_1fr]">
      {/* Header */}
      <header className="h-15 bg-[rgba(210,95,0,0.06)] flex items-center justify-between px-6">
        <div className="flex items-center space-x-2">
          <img src="/Logo.svg" alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-bold text-[#D25F00]">TODOLIST</span>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex justify-center items-center">
        <div className="w-full max-w-md px-4">{children}</div>
      </main>
    </div>
  );
}
