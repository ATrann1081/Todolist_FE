"use client";

import { useForm } from "react-hook-form";
import LoginLayout from "@/layouts/auth";
import styles from "@/styles/auth/index.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter(); // ✅ khởi tạo router ở đây

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  // ✅ để onSubmit nằm bên trong component để dùng được router
  const onSubmit = (data: LoginFormInputs) => {
    console.log("Form data:", data);
    // 👉 Sau khi xử lý login thành công thì điều hướng:
    router.push("/main");
  };

  return (
    <LoginLayout>
      {/* Form đăng nhập */}
      <div className={styles.loginForm}>
        <div className={styles.div}>
          <div className={styles.wrapper}>
            <div className={styles.text2}>Sign in</div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.inputGroup1}>
                <label>Email</label>
                <input
                  className={styles.text5}
                  type="text"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Vui lòng nhập email",
                    maxLength: {
                      value: 255,
                      message: "Email không vượt quá 255 ký tự",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                      message: "Vui lòng nhập đúng định dạng Gmail",
                    },
                    validate: (value) =>
                      !/\s/.test(value) || "Email không được chứa dấu cách",
                  })}
                />
                {errors.email && (
                  <p className={styles.error}>{errors.email.message}</p>
                )}
              </div>

              <div className={styles.inputGroup2}>
                <label>Password</label>
                <input
                  className={styles.text5}
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Vui lòng nhập mật khẩu",
                    minLength: {
                      value: 6,
                      message: "Mật khẩu phải có ít nhất 6 ký tự",
                    },
                    maxLength: {
                      value: 15,
                      message: "Mật khẩu phải có tối đa 15 ký tự",
                    },
                    validate: (value) =>
                      !/\s/.test(value) || "Mật khẩu không được chứa dấu cách",
                  })}
                />
                {errors.password && (
                  <p className={styles.error}>{errors.password.message}</p>
                )}
              </div>

              <button type="submit" className={styles.submitButton}>
                <div className={styles.text10}> SIGN IN </div>
              </button>
              <div className={styles.authExtras}>
                <div className={styles.frame}>
                  <div className={styles.text3}> Don’t have an account?</div>
                  <div className={styles.signup}>
                    <Link href="/signup" className="underline">
                      <b>SIGN UP</b>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LoginLayout>
  );
}
