import { ReactNode } from "react"; // import kiểu dữ liệu ReactNode cho phần được render trong component
import UserPopup from "@/components/todos/user";

type headerProps = {  // định nghĩa kiểu dữ liệu cho props
  children: ReactNode;
};
// children: nội dung nằm trong function
export default function HeaderCommon({ children }: headerProps) {
  return (
    // grid: layout dạng lưới
    // min-h-screen: min chiều cao màn hình 
    // grid-rows-[auto_1fr]: chia thành 2 hàng, hàng đầu tự động vừa với content, hàng sau chiếm phần còn lại (1fr)
    <div className="grid min-h-screen grid-rows-[auto_1fr] bg-gray-50">
       {/* flex: sắp xếp theo hàng/cột 
        items-center: căn chỉnh phần tử con theo chiều dọc 
        justify-center: căn chỉnh theo chiều ngang, đẩy phần từ con về 2 bên, 
        px-8: padding 32px (quy định Tailwind)        
       */}
      <header
        className="flex items-center justify-between px-8"
        style={{
          height: "80px",
          backgroundColor: "rgba(210, 95, 0, 0.06)", // màu như logo nhưng alpha = 6%
        }}
      >
        {/* space-x-2: khoách cách 8px giữa các con */}
        <div className="flex items-center space-x-2">
          <img
            src="/Logo.svg"
            alt="Logo"
            style={{ width: "50px", height: "50px", marginLeft: "30px" }}
          />
          {/* text-x1: font lớn
          span: thẻ chứa văn bản */}
          <span className="text-xl font-bold text-[#D25F00]">TODOLIST</span>
        </div>
        <UserPopup />
      </header>
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