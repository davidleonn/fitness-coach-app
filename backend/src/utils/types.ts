export type Diet = string;
export type Cardio = number;

export enum Trainning {
  Push = "push",
  Pull = "pull",
  Legs = "legs",
}

export interface DiaryEntry {
  id: number;
  date: string;
  trainning: Trainning;
  diet: Diet;
  cardio: Cardio;
}

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, "diet">;

export type NewDiaryEntry = Omit<DiaryEntry, "id">;
