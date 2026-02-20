"use client";
import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes } from "react";

interface AnimatedButtonProps {
  href?: string;
  children: ReactNode;
  bgColor: string;
  hoverBgColor: string;
  borderColor: string;
  hoverBorderColor?: string;
  as?: "link" | "button";
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
}

export function AnimatedButton({
  href,
  children,
  bgColor,
  hoverBgColor,
  borderColor,
  hoverBorderColor,
  as = "link",
  type,
  onClick,
}: AnimatedButtonProps) {
  const commonProps = {
    className: `relative inline-flex items-center justify-center pl-5 pr-10 py-3 w-fit group cursor-pointer
      rounded-[5px] overflow-hidden border-1 transition-colors ${borderColor} duration-300 ease-in-out ${hoverBgColor === "var(--primary-color)" ? "hover:border-[var(--primary-color)]" : hoverBgColor === "var(--secondary-color)" ? "hover:border-[var(--secondary-color)]" : "hover:border-black"} `,
    style: {
      backgroundColor: bgColor,
    },
  };

const content = (
  <>
    <svg className={`absolute top-1 right-1 fill-black/15 z-40 ${bgColor === "#000000" && "fill-white/15" } ${hoverBgColor === "#000000" && "fill-white/15" }`} width="23" height="23" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg"><g><path d="M0.113861 0H22.9999V4.28425L4.32671 22.9997L0 18.7154L12.7524 6.08815L0.113861 6.20089V0Z"></path><path d="M23 22.9996V8.56848L16.8516 14.6566V22.9996H23Z"></path></g></svg>
    <span className="absolute inset-0 z-1 block overflow-hidden rounded-[5px]">
      <span
        className="block h-full w-full translate-y-[101%] border-1
                     group-hover:translate-y-0 group-hover:rounded-none
                     transition-all duration-500 ease-[cubic-bezier(0.4,0,0,1)]"
        style={{
          backgroundColor: hoverBgColor,
          borderColor: hoverBorderColor,
        }}
      ></span>
    </span>
    <span className="relative z-2 block overflow-hidden">
      <span
        className={`block transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]
                     group-hover:-translate-y-[110%] underline underline-offset-2 decoration-1 ${bgColor === "#ffffff" || bgColor === "transparent" ? "text-black" : bgColor === "var(--primary-color)" ? "#000000" : "text-white"
          }`}
      >
        {children}
      </span>
      <span
        className={`absolute inset-0 block transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]
                     translate-y-[110%] group-hover:translate-y-0 underline underline-offset-2 decoration-1 ${hoverBgColor === "#ffffff" ? "text-black" : hoverBgColor === "var(--primary-color)" ? "text-black" : "text-white"
          }
                     `}
      >
        {children}
      </span>
    </span>
  </>
);
if (as === "button") {
  return (
    <button type={type} onClick={onClick} {...commonProps}>
      {content}
    </button>
  );
}

// Default: Link
  return (
    <Link href={href || "#"} {...commonProps}>
      {content}
    </Link>
  );
}