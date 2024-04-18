function Loading(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="text-base-600 dark:text-base-400"
      className="w-6 h-6"
    >
      <path d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 0 1-1.5 0V6.75a3.75 3.75 0 1 0-7.5 0v3a3 3 0 0 1 3 3v6.75a3 3 0 0 1-3 3H3.75a3 3 0 0 1-3-3v-6.75a3 3 0 0 1 3-3h9v-3c0-2.9 2.35-5.25 5.25-5.25Z" />
    </svg>
  );
}

export default function ProtectedContent({ soon, loading, children }) {
  return (
    <section className="font-sans mb-20 flex-col border p-12 rounded-md border-yellow/30 dark:border-yellow/20 bg-gradient-to-br from-yellow/5 to-yellow/30 dark:from-base-900 dark:to-base-950">
      <h3 className="pb-8 sm:pb-2 text-base text-base-600 dark:text-base-400 font-semibold sm:font-normal">
        Protected Content
      </h3>
      <h2 className="text-5xl pb-4 font-extralight text-balance text-base-black dark:text-base-50 leading-tight">
        Case Study
      </h2>
      <p className="text-2xl font-extralight text-pretty leading-8 pb-12">
        {soon
          ? "In the works, coming soon..."
          : "To view, please enter the password."}
      </p>
      {loading ? (
        <div>
          <Loading className="w-5 h-5" />
        </div>
      ) : null}
      {children ? <div>{children}</div> : null}
    </section>
  );
}
