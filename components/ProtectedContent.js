import PropTypes from "prop-types";

const Loading = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-base-600 dark:text-base-400 animate-pulse"
    aria-hidden="true"
  >
    <path d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 0 1-1.5 0V6.75a3.75 3.75 0 1 0-7.5 0v3a3 3 0 0 1 3 3v6.75a3 3 0 0 1-3 3H3.75a3 3 0 0 1-3-3v-6.75a3 3 0 0 1 3-3h9v-3c0-2.9 2.35-5.25 5.25-5.25Z" />
  </svg>
);

export default function ProtectedContent({
  soon = false,
  loading = false,
  children = null,
  isLocked = true,
}) {
  if (!isLocked) {
    return <div className="protected-content px-8">{children}</div>;
  }

  return (
    <div className="max-w-screen-lg mx-auto px-8 sm:px-4 md:px-4 lg:px-0">
      <section
        className="font-sans mb-20 flex-col border p-12 rounded-md border-yellow/30 dark:border-yellow/20 bg-gradient-to-br from-yellow/5 to-yellow/30 dark:from-base-900 dark:to-base-950"
        aria-labelledby="protected-title"
      >
        <header>
          <h3 className="pb-8 sm:pb-2 text-base text-base-600 dark:text-base-400 font-normal">
            Protected Content
          </h3>
          <h2
            id="protected-title"
            className="text-5xl pb-4 font-extralight text-balance text-base-black dark:text-base-50 leading-tight"
          >
            Case Study
          </h2>
        </header>
        <p className="text-2xl font-extralight text-pretty leading-8 pb-12">
          {soon
            ? "In the works, coming soon..."
            : "To view, please enter the password."}
        </p>
        {loading && (
          <div
            aria-label="Loading"
            role="status"
            className="flex justify-center py-4"
          >
            <Loading />
          </div>
        )}
        {children}
      </section>
    </div>
  );
}

ProtectedContent.propTypes = {
  soon: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.node,
  isLocked: PropTypes.bool,
};
