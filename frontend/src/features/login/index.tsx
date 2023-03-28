import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Props = {
  email: string;
  password: string;
  remember: boolean;
};

const Login = () => {
  const { register, handleSubmit } = useForm<Props>();

  const onSubmit: SubmitHandler<Props> = (data) => {
    console.log(data);
  };
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-50">
      <div className="mx-auto w-full max-w-md">
        <div className="text-center text-xl font-medium">something</div>
        <div className="mt-2 text-center text-3xl font-bold text-gray-900">
          another text
        </div>
      </div>
      <div className="mx-auto w-full max-w-md border border-gray-300 bg-white p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="" className="block text-sm font-bold text-gray-600">
              Email
            </label>
            <input
              {...register("email")}
              type="text"
              className="mt-1 w-full rounded border border-gray-300 p-2"
            />
          </div>
          <div>
            <label htmlFor="" className="block text-sm font-bold text-gray-600">
              Password
            </label>
            <input
              {...register("password")}
              type="text"
              className="mt-1 w-full rounded border border-gray-300 p-2"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                {...register("remember")}
                type="checkbox"
                className="h-4 w-4 rounded text-blue-300"
              />
              <label htmlFor="" className="ml-2 text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <div>
              <a href="" className="text-sm font-medium text-blue-500">
                Forgot password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 py-2 px-4 text-sm text-white hover:bg-blue-700"
              onClick={(e) => {
                navigate(`/dashboard`);
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
