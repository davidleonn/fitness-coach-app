import { NewDiaryEntry, Trainning } from "../utils/types";

const isString = (string: string): boolean => {
  return typeof string === "string";
};

const isNumber = (number: number): boolean => {
  return typeof number === "number";
};

const parseDiet = (dietFromRequest: any): string => {
  if (!isString(dietFromRequest)) {
    throw new Error("Incorrect or missing diet");
  }
  return dietFromRequest;
};

const parseCardio = (cardioFromRequest: any): number => {
  if (!isNumber(cardioFromRequest)) {
    throw new Error("Incorrect or missing cardio");
  }
  return cardioFromRequest;
};

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error("Incorrect or missing date");
  }
  return dateFromRequest;
};
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseTrainning = (trainningFromRequest: any): Trainning => {
  if (!isString(trainningFromRequest) || !isTrainning(trainningFromRequest)) {
    throw new Error("Incorrect or missing trainning");
  }
  return trainningFromRequest;
};
const isTrainning = (param: any): boolean => {
  return Object.values(Trainning).includes(param);
};

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    diet: parseDiet(object.diet),
    date: parseDate(object.date),
    trainning: parseTrainning(object.trainning),
    cardio: parseCardio(object.cardio),
  };
  return newEntry;
};

export default toNewDiaryEntry;
