import { getContactFetcher } from "@/modules/Contacts/api";
import { Contacts } from "@/modules/Contacts/components/Contacts";
import React from "react";

export default async function Page() {
  const contacts = await getContactFetcher();
  return (
    <>
      <Contacts data={contacts} />
    </>
  );
}
