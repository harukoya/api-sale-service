import {FC} from 'react';
import newsletter from '../assets/undraw_newsletter_re_wrob.svg'

const OverView: FC = () => (
<div id="Overview" className="bg-white pb-6 sm:pb-8 lg:pb-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
      <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">

          <h1 className="text-black-800 mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl">
            FileMaker®の標準機能だけで簡単にメール受信を実現
          </h1>

        <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">プラグインのインストールや追加マシンの準備は不要です。FileMaker®の標準機能だけでIMAP4サーバーからメールを受信して、データベースに取り込むことができます。</p>

        <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
          <a href="#" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">無料で始める</a>

        </div>
      </div>

      <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
        <img src={newsletter} loading="lazy" alt="Photo by Fakurian Design" className="rounded object-cover object-center" />
      </div>
    </section>
    </div>
  </div>
);

export default OverView;
