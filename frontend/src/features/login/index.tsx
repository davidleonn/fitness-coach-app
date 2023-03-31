import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { motion } from "framer-motion";
import FormButton from "@/utils/shared/buttons/FormButton";
import InputField from "@/utils/shared/components/Inputfield";

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
          <InputField label="Email" name="email" type="email" />
          <InputField label="Password" name="password" type="password" />

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
                href="/signup"
                className="text-sm font-medium text-orange-500 hover:underline"
              >
                Register Now!
              </a>
            </div>
          </div>
          <FormButton children={"Log In"} />
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Login;
