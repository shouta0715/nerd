import React from "react";
import { TermItems } from "src/features/pages/terms/contents";
import { TermItem } from "src/features/pages/terms/types";

const items: TermItem[] = [
  {
    content:
      "ユーザーは,自己の責任において,本サービスのユーザーIDおよびパスワードを適切に管理するものとします。",
    key: "account-1",
  },
  {
    content:
      "ユーザーは,いかなる場合にも,ユーザーIDおよびパスワードを第三者に譲渡または貸与し,もしくは第三者と共用することはできません。本サービスは,ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には,そのユーザーIDを登録しているユーザー自身による利用とみなします。",
    key: "account-2",
  },
  {
    content:
      "ユーザーID及びパスワードが第三者によって使用されたことによって生じた損害は,本サービスは一切の責任を負わないものとします",
    key: "account-3",
  },
];

export const Account = () => {
  return <TermItems items={items} />;
};
