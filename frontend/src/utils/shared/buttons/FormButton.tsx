import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type Props = {
  type?: "submit" | "button";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const FormButton = ({
  type = "submit",
  className = "",
  children,
  onClick,
}: Props) => {
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (onClick) onClick();
    else navigate(`/dashboard`);
  };
  return (
    <div>
      <motion.button
        type={type}
        className={`w-full rounded-md bg-orange-500 py-2 px-4 text-sm text-white hover:bg-orange-600 focus:outline-none ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
      >
        {children}
      </motion.button>
    </div>
  );
};

export default FormButton;
