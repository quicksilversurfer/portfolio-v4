export default function Divider({ constrain = false }) {
  return (
    <div className={constrain ? "max-w-screen-lg mx-auto px-8" : ""}>
      <div className="border-t border-base-100 dark:border-base-900 mt-8 mb-12"></div>
    </div>
  );
}
