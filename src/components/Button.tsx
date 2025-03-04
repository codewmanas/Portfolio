import { button } from "motion/react-client";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Button = ( props:{
      variant:'primary' | 'secondary' | 'text';
      iconafter?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
      const { className, children, variant , ...rest } = props;
      return(
            <button className={twMerge("h-11 px-6 rounded-xl  border border-red-orange-500 uppercase inline-flex items-center gap-2", 
            variant === "primary" && "bg-red-orange-500 text-white",
            variant ==='secondary' && '',
            variant === 'text' && 'h-auto px-0 border-transparent',
              className)}{...rest}>
                  <span>
                        {children}
                  </span>
            </button>
      );
};
export default Button;