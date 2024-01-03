import { SetStateAction } from "react";

type actionTypes = "next" | "prev";

interface ICarouselReducer {
  setId: React.Dispatch<SetStateAction<number>>;
  currId: number;
  maxId: number;
  action: actionTypes;
}

interface IScrollNext {
  currId: number;
  maxId: number;
}

const scrollNext = ({ currId, maxId }: IScrollNext): number => {
  return currId < maxId ? currId + 1 : 0;
};

const scrollPrev = ({ currId, maxId }: IScrollNext): number => {
  return currId === 0 ? maxId : currId - 1;
};

export const CarouselReducer = ({
  setId,
  currId,
  maxId,
  action,
}: ICarouselReducer) => {
  switch (action) {
    case "next":
      setId(scrollNext({ currId, maxId }));
      break;

    case "prev":
      setId(scrollPrev({ currId, maxId }));
      break;

    default:
      break;
  }
};
