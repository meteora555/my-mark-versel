import React, { Dispatch, FC, SetStateAction } from "react";
import s from "./PersonForm.module.scss";
import { IUpdateUser, IUserRootObject } from "@/modules/User/types";
import { useForm } from "antd/lib/form/Form";
import { Button, Form, Input, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import { MaskedInput } from "antd-mask-input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserFetcher } from "@/modules/User/api";

interface PersonFormProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  user: IUserRootObject;
}

export const PersonForm: FC<PersonFormProps> = ({ setIsModalOpen, user }) => {
  const [form] = useForm();
  const queryClient = useQueryClient();
  const mask = React.useMemo(
    () => [
      {
        mask: "+7 000 000 00 00",
        lazy: false,
        placeholderChar: "_",
      },
    ],
    []
  );
  const { mutate: updateUser } = useMutation(updateUserFetcher);
  const updateUserFinishHandle = async (updateValues: IUpdateUser) => {
    try {
      await form.validateFields(["firstName", "phone", "email"]);
      updateUser(updateValues, {
        onSuccess: () => {
          message.success("Личные данные обновлены");
          setIsModalOpen(false);
          queryClient.invalidateQueries(["getUser"]);
        },
        onError: (error: any) => {
          message.error(error.message);
        },
      });
    } catch {
      message.error("Заполните пожайлуста поля формы");
    }
  };

  return (
    <div className={s.personForm}>
      <Form
        name="edit"
        autoComplete="on"
        layout={"vertical"}
        form={form}
        onFinish={() => updateUserFinishHandle(form.getFieldsValue())}
        initialValues={{
          firstName: user.name,
          phone: user.phoneNumber,
          email: user.email,
        }}
      >
        <FormItem
          name={"firstName"}
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input size="large" placeholder="Ваше Имя" />
        </FormItem>
        <FormItem name={"phone"}>
          <MaskedInput
            mask={mask}
            className={s.input}
            placeholder={"Номер телефона"}
            size="large"
          />
        </FormItem>
        <FormItem name={"email"}>
          <Input size="large" type="email" />
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
