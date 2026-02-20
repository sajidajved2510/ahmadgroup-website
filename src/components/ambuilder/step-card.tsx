"use client";
import { Card, CardContent } from "@/components/ui/card";

interface StepCardProps {
  step: string;
  title: string;
  className?: string;
  active?: boolean;
}

export default function StepCard({ step, title, className = "", active = false }: StepCardProps) {
  return (
    <Card
      className={`p-2 relative bg-[#ffecec] rounded-2xl shadow-sm border border-pink-100 
        hover:shadow-md transition-shadow duration-300 max-w-sm 
     ${className}`}
      style={{
        borderBottom: "1px solid transparent",
        backgroundImage: active
          ? "linear-gradient(to right, orange, #ff9b42, orange)"
          : "linear-gradient(to right, transparent, transparent)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 100%",
        backgroundSize: active ? "100% 2px" : "0% 2px",
        transition: "background-size 3s ease-in-out",
      }}
    >
      {/* Step Label */}
      <div className="absolute -top-5">
        <div className="relative inline-block">
          <div className="text-[#fb521e] bg-[#ffecec] text-xs font-semibold px-4 py-2 rounded-sm border border-[#fb521e] shadow-sm">
            {step}
          </div>

          {/* Tiny triangle tail */}
          <div
            className="absolute left-5 -bottom-2 w-0 h-0
              border-l-8 border-l-transparent
              border-r-8 border-r-transparent
              border-t-8 border-t-[#fb521e]"
          />
        </div>
      </div>

      {/* Title */}
      <CardContent className="pt-5">
        <h3 className="text-xl font-semibold text-black leading-tight">
          {title}
        </h3>
      </CardContent>
      
    </Card>
  );
}