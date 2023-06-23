import React from "react";

export const Contact = () => {
  return (
    <div>
      <p>
        本サービスに関するお問い合わせは，下記のサイトからお願いいたします。
      </p>
      <p className="mt-4 text-center">
        <a
          className="font-semibold text-indigo-600 hover:text-indigo-500"
          href="https://forms.gle/GMzgLTw6FA8S6jjS9"
          rel="noreferrer"
          target="_blank"
        >
          お問い合わせページ
        </a>
      </p>
    </div>
  );
};
