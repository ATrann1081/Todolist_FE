import { ReactNode, useState, useRef, useEffect } from "react";
import Image from "next/image";

type MainLayoutProps = {
    children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-[#f9f9f9]">
            {/* Header */}
            <header className="h-15 bg-[rgba(210,95,0,0.06)] flex items-center justify-between px-6">
                <div className="flex items-center space-x-2">
                    <img src="/Logo.svg" alt="logo" className="w-10 h-10" />
                    <span className="text-xl font-bold text-[#D25F00]">TODOLIST</span>
                </div>

                {/* Account menu */}
                <div className="relative" ref={menuRef}>
                    <div
                        className="flex items-center space-x-2 cursor-pointer"
                        onClick={() => setMenuOpen((p) => !p)}
                    >
                        <span className="text-sm font-semibold text-[#D25F00]">BNgoc</span>
                        <div className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-[#D25F00]">
                            <Image src="/Account.svg" alt="Account" width={20} height={20} />
                        </div>
                    </div>

                    {menuOpen && (
                        <div className="absolute right-0 top-12 w-60 bg-white shadow-md rounded-md p-2">
                            <div className="px-3 py-2 text-sm border-b flex items-center space-x-3">
                                {/* avatar */}
                                <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
                                    <img src="/avatar.svg" alt="Avatar" width={40} height={40} className="object-cover" />
                                </div>
                                <div className="flex flex-col">
                                    <div className="font-medium">NguyenTBaoNgoc</div>
                                    <div className="text-gray-500 text-sm">
                                        ntbngoc2k4@gmail.com
                                    </div>
                                </div>
                            </div>

                            <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
                                <img src="/change.svg" alt="change" width={20} height={20} />
                                <span className="text-sm font-medium">Change password</span>
                            </div>
                            <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
                                <img src="/logout.svg" alt="logout" width={20} height={20} />
                                <span className="text-sm font-medium">Logout</span>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Body */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <aside className="w-64 mt-4 p-4 space-y-4 shadow border border-gray-300 rounded-md">
                    <div className="relative">
                        <input
                            className="w-full border rounded-md py-2 pl-3 pr-10"
                            placeholder="Search"
                        />
                        <span className="absolute right-3 top-2.5 text-[#D25F00]">
                            <img src="/Find.svg" alt="Find" width={20} height={20} />
                        </span>
                    </div>

                    <div className="space-y-2">
                        {["All task", "Upcoming", "Complete"].map((label) => (
                            <div
                                key={label}
                                className="flex items-center space-x-2 cursor-pointer">
                                <img src="/button.svg" alt="button" width={20} height={20} />
                                <span className="font-medium">{label}</span>
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 flex flex-col items-center justify-center text-center">
                    {children}
                </main>
            </div>
        </div>
    );
}
