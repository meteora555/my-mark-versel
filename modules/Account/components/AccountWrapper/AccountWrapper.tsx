import React, { FC } from "react";
import s from "./AccountWrapper.module.scss";
import { AccountAside } from "../AccountAside/AccountAside";
import { Profile } from "../Profile/Profile";

interface AccountWrapperProps {}

export const AccountWrapper: FC<AccountWrapperProps> = (props) => {
  return (
    <div className={s.accountWrapper}>
      <AccountAside />
      <Profile />
    </div>
  );
};
