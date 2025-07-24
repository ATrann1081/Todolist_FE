"use client";
import MainLayout from "@/layouts/main";
import styles from "@/styles/main/index.module.scss";
import { useRouter } from "next/router";


export default function DashboardPage() {
  const router = useRouter();

  const handleAddTask = () => {
    router.push("/main"); // 👉 chuyển sang route /main
  };

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center">
        <img src="/meme.svg" alt="meme" className="w-60 h-60 mb-6" />
        <h1 className="text-3xl font-bold text-[#D25F00] mb-2">Plan Your Day</h1>
        <p className="mb-6 text-gray-700 max-w-md">
          “Master your time, plan your day, build your best life.”
        </p>
        <button
          onClick={handleAddTask}
          className="bg-[#D25F00] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#b14c00] transition"
        >
          <div className="flex items-center space-x-2 cursor-pointer">
            <span>
              <img src="/plus.svg" alt="plus" className="w-5 h-5" />
            </span>
            <span className="font-medium">Add Task</span>
          </div>
        </button>
      </div>
    </MainLayout>
  );
}
