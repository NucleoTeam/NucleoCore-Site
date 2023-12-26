import Image from 'next/image';

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="lg:static lg:w-auto  lg:p-4">
            <a href={"/"}>NucleoCore Projects</a>
          </p>
        </div>
        <div className="mb-32 m-40 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
          <a
              href="https://nucleodb.com"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target={"_blank"}
              rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              NucleoDB{' '}
            </h2>
            <p className={`m-4 max-w-[30ch] text-sm opacity-50`}>
              In-Memory embedded database for microservices. Uses a message queue
            </p>
          </a>
          <a
              href="https://thejointforge.com"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target={"_blank"}
              rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              NucleoEvents{' '}
            </h2>
            <p className={`m-4 max-w-[30ch] text-sm opacity-50`}>
              Coming soon!
            </p>
          </a>
        </div>
      </main>
  )
}
