"use client";
import React, { useReducer, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";


// Define the state shape
interface LoginState {
  email: string;
  password: string;
  errors: {
    email?: string;
    password?: string;
  };
}

// Define action types
type LoginAction =
  | { type: "SET_FIELD"; field: keyof LoginState; value: string }
  | { type: "SET_ERROR"; field: keyof LoginState; error: string }
  | { type: "SUBMIT" };

// Define the reducer
const loginReducer = (state: LoginState, action: LoginAction): LoginState => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_ERROR":
      return {
        ...state,
        errors: { ...state.errors, [action.field]: action.error },
      };
    case "SUBMIT":
      // Handle form submission and validation logic here
      return state;
    default:
      return state;
  }
};

const LoginAccount: React.FC = () => {
  const [state, dispatch] = useReducer(loginReducer, {
    email: "",
    password: "",
    errors: {},
  });
  const router=useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name as keyof LoginState,
      value: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Perform validation and dispatch actions for errors
    dispatch({ type: "SUBMIT" });
    router.push('/')
  };

  return (
    <section className="py-10 lg:py-32 bg-gray-50">
      <div className="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Login
        </h1>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
              <span className="text-red-600 text-lg">*</span>
              <input
                type="email"
                id="email"
                name="email"
                value={state.email}
                onChange={handleChange}
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
                aria-describedby="email-error"
                aria-required="true"
              />
              {state.errors.email && (
                <p id="email-error" className="text-red-600 text-xs mt-1">
                  {state.errors.email}
                </p>
              )}
            </label>
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
              <span className="text-red-600 text-lg">*</span>
              <input
                type="password"
                id="password"
                name="password"
                value={state.password}
                onChange={handleChange}
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
                aria-describedby="password-error"
                aria-required="true"
              />
              {state.errors.password && (
                <p id="password-error" className="text-red-600 text-xs mt-1">
                  {state.errors.password}
                </p>
              )}
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white px-4 py-2 rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Login
          </button>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link
                href="/register"
                className="text-primary font-semibold hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginAccount;
