import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Spinner } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("All fields are required"));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl md:grid md:grid-cols-2 md:gap-16 items-center">
        {/* Left Section */}
        <div className="mb-10 md:mb-0">
          <Link to="/" className="inline-flex items-center text-3xl font-bold">
            <span className="rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-3 py-1 text-white">
              pruthvi's
            </span>
            <span className="ml-1 text-light-text dark:text-dark-text">
              Blog
            </span>
          </Link>

          <p className="mt-4 max-w-md text-light-text-muted dark:text-dark-text-muted">
            This is a demo project. You can sign up with your email and password
            to start creating and sharing blogs.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="mb-2 block text-sm font-medium text-light-text dark:text-dark-text">
                Your email
              </label>
              <input
                type="email"
                id="email"
                placeholder="name@example.com"
                className="w-full rounded-lg border border-light-border bg-light-surface px-4 py-3 text-light-text placeholder:text-light-text-muted focus:border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 dark:border-dark-border dark:bg-dark-surface dark:text-dark-text dark:placeholder:text-dark-text-muted"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-light-text dark:text-dark-text">
                Your password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                className="w-full rounded-lg border border-light-border bg-light-surface px-4 py-3 text-light-text placeholder:text-light-text-muted focus:border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 dark:border-dark-border dark:bg-dark-surface dark:text-dark-text dark:placeholder:text-dark-text-muted"
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3 font-medium text-white transition hover:opacity-90"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </button>
            <OAuth />
            <p className="text-sm text-light-text-muted dark:text-dark-text-muted">
              Don't have an account?{" "}
              <Link
                to="/sign-up"
                className="font-medium text-brand-primary hover:underline dark:text-brand-secondary"
              >
                Sign Up
              </Link>
            </p>
          </form>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignIn;
