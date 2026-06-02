import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800 sm:p-8">
        {/* Logo */}
        <div className="mb-8 text-center">
          <Link
            to="/"
            className="inline-flex flex-wrap items-center justify-center gap-2 text-lg font-semibold text-gray-900 dark:text-white sm:text-2xl"
          >
            <span className="rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-3 py-1 text-white">
              pruthvi's
            </span>
            <span>Blog</span>
          </Link>
        </div>

        {/* Heading */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Create Account
          </h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Join and start sharing your stories.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            to="/sign-in"
            className="font-medium text-purple-600 hover:underline dark:text-purple-400"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
