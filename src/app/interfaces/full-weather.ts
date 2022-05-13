import { CurrentWeather } from "./current-weather";
import { DailyWeather } from "./daily-weather";

export interface FullWeather {
  current: CurrentWeather,
  daily: DailyWeather[]
}
