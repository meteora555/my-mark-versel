"use client";
import React, { Dispatch, FC, SetStateAction } from "react";
import s from "./RegForm.module.scss";
import { Button, Form, Input, message } from "antd";
import { Logo } from "@/components/ui/Logo/Logo";
import { useForm } from "antd/lib/form/Form";
import { useMutation } from "@tanstack/react-query";
import { registerAccountFetcher } from "../../api";
import { IRegistration } from "../../types/IReg";

interface PegFormProps {
  setLogin: Dispatch<SetStateAction<boolean>>;
  modalHandle: Dispatch<SetStateAction<boolean>>;
}
export const RegForm: FC<PegFormProps> = ({ setLogin, modalHandle }) => {
  const [form] = useForm();
  const {
    mutateAsync: registerTrigger,
    isLoading: registerLoading,
    isSuccess: registerSuccess,
  } = useMutation(registerAccountFetcher);

  const handleRegisterFinish = async (values: IRegistration) => {
    try {
      const res = await registerTrigger({
        name: values.name,
        email: values.email,
      });
      message.info("На почту отправлена информация");
      setTimeout(() => {
        modalHandle(false);
      }, 2000);
    } catch (e: any) {
      message.error(e.message);
    }
  };
  return (
    <>
      <div className={s.regForm}>
        <Form
          form={form}
          className={s.form}
          name="registration"
          layout={"vertical"}
          autoComplete="on"
          onFinish={() => handleRegisterFinish({ ...form.getFieldsValue() })}
        >
          <Logo width={130} height={100} />

          {registerSuccess ? (
            <>
              <h2 className={s.titleReg}>
                На указанную почту отправлена информация, где указаны данные для
                авторизации
              </h2>
            </>
          ) : (
            <>
              <h2 className={s.title}>Регистрация</h2>
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Пожалуйста введите имя",
                  },
                ]}
              >
                <Input placeholder="Имя" />
              </Form.Item>
              <Form.Item
                className={s.item}
                name="email"
                rules={[
                  { required: true, message: "Пожалуйста введите ваш email" },
                ]}
              >
                <Input type={"email"} placeholder="Email" />
              </Form.Item>
              <Button
                loading={registerLoading}
                htmlType="submit"
                className={s.button}
                type="primary"
              >
                Зарегистрироваться
              </Button>
              <p className={s.info}>
                Есть аккаунт?
                <Button className={s.buttonReg} type="link">
                  Войти
                </Button>
              </p>
            </>
          )}
        </Form>
      </div>
    </>
  );
};
