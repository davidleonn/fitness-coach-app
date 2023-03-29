export type Trainning = "Push" | "Pull" | "Legs" | "Rest";
export type Diet = "Great" | "Good" | "Ok" | "Bad";
export type Cardio = number;

export interface DiaryEntry {
  id: number;
  date: string;
  trainning: Trainning;
  diet: Diet;
  cardio: Cardio;
}

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, "diet">;

export type NewDiaryEntry = Omit<DiaryEntry, "id">;
