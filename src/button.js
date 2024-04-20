import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "py-1.5 px-2 rounded-md focus:ring ring-offset-2 ring-indigo-500 focus:outline-none",
  {
    variants: {
      variant: {
        default: "bg-gray-950 text-gray-50 hover:bg-gray-800 shadow",
        ghost: "bg-transparent text-gray-950 hover:bg-gray-200",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  }
);

export const Button = ({ children, variant, className, ...props }) => {
  const classes = buttonVariants({ variant, className });
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
