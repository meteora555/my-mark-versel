"use client";
import s from "./AuthForm.module.scss";
import { Button, Form, Input, message } from "antd";
import React, { Dispatch, FC, SetStateAction } from "react";
import { Logo } from "@/components/ui/Logo/Logo";
import { useForm } from "antd/lib/form/Form";
import { useMutation } from "@tanstack/react-query";
import { getAccessTokenFetcher } from "../../api";
import { IAuth } from "../../types/IAuth";
import { setCookie } from "cookies-next";
import { useUserStore } from "@/modules/User/store";

interface AuthFormProps {
  setLogin: Dispatch<SetStateAction<boolean>>;
  modalHandle: Dispatch<SetStateAction<boolean>>;
}
export const AuthForm: FC<AuthFormProps> = ({ setLogin, modalHandle }) => {
  const setAuth = useUserStore((store) => store.setAuthStatus);
  const [form] = useForm();

  const {
    mutateAsync: loginMutate,
    isSuccess: success,
    isLoading: loginLoading,
  } = useMutation(getAccessTokenFetcher);
  const handleLoginFormFinish = async (values: IAuth) => {
    try {
      const res = await loginMutate({
        email: values.email,
        password: values.password,
      });
      message.success("Успешная авторизация");
      setCookie("accessToken", res.accessToken);
      setCookie("refreshToken", res.refreshToken);
      setAuth(true);
      modalHandle(false);
    } catch (e: any) {
      message.error(e.message);
    }
  };
  return (
    <div className={s.authForm}>
      <Form
        form={form}
        className={s.form}
        name="auth"
        layout={"vertical"}
        autoComplete="on"
      >
        <Logo width={130} height={100} />
        <h2 className={s.title}>Вход в личный кабинет</h2>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Пожалуйста введите ваш email" }]}
        >
          <Input type={"email"} placeholder="Email" />
        </Form.Item>

        <Form.Item
          className={s.item}
          name="password"
          rules={[
            {
              required: true,
              message: "Пожалуйста введите пароль",
            },
          ]}
        >
          <Input.Password placeholder="Пароль" />
        </Form.Item>
        <Button
          disabled={loginLoading}
          onClick={() => handleLoginFormFinish({ ...form.getFieldsValue() })}
          htmlType="submit"
          className={s.button}
          type="primary"
        >
          Войти
        </Button>
        <p className={s.info}>
          Нет аккаунта?
          <Button
            onClick={() => setLogin(true)}
            className={s.buttonReg}
            type="link"
          >
            Зарегестрироваться
          </Button>
        </p>
        <Button className={s.buttonReset} type="link" href={"#"}>
          Забыли пароль?
        </Button>
      </Form>
    </div>
  );
};
