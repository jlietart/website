import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Rocket, Zap } from "lucide-react";
import cardData from "@/data/cardData.json";

const iconMap = {
  "🔍": Search,
  "🚀": Rocket,
  "🛠️": Zap,
};

const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full">
      {cardData.cards.map((card) => {
        const IconComponent =
          iconMap[card.title.split(" ")[0] as keyof typeof iconMap];
        return (
          <Card
            key={card.id}
            className="flex flex-col bg-gray-900 border border-gray-700 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg w-full"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-center text-xl sm:text-2xl font-bold flex items-center justify-center gap-2">
                {IconComponent && (
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0" />
                )}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {card.title.split(" ").slice(1).join(" ")}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 flex-grow px-4 sm:px-6 py-4 text-sm sm:text-base text-center">
              {card.content}
            </CardContent>
            <CardFooter className="pt-4 pb-6 px-4 sm:px-6">
              <Button
                variant="secondary"
                className="flex items-center justify-center text-lg sm:text-xl px-6 sm:px-8 py-8 sm:py-8 rounded-full font-bold bg-gray-800 hover:bg-gray-700 transition-all duration-300 w-full shadow-lg hover:shadow-xl border border-blue-400 hover:border-purple-500"
                onClick={() =>
                  document
                    .getElementById(card.id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300 whitespace-nowrap">
                  {card.buttonText}
                </span>
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default Cards;
