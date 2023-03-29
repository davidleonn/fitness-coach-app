export type Training = "Push" | "Pull" | "Legs" | "Rest";
export type Diet = "Great" | "Good" | "Ok" | "Bad";
export type Cardio = number;

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  diet: Diet;
  cardio: Cardio;
}
