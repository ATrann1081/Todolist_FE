"use client";
// use client: để sử dụng state và effect trong component
// useState: để quản lý trạng thái của component
// useRef: để lưu trữ giá trị của component 
// useEffect: để thực hiện side effects
import React, { useState, useRef, useEffect } from "react";

export default function UserPopupButton() {
  const [open, setOpen] = useState(false);
  
  // buttonRef, popupRef: tham chiếu đến button, popup
  // HTMLButtonElement, HTMLDivElement: kiểu có sẵn trong react
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  // Đóng popup khi click ra ngoài
  // useEffect: thực hiện side effects khi component render
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        // popupRef.current: tham chiếu đến popup
        popupRef.current &&
        // !popupRef.current.contains(): click vào vị trí ngoài popup
        // event.taget as Node: gán tất cả các event đều là Node để không gặp lỗi khi gọi .contains
        !popupRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      // Thêm event listen cho toàn bộ document khi popup được mở (để đóng popup khi click ngoài popup)
      document.addEventListener("mousedown", handleClickOutside);
    } else { 
      // Gỡ event
      document.removeEventListener("mousedown", handleClickOutside);
    }
    // Clean function khi component bị gỡ bỏ hoặc trước khi effect lại
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // Khi open thay đổi thì effect sẽ được gọi lại
  }, [open]);

  // Thông tin user (lấy từ API)
  const user = {
    name: "Nguyen Van A",
    email: "nguyenvana@email.com",
  };

  return (
    <div className="relative inline-block">
      <button
        // ref: lưu trữ tham chiếu đến button
        ref={buttonRef}
        // khi click vào button thì sẽ đổi trạng thái của open
        onClick={() => setOpen((v) => !v)}
        // bg-transparent: background trong suốt
        // không có border 
        // padding = 0 
        // cursor-pointer: biến trỏ chuột -> bàn tay để nhấn
        className="bg-transparent border-none p-0 cursor-pointer"
        aria-label="User info"
        type="button"
      >
        {/* SVG icon */}
        <img src="/button_Account.svg" alt="User" width={32} height={32} />
      </button>
      {open && (
        <div
          ref={popupRef}
          className="absolute top-10 right-0 w-[236px] h-[134px] bg-white rounded-b-xl shadow-lg p-5 z-50 flex flex-col justify-center items-start min-w-0"
        >
          <div className="font-semibold text-lg text-[#D25F00] mb-2">{user.name}</div>
          <div className="text-sm text-gray-800">{user.email}</div>
        </div>
      )}
    </div>
  );
}
