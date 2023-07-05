import { useState } from "react";
import { meals } from "../mockData";

const Tests = ({ meals }) => {
    const [count, setCount] = useState(0);

    const Decrement = () => {
            setCount(count === 0 ? 2 : (prev) => prev - 1)
    }
    const Increment = () => {
            setCount(count === 2 ? 0 : (prev) => prev + 1)
    }

  return (
    <div>
      <div className="mt-16 grid grid-flow-row-dense grid-cols-1 gap-4 px-6 py-4 md:grid-cols-2 lg:grid-cols-3">
        {meals.map((meal) => {
          return (
            <div key={meal.id} className="">
              <div className="flex items-center justify-between gap-3 rounded-md p-3 shadow-lg drop-shadow-md">
                <div className="flex items-center gap-3">
                  <img
                    src={meal.image}
                    alt=""
                    className="h-[3.5rem] max-w-[5rem] md:h-[5rem] md:w-[7rem] lg:h-[4rem] lg:max-w-[5rem]"
                  />
                  <div>
                    <p className="md:text-xl">{meal.name}</p>
                    <p className="md:text-xl">${meal.price}</p>
                  </div>
                </div>
                <div className="flex max-w-[7rem] items-center justify-between gap-4">
                  <button className="rounded-full border border-[#e91e63] px-8 py-1.5 hover:bg-[#e91e6248] md:px-6 md:text-sm">
                    Add
                  </button>
                </div>
                <div>
                    <Counter meals={meals} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tests;
