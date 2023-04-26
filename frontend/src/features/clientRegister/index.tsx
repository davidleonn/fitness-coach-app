import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { motion } from "framer-motion";
import { User } from "../../utils/types";
import FormButton from "@/utils/shared/buttons/FormButton";
import InputField from "@/utils/shared/components/Inputfield";

const ClientRegister = () => {
  const { handleSubmit } = useForm<User>();

  const onSubmit: SubmitHandler<User> = (data) => {
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
          Create a new Client
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-gray text-center text-2xl font-medium"
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
          <InputField label="Age" name="age" type="number" />
          <InputField label="Email" name="email" type="email" />
          <InputField label="Objective" name="objective" type="text" />
          <InputField label="Diet" name="diet" type="text" />
          <InputField label="Routine" name="routine" type="text" />
          <InputField label="Description" name="description" type="text" />

          <FormButton children={"Sign In"} />
        </motion.form>
      </motion.div>
    </div>
  );
};

export default ClientRegister;
