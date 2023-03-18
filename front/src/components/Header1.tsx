import {FC} from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from '@xzar90/react-router-hash-link';
import Logo from '../assets/FM_Mail_logo.svg';

const Header1: FC = () => (
  <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="mb-8 flex items-center justify-between border-b py-4 md:mb-12 md:py-8 xl:mb-16">
        <Link
        to="/"
        className="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl"
        >

        <img className="h-auto w-12" src={Logo} alt="FM Mail" />
          FM Mail
        </Link>

        <nav className="hidden gap-12 lg:flex">
          <HashLink
            smooth
            className="text-lg font-semibold text-indigo-500"
            to="/#Overview"
          >
            概要
          </HashLink>
          <HashLink
            smooth
            className="text-lg font-semibold text-gray-600 transistion duration-100 hover:text-indigo-500 active:text-indigo-700"
            to="/#Feature"
          >
            特徴
          </HashLink>
          <HashLink
            smooth
            className="text-lg font-semibold text-gray-600 transistion duration-100 hover:text-indigo-500 active:text-indigo-700"
            to="/#Price"
          >
            料金プラン
          </HashLink>
          <HashLink
            smooth
            className="text-lg font-semibold text-gray-600 transistion duration-100 hover:text-indigo-500 active:text-indigo-700"
            to="/#Contact"
          >
            お問い合わせ
          </HashLink>
        </nav>

        <a href="#" className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">
          ログイン
        </a>

        <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>

          Menu
        </button>
      </div>
    </div>
  </div>
);

export default Header1;
