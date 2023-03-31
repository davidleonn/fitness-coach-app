import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User } from "../../utils/types";

type Props = {
  label: string;
  name: "name" | "email" | "surname" | "password";
  type: string;
};

const Signup = () => {
  const { register, handleSubmit } = useForm<User>();

  const onSubmit: SubmitHandler<User> = (data) => {
    console.log(data);
  };

  const navigate = useNavigate();
  const InputField = ({ label, name, type }: Props) => {
    return (
      <div>
        <label htmlFor={name} className="block text-sm font-bold text-gray-600">
          {label}
        </label>
        <motion.input
          {...register(name)}
          id={name}
          type={type}
          className="mt-1 w-full rounded border border-gray-300 p-2 focus:border-orange-500 focus:outline-none"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        />
      </div>
    );
  };
  return (
    <div className="flex min-h-screen flex-col justify-center bg-gradient-to-br from-secondary-400 to-orange-300">
      <div className="mx-auto w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-8 text-center text-5xl font-bold text-white"
        >
          Create an Account
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center text-2xl font-medium text-white"
        >
          Join our community
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
          <InputField label="Name" name="name" type="text" />
          <InputField label="Surname" name="surname" type="text" />
          <InputField label="Email" name="email" type="email" />
          <InputField label="Password" name="password" type="password" />

          <div>
            <motion.button
              type="submit"
              className="w-full rounded-md bg-orange-500 py-2 px-4 text-sm text-white hover:bg-orange-600 focus:outline-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(event) => {
                event.preventDefault();
                navigate(`/dashboard`);
              }}
            >
              Log In
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Signup;
