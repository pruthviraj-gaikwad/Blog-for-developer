import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Spinner } from "flowbite-react";
import OAuth from "../components/OAuth";
function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("All fields are required");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/sign-in");
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(error.message);
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
                Your username
              </label>
              <input
                type="text"
                placeholder="Enter username"
                id="username"
                className="w-full rounded-lg border border-light-border bg-light-surface px-4 py-3 text-light-text placeholder:text-light-text-muted focus:border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 dark:border-dark-border dark:bg-dark-surface dark:text-dark-text dark:placeholder:text-dark-text-muted"
                onChange={handleChange}
              />
            </div>

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
                "Sign Up"
              )}
            </button>
            <OAuth />
            <p className="text-sm text-light-text-muted dark:text-dark-text-muted">
              Have an account?{" "}
              <Link
                to="/sign-in"
                className="font-medium text-brand-primary hover:underline dark:text-brand-secondary"
              >
                Sign In
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

export default SignUp;
