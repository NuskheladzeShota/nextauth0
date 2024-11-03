import Link from "next/link";

export function ReturnBackButton({ destination }) {
  return (
    <Link
      className="flex items-center justify-center bg-red-700 text-white text-xl p-3 rounded-lg shadow-md hover:bg-red-600 transition duration-200"
      href={`/${destination}`}
    >
      <button>Go Back</button>
    </Link>
  );
}

export default function NotFound(props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-100 dark:bg-neutral-900 p-5">
      <h1 className="text-black dark:text-gray-200 font-sans font-bold text-3xl mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-black dark:text-gray-200 font-sans font-normal text-xl mb-6">
        The page you are looking for does not exist.
      </p>
      <ReturnBackButton destination={props.page} />
    </div>
  );
}