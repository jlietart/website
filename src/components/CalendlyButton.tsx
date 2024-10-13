"use client";
import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";

interface CalendlyButtonProps {
  url: string;
}

export function CalendlyButton({ url }: CalendlyButtonProps) {
  const handleClick = () => {
    window.Calendly.initPopupWidget({
      url: url,
    });
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <Button
        variant="secondary"
        onClick={() => handleClick()}
        className="flex items-center justify-center gap-4 text-lg sm:text-xl px-6 sm:px-8 py-8 sm:py-8 rounded-full font-bold bg-gray-800 hover:bg-gray-700 transition-all duration-300 w-full shadow-lg hover:shadow-xl border border-blue-400 hover:border-purple-500"
      >
        <Video className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400 group-hover:text-purple-500 transition-colors duration-300 flex-shrink-0" />
        <span className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300 whitespace-nowrap">
          Let's talk !
        </span>
      </Button>
    </div>
  );
}
