import { motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import SlotCounter from "react-slot-counter";
import RightArrow from "../../assets/Icons/arrow-right";
import { ITaskCounterCard } from "../../interfaces/user.interface";

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: ITaskCounterCard[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.08;
  const [cards, setCards] = useState<ITaskCounterCard[]>(items);

  const counterRef = useRef(null);

  const nextCard = useCallback(() => {
    setCards((prevCards: ITaskCounterCard[]) => {
      const newArray = [...prevCards]; // create a copy of the array
      newArray.unshift(newArray.pop()!); // move the last element to the front
      return newArray;
    });
  }, []);

  return (
    <div className="relative h-full">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className={`absolute ${card.cardBackground} bg-primaryBlack h-full w-full rounded-2xl p-8 shadow-xl border border-secondaryBlack flex flex-col justify-between`}
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className={`text-primaryBlack text-8xl font-bold`}>
              <SlotCounter
                ref={counterRef}
                startValue={0}
                value={card.count}
                autoAnimationStart={card.id === cards[0].id}
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-primaryBlack sub-heading text-2xl">
                {card.title}
              </p>
              <button
                onClick={nextCard}
                className="hover:bg-primaryBlack/10 rounded-xl p-2 transition-all duration-200"
              >
                <RightArrow />
              </button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
