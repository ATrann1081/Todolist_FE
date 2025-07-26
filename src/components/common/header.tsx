import { ReactNode } from "react"; // import kiểu dữ liệu ReactNode cho phần được render trong component
import UserPopupButton from "@/components/todos/user";

type LoginLayoutProps = {  // định nghĩa kiểu dữ liệu cho props
  children: ReactNode;
};

export default function HeaderCommon({ children }: LoginLayoutProps) {
  return (
    // Container chính - sử dụng grid layout với 2 hàng
    <div className="grid min-h-screen grid-rows-[auto_1fr] bg-gray-50">
      {/*  flex: flexbox để căn chỉnh logo và text */}
      <header
        className="flex items-center justify-between px-8"
        style={{
          height: "80px",
          backgroundColor: "rgba(210, 95, 0, 0.06)", // màu như logo nhưng alpha = 6%
        }}
      >
        {/* Logo - kích thước cố định với margin trái */}
        <div className="flex items-center space-x-2">
          <img
            src="/Logo.svg"
            alt="Logo"
            style={{ width: "50px", height: "50px", marginLeft: "30px" }}
          />
          {/* Tên ứng dụng - font lớn, đậm, màu cam 
          span: thẻ chứa văn bản */}
          <span className="text-xl font-bold text-[#D25F00]">TODOLIST</span>
        </div>
        <UserPopupButton />
      </header>

      {/* Main Content 
       flex: flexbox để căn chỉnh nội dung theo cả 2 chiều
       items-center: căn chỉnh theo chiều dọc
       justify-center: căn chỉnh theo chiều ngang
      */}
      <main className="flex items-center justify-center">
        {/* Container nội dung - chiều rộng tối đa với padding 
        w-full: chiều rộng 100%
        max-w-md: chiều rộng tối đa 320px
        px-6: padding ở 2 bên 16px
        */}
        <div className="w-full max-w-md px-6">{children}</div>
      </main>
    </div>
  );
}
