import Link from "next/link";

export default function NotFound() {
  return (
   <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white mt-20">
     <section className="bg-white pt-20">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-300">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-blue-300 md:text-4xl">
            Something&apos;s missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500">
            Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the
            home page.{" "}
          </p>
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 transition inline-flex bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
   </main>
  );
}
