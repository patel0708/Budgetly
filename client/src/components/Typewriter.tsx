"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Simplify",
    },
    {
      text: "Your",
    },
    {
      text: "Finances",
    },
    {
      text: "with",
    },
    {
      text: "Budgetly.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col z-50 items-center justify-center w-full h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-sm   sm:text-xl tracking-wider  ">
        Effortless Expense Tracking and AI-Powered Insights
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl cursor-pointer bg-black border dark:border-white border-transparent text-white text-sm">
         Log In
        </button>
        <button className="w-40 h-10 rounded-xl cursor-pointer bg-white font-medium text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
