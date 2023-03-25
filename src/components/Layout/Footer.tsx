import Link from "next/link";
import React, { FC } from "react";

export const Footer: FC = () => (
  <footer className="mt-4 bg-white">
    <div className="container mx-auto flex flex-col items-center justify-center py-4 ">
      <div className="flex w-full items-center space-x-4 border-b border-slate-200 px-6 pb-4 text-xs md:text-sm">
        <p className="text-base">
          <span className="inline-block bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Nerd
          </span>
        </p>
        <div className="flex-1">
          <ul className="flex items-center justify-around space-x-4">
            <li>
              <Link className="text-gray-500 hover:text-gray-700" href="/">
                利用規約
              </Link>
            </li>
            <li>
              <Link className="text-gray-500 hover:text-gray-700" href="/">
                プライバシーポリシー
              </Link>
            </li>
            <li>
              <Link className="text-gray-500 hover:text-gray-700" href="/">
                お問い合わせ
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-full items-center justify-center space-x-4 px-6 pt-4 text-xs md:text-sm">
        <div className="flex w-full items-center justify-between text-gray-500">
          <small>&copy; {new Date().getFullYear()}</small>
          <ul className="flex space-x-6">
            <li className="hover:underline">
              <a href="twitter">Twitter</a>
            </li>
            <li className="hover:underline">
              <a href="instagram">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
