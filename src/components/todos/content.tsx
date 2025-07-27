import React from "react";
import AddPen from "../buttons/add_pen";

// Định nghĩa kiểu dữ liệu cho props (các giá trị truyền vào component)
type TaskItemProps = {
  titleTask: string;      // Tiêu đề công việc
  description: string;    // Mô tả/ghi chú
  create: string;         // Ngày tạo
  update: string;         // Ngày cập nhật
};

// Tạo component TaskItem
export default function TaskItem({ titleTask, description, create, update }: TaskItemProps) {
  return (
    // Thẻ div bao ngoài, dùng Tailwind để set kích thước, màu nền, bo góc, bóng đổ, căn lề
    <div
      className="w-[740px] h-[63px] bg-[#fdf5ef] rounded-xl shadow-md flex items-center px-5"
    >
      {/* Phần bên trái: Tiêu đề và mô tả */}
      <div className="flex-1">
        {/* <div className="font-semibold text-lg">{titleTask}</div> */}
        <div className="font-semibold text-lg text-[#D25F00]">Đây là tít le Task</div>
        <div className="text-xs text-gray-500 flex items-center gap-1">
          <span >Đât là desciption </span>
          <span>{description}</span>
        </div>
      </div>
      {/* Phần bên phải: Ngày tạo, ngày cập nhật, icon chỉnh sửa */}
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center text-xs text-gray-500">
          <span className="flex items-center gap-1">
            {/* Icon lịch */}
            {/* <svg width="16" height="16" fill="none"><rect width="16" height="16" fill="none"/><path d="M3 2.5A1.5 1.5 0 0 0 1.5 4v8A1.5 1.5 0 0 0 3 13.5h10A1.5 1.5 0 0 0 14.5 12V4A1.5 1.5 0 0 0 13 2.5H3Z" stroke="#888" /><path d="M5 6h6M5 8h6" stroke="#888" strokeLinecap="round"/></svg> */}
            <img src=".\create.svg" alt="Create" width={15} height={15.9} />
            
            <span>Create</span>
          </span>
          <span>{create}</span>
        </div>
        <div className="flex flex-col items-center text-xs text-gray-500">
          <span className="flex items-center gap-1">
            {/* Icon lịch */}
            {/* <svg width="16" height="16" fill="none"><rect width="16" height="16" fill="none"/><path d="M3 2.5A1.5 1.5 0 0 0 1.5 4v8A1.5 1.5 0 0 0 3 13.5h10A1.5 1.5 0 0 0 14.5 12V4A1.5 1.5 0 0 0 13 2.5H3Z" stroke="#888" /><path d="M5 6h6M5 8h6" stroke="#888" strokeLinecap="round"/></svg> */}
            <img src=".\update.svg" alt="update" width={15} height={15.9} />

            <span>Update</span>
          </span>
          <span>{update}</span>
        </div>
        {/* Icon chỉnh sửa  */}
        <button>
          <AddPen />
        </button>
      </div>
    </div>
  );
}
