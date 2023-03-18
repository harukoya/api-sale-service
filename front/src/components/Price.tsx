import {FC} from 'react';

const Price: FC = () => (
<div id="Price" className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">料金プラン</h2>

    <div className="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-2 lg:gap-8">
      <div className="flex flex-col rounded-lg border p-4 pt-6">
        <div className="mb-12">
          <div className="mb-2 text-center text-2xl font-bold text-gray-800">無料プラン</div>

          <p className="mx-auto mb-8 px-8 text-center text-gray-500">個人でのお試し利用向け</p>

          <div className="space-y-2">
            <div className="flex gap-2 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">xxxxが利用可能</span>
            </div>

            <div className="flex gap-2 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">xxxxが利用可能</span>
            </div>

            <div className="flex gap-2 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">xxxxが利用可能</span>
            </div>

            <div className="flex gap-2 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">xxxxが利用可能</span>
            </div>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-8">
          <div className="flex items-end justify-center gap-1">
            <span className="text-4xl font-bold text-gray-800">0</span>
            <span className="text-gray-500">円</span>
          </div>

          <a href="#" className="block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">申し込む</a>
        </div>
      </div>

      <div className="relative flex flex-col rounded-lg border-2 border-indigo-500 p-4 pt-6">
        <div className="mb-12">
          <div className="absolute inset-x-0 -top-3 flex justify-center">
            <span className="flex h-6 items-center justify-center rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">おすすめ</span>
          </div>

          <div className="mb-2 text-center text-2xl font-bold text-gray-800">有料プラン</div>

          <p className="mx-auto mb-8 px-8 text-center text-gray-500">すべての機能が利用可能</p>

          <div className="space-y-2">
            <div className="flex gap-2 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">xxxxが無制限で利用可能</span>
            </div>

            <div className="flex gap-2 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">xxxxが無制限で利用可能</span>
            </div>

            <div className="flex gap-2 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">xxxxが無制限で利用可能</span>
            </div>

            <div className="flex gap-2 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">xxxxが無制限で利用可能</span>
            </div>

            <div className="flex gap-2 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">xxxxが無制限で利用可能</span>
            </div>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-8">
          <div className="flex items-end justify-center gap-1">
            <span className="text-4xl font-bold text-gray-800">5,000</span>
            <span className="text-gray-500">円/月</span>
          </div>

          <a href="#" className="block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">申し込む</a>
        </div>
      </div>

    </div>

    <div className="mt-20 flex justify-center">
      <button
        type="button"
        className="inline-flex rounded border-0 bg-blue-500 py-3 px-6 text-lg text-white hover:bg-blue-600 focus:outline-none active:bg-blue-700"
      >
        <a href="#">無料ではじめる</a>
      </button>
    </div>

  </div>
</div>
);

export default Price;
