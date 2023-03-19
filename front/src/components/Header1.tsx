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

        <div className="mt-4 flex items-center md:mt-0">
          <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
            <button
              type="button"
              className="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:text-indigo-500 focus-visible:ring active:text-indigo-700 md:text-base"
            >
              <Link to="/login">ログイン</Link>
            </button>
            <button
              type="button"
              className="inline-block rounded-lg bg-indigo-500 px-3 py-3 text-center text-sm  text-white outline-none hover:bg-blue-600 active:bg-blue-700 md:text-base"
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
            >
              <Link to="/signup">新規登録</Link>
            </button>
          </div>
        </div>


      </div>
    </div>
  </div>
);

export default Header1;
