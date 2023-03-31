import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
    <div className="flex min-h-screen flex-col justify-center bg-gradient-to-br from-secondary-400 to-orange-300">
      <div className="mx-auto w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-gray mb-8 text-center text-5xl font-bold"
        >
          Welcome Back
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-gray text-center text-2xl font-medium"
        >
          Log in to your account
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="mx-auto w-full max-w-3xl rounded-lg bg-white p-8 shadow-lg"
      >
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold text-gray-600"
            >
              Email
            </label>
            <motion.input
              {...register("email")}
              id="email"
              type="text"
              className="mt-1 w-full rounded border border-gray-300 p-2 focus:border-orange-500 focus:outline-none"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 2 }}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-bold text-gray-600"
            >
              Password
            </label>
            <motion.input
              {...register("password")}
              id="password"
              type="password"
              className="mt-1 w-full rounded border border-gray-300 p-2 focus:border-orange-500 focus:outline-none"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 2.2 }}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <motion.input
                {...register("remember")}
                id="remember"
                type="checkbox"
                className="h-4 w-4 rounded text-orange-500 focus:border-orange-500 focus:outline-none"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <div>
              <a
                href=""
                className="text-sm font-medium text-orange-500 hover:underline"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div>
            <motion.button
              type="submit"
              className="w-full rounded-md bg-orange-500 py-2 px-4 text-sm text-white hover:bg-orange-600 focus:outline-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Log In
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Login;
