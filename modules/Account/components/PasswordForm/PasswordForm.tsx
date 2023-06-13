"use client";
import React, { Dispatch, FC, SetStateAction } from "react";
import s from "./PasswordForm.module.scss";
import { useForm } from "antd/lib/form/Form";
import { Button, Form, Input, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import { IPassword } from "@/modules/User/types";
import { useMutation } from "@tanstack/react-query";
import { changePasswordFetcher } from "@/modules/User/api";

interface PasswordFormProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const PasswordForm: FC<PasswordFormProps> = ({ setIsModalOpen }) => {
  const [form] = useForm();
  const { mutate: updatePassword } = useMutation(changePasswordFetcher);
  const handlePasswordFinish = async (passwordValues: IPassword) => {
    try {
      await form.validateFields(["oldPassword", "password", "repeatPassword"]);
      const dataToApi: IPassword = {
        ...form.getFieldsValue(["oldPassword", "password"]),
      };
      updatePassword(dataToApi, {
        onSuccess: () => {
          message.success("Пароль успешно обновлен");
          setIsModalOpen(false);
          form.resetFields();
        },
        onError: (error: any) => {
          message.error(error.message);
        },
      });
    } catch {
      message.error("Заполните пожалуйста поля формы");
    }
  };
  return (
    <div className={s.passwordForm}>
      <Form
        name="changePassword"
        className={s.form}
        layout={"vertical"}
        onFinish={(passwordValues) => handlePasswordFinish(passwordValues)}
        form={form}
      >
        <FormItem
          className={s.item}
          name={"oldPassword"}
          rules={[
            {
              required: true,
              message: "Пожайлуста введите данные",
            },
            {
              min: 8,
              message: "Пароль содержит минимум 8 символов",
            },
          ]}
        >
          <Input.Password
            minLength={8}
            className={s.input}
            size="large"
            placeholder="Текущий пароль"
          />
        </FormItem>
        <FormItem
          className={s.item}
          name={"password"}
          rules={[
            {
              required: true,
              message: "Пожайлуста введите данные",
            },
            {
              min: 8,
              message: "Пароль содержит минимум 8 символов",
            },
          ]}
        >
          <Input.Password
            minLength={8}
            className={s.input}
            size="large"
            placeholder="Новый пароль"
          />
        </FormItem>
        <FormItem
          className={s.item}
          name={"repeatPassword"}
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Пожайлуста введите данные",
            },
            {
              min: 8,
              message: "Пароль содержит минимум 8 символов",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Пароли должны совпадать"));
              },
            }),
          ]}
        >
          <Input.Password
            minLength={8}
            className={s.input}
            size="large"
            placeholder="Повторите пароль"
          />
        </FormItem>
        <div className="flex flex-col gap-2">
          <Button htmlType="submit" type="primary" className={s.buttonConfirm}>
            Изменить
          </Button>
        </div>
      </Form>
    </div>
  );
};
