import { CheckCircleIcon } from '@heroicons/react/20/solid'

export default function Overview() {
  return (
    <div className="bg-gray-300 rounded-t-3xl px-6 pt-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Overview</h1>
        <p className="mt-6 text-xl leading-8">
          Lekker Melodies is all about finding peace and focus through sounds.
          It's like having your own secret tool to make noisy places quieter. Here's what you can expect:
        </p>
        <div className="mt-10 max-w-2xl">
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-[#0274ff]" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">1. Sounds Anywhere: </strong> 
                Whether you're studying, working, or just need some calm, Lekker Melodies has 
                sounds that can help you relax, no matter where you are.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-[#0274ff]" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">2. Public Places: </strong>
                Ever wanted to escape the noise of a crowded place? Plug in your headphones, and
                our sounds will transport you to a peaceful world. Ideal for developers and
                remote workers who need concentration on the go.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-[#0274ff]" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">3. Simple to Use: </strong>
                Lekker Melodies is easy. Just click, play, and enjoy. No tech stuff to worry about.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-[#0274ff]" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">4. No Cost, No Catch: </strong>
                It's completely free! No hidden fees or subscriptions. It's our way of making peace and focus
                accessible to everyone, especially for those who code or work in public spaces.
              </span>
            </li>
          </ul>
          <h3 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Enjoy!! 🎹 🎵</h3>
        </div>
      </div>
      <footer className='p-6 flex flex-col md:flex-row items-center justify-between'>
        <p className='mx-3 pt-16'>Built with 💝 by Mitchell Mutandah</p>

        <div className='flex pt-16'>
          <p className="mx-3">© 2023 Lekker Melodies, All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}
