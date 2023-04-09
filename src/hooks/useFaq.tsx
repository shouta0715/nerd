import Link from "next/link";
import React from "react";
import { Button } from "src/components/Elements/Button";
import { Input } from "src/components/Elements/Input/Input";
import { SearchModal } from "src/components/Elements/SearchModal";
import { useSearch } from "src/hooks/useSearch";
import { useGlobalState } from "src/store/global/globalStore";
import { useUserState } from "src/store/user/userState";

export const useFaq = () => {
  const [user, setUser] = useUserState((state) => [state.user, state.setUser]);
  const [name, setName] = React.useState("");
  const { setIsSearchOpen, search, setSearch, submitHandler, isSearchOpen } =
    useSearch();
  const { authLoading, changeIsOpenModal } = useGlobalState((state) => ({
    authLoading: state.authLoading,
    changeIsOpenModal: state.setIsOpenModal,
  }));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name) setName("");

    if (user) {
      setUser({
        ...user,
        user_name: name,
      });

      localStorage.setItem("user_name", name);
    }

    setName("");
  };

  const faqMock = [
    {
      question: "投稿名はどこで変更できますか？",
      answer:
        "こちらで変更できます。下のフォームに変更したい名前を入力してください。30文字以内でお願いします。",
      components: (
        <div className="mt-2">
          <div className="flex text-xs text-dimmed">
            <p className="mr-2">現在の投稿名</p>
            <p className="flex-1">{user ? user.user_name : "匿名"}</p>
          </div>
          <form className="mt-2 flex max-w-md space-x-2" onSubmit={onSubmit}>
            <Input
              className="flex-1 bg-white py-1"
              maxLength={30}
              onChange={(e) => {
                if (e.target.value.length > 30) return;
                setName(e.target.value);
              }}
              type="text"
              value={name}
            />
            <Button
              className={`bg-indigo-500 font-bold text-white ${
                name ? "" : "pointer-events-none opacity-0"
              }`}
              size="xs"
              type="submit"
            >
              変更
            </Button>
          </form>
        </div>
      ),
      key: "faq-1",
    },
    {
      question: "どこで見たいアニメを検索できますか？",
      components: (
        <>
          <p className="hidden md:block">
            左の検索フォームにタイトルを入力すると、そのタイトルのアニメを検索できます。
          </p>
          <button
            className="mt-2 text-blue-500 underline md:hidden"
            onClick={() => setIsSearchOpen(true)}
          >
            こちらから検索できます。
          </button>
          <SearchModal
            isSearchOpen={isSearchOpen}
            search={search}
            setIsSearchOpen={setIsSearchOpen}
            setSearch={setSearch}
            submitHandler={submitHandler}
          />
        </>
      ),
      key: "faq-2",
    },
    {
      question: "再生してもチャットが表示されません",
      answer: "該当の時間に投稿がない場合、チャットが表示されません。",
      key: "faq-3",
    },
    {
      question: "ログインすると何ができるようになりますか？",
      answer:
        "コメントにいいねをつけることができます。また、自分のログインしたアカウントの画像を表示することができます。",
      components: (
        <Button
          className={`btn-primary mt-2 text-sm ${
            user?.anonymous ? "" : "hidden"
          }`}
          loading={authLoading}
          onClick={() => changeIsOpenModal(true)}
          radius="md"
          size="xs"
        >
          ログイン
        </Button>
      ),
      key: "faq-4",
    },
    {
      question: "ログインしていても投稿名を変更できますか？",
      answer: "はい、ログインしていても好きな名前に変更できます。",
      key: "faq-5",
    },
    {
      question: "検索しても見つからない",
      answer:
        "誤字脱字がないか確認してください。それでも見つからない場合、登録されていない可能性があります。リクエストフォームから作品の追加要望を送ってください。",
      components: (
        <Link
          className="mt-2 inline-block text-blue-500 underline"
          href="/request"
        >
          リクエストフォームはこちら
        </Link>
      ),
      key: "faq-6",
    },
    {
      question: "アニメの追加要望を送りたい",
      answer:
        "リクエストフォームから作品の追加要望を送ってください。追加されるまでに時間がかかる場合があります。",
      components: (
        <Link
          className="mt-2 inline-block  text-blue-500 underline"
          href="/request"
        >
          リクエストフォームはこちら
        </Link>
      ),
      key: "faq-7",
    },
    {
      question: "今日放送のアニメの時間がずれている",
      answer:
        "画面をリロードすると直る場合があります。それでも直らない場合、放送時間が変更されている可能性があります。お問い合わせをお願いします。",
      components: (
        <Link
          className="mt-2 inline-block text-blue-500 underline"
          href="/contact"
        >
          お問い合わせはこちら
        </Link>
      ),
      key: "faq-8",
    },
  ];

  return { faqMock };
};
