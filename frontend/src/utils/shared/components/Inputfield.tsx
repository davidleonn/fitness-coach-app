import { User } from "@/utils/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

type Props = {
  label: string;
  name: string;
  type: string;
};

const InputField = ({ label, name, type }: Props) => {
  const { register } = useForm();
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
export default InputField;
