import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "py-1.5 px-3 rounded-md focus:ring ring-offset-2 inline-flex items-center justify-center ring-indigo-500 focus:outline-none",
  {
    variants: {
      variant: {
        default: "bg-gray-950 text-gray-50 hover:bg-gray-800 shadow",
        secondary: "bg-gray-200 text-gray-950 hover:bg-gray-300",
        ghost: "bg-transparent text-gray-950 hover:bg-gray-200",
      },
      size: {
        default: "h-8 text-sm font-semibold",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
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
