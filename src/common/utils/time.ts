import { ITask } from "../../types/ITasks";

export const timeToSeconds = (time: string) => {
  const [hour = "0", minutes = "0", sec = "0"] = time.split(":");

  const hourInSeconds = Number(hour) * 3600;
  const minutesInSeconds = Number(minutes) * 60;

  return hourInSeconds + minutesInSeconds + Number(sec);
};

export const secondsToTime = (seconds: number) => {
  const [minTen, minUnit] = String(Math.floor(seconds / 60)).padStart(2, "0");
  const [secTen, secUnit] = String(seconds % 60).padStart(2, "0");

  return { minTen, minUnit, secTen, secUnit };
};

export const regressive = (
  setTime: React.Dispatch<React.SetStateAction<number | undefined>>,
  time: number = 0,
  toFinishTask: () => void
) => {
  setTimeout(() => {
    if (time > 0) {
      setTime(time - 1);
      return regressive(setTime, time - 1, toFinishTask);
    }
    toFinishTask();
  }, 1000);
};
