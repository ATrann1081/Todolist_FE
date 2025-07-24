"use client";

import { useForm } from "react-hook-form";
import LoginLayout from "@/layouts/auth";
import styles from "@/styles/changepassword/index.module.scss";

type ChangePasswordInputs = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export default function ChangePasswordPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ChangePasswordInputs>();

  const onSubmit = (data: ChangePasswordInputs) => {
    console.log("Submitted data:", data);
  };

  const newPasswordValue = watch("newPassword");

  return (
    <LoginLayout>
      <div className={styles.container}>
        <div className={styles.div}>
          <div className={styles.wrapper}>
            <div className={styles.title}>Change Password</div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Current Password */}
              <div className={styles.Current}>
                <label>Current Password</label>
                <input
                  type="password"
                  placeholder="Enter your current password"
                  {...register("currentPassword", {
                    required: "Vui lòng nhập mật khẩu hiện tại",
                  })}
                />
                {errors.currentPassword && (
                  <p className={styles.error}>
                    {errors.currentPassword.message}
                  </p>
                )}
              </div>

              {/* New Password */}
              <div className={styles.New}>
                <label>New Password</label>
                <input
                  type="password"
                  placeholder="Enter your new password"
                  {...register("newPassword", {
                    required: "Vui lòng nhập mật khẩu mới",
                    minLength: {
                      value: 6,
                      message: "Mật khẩu phải có ít nhất 6 ký tự",
                    },
                    maxLength: {
                      value: 255,
                    },
                    validate: (value) =>
                      !/\s/.test(value) || "Mật khẩu không được chứa dấu cách",
                  })}
                />
                {errors.newPassword && (
                  <p className={styles.error}>{errors.newPassword.message}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div className={styles.Confirm}>
                <label>Confirm New Password</label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  {...register("confirmPassword", {
                    required: "Vui lòng xác nhận mật khẩu",
                    validate: (value) =>
                      value === newPasswordValue ||
                      "Mật khẩu xác nhận không khớp",
                  })}
                />
                {errors.confirmPassword && (
                  <p className={styles.error}>
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <button type="submit" className={styles.submitButton}>
                <div className={styles.text10}>CHANGE PASSWORD</div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </LoginLayout>
  );
}
