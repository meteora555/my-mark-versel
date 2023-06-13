"use client";

import { IconEdit } from "@/components/ui/IconEdit";
import { useUserStore } from "@/modules/User/store";
import { Button, Modal } from "antd";
import React, { FC, useEffect, useState } from "react";

import dayjs from "dayjs";
import "dayjs/locale/ru";
import s from "./Profile.module.scss";
import { PersonForm } from "../PersonForm/PersonForm";
import { PasswordForm } from "../PasswordForm/PasswordForm";

dayjs.locale("ru");

interface ProfileProps {}

enum TypeForm {
  person = 1,
  password = 2,
}

const modalTypeMask: Record<TypeForm, string> = {
  [TypeForm.person]: "Личные данные",
  [TypeForm.password]: "Изменение пароля",
};

export const Profile: FC<ProfileProps> = () => {
  const user = useUserStore((store) => store.user);

  const [open, setOpen] = useState<boolean>(false);
  const [typeForm, setTypeForm] = useState<1 | 2>(1);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className={s.profile}>
      <div className={s.edit}>
        <h2 className={s.title}>Мои данные</h2>
        <Button
          onClick={() => {
            setTypeForm(1);
            showModal();
          }}
          className={s.editBtn}
          type="text"
        >
          Изменить профиль
        </Button>
      </div>
      <div className={s.info}>
        <div className={s.description}>
          <div className={s.description__name}>
            <h2>{user.name}</h2>
          </div>
        </div>
      </div>
      <div className={s.list}>
        <div className={s.block}>
          <h4 className={s.block__title}>Телефон:</h4>
          <div className={s.block__value}>
            +7
            {user.phoneNumber && user.phoneNumber.replace(/.{3,7}/, "*****")}
          </div>
        </div>
        <div className={s.block}>
          <h4 className={s.block__title}>@ E-Mail:</h4>
          <div className={s.block__value}>
            {user.email ? user.email : "Укажите электронный адрес"}
          </div>
        </div>
        <div className={s.block}>
          <h4 className={s.block__title}>
            Пароль:{" "}
            <span
              onClick={() => {
                setTypeForm(2);
                showModal();
              }}
            >
              <IconEdit className={s.svg} />
            </span>
          </h4>
          <div className={s.dots}>
            <span className={s.dot}></span>
            <span className={s.dot}></span>
            <span className={s.dot}></span>
            <span className={s.dot}></span>
            <span className={s.dot}></span>
            <span className={s.dot}></span>
            <span className={s.dot}></span>
            <span className={s.dot}></span>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        title={<h2 className={s.titleModal}>{modalTypeMask[typeForm]}</h2>}
        // onOk={handleOk}
        onCancel={handleCancel}
        centered={true}
      >
        {typeForm === TypeForm.person && (
          <PersonForm setIsModalOpen={setOpen} user={user} />
        )}
        {typeForm === TypeForm.password && (
          <PasswordForm setIsModalOpen={setOpen} />
        )}

        <Button onClick={handleCancel} className={s.buttonCancel} type="ghost">
          Отмена
        </Button>
      </Modal>
    </div>
  );
};
