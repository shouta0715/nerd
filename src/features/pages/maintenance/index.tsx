import {
  ArrowSmallRightIcon,
  ExclamationTriangleIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";

const faqs = [
  {
    name: "メンテナンス中は何をしているのですか？",
    description:
      "メンテナンス中は、サービスのアップデートや不具合の修正を行っています。または、サーバーのメンテナンスを行っています。",
    icon: ExclamationTriangleIcon,
    id: "maintenance",
  },
  {
    name: "メンテナンス中はどのくらいかかりますか？",
    description: "未定です。お時間をいただく場合がございます。",
    icon: MegaphoneIcon,
    id: "maintenance-time",
  },
];

export const Maintenance = () => {
  return (
    <div className="bg-white">
      <main className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
        <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
          <p className="text-base font-semibold leading-8 text-red-600">
            メンテナンスモード
          </p>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            ただいまメンテナンス中です。
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            ご利用の皆様にはご迷惑をおかけしておりますが、ご理解のほどよろしくお願いいたします。
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
          <h2 className="sr-only">よくある質問</h2>
          <ul className="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5">
            {faqs.map((faq) => (
              <li key={faq.id} className="relative flex gap-x-6 py-6">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10">
                  <faq.icon
                    aria-hidden="true"
                    className="h-6 w-6 text-indigo-600"
                  />
                </div>
                <div className="flex-auto">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">
                    <p>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {faq.name}
                    </p>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {faq.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              className="flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              href="https://forms.gle/GMzgLTw6FA8S6jjS9"
              rel="noreferrer"
              target="_blank"
            >
              お問い合わせ
              <ArrowSmallRightIcon aria-hidden="true" className="h-5 w-5 " />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};
