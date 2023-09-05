import style from "./Clock.module.scss";
import { IPropsTimer } from "../../../types/ITasks";
import { secondsToTime } from "../../../common/utils/time";

const Clock = ({ time = 0 }: IPropsTimer) => {
  const { minTen, minUnit, secTen, secUnit } = secondsToTime(time);

  return (
    <>
      <span className={style.clockNumber}>{minTen}</span>
      <span className={style.clockNumber}>{minUnit}</span>
      <span className={style.clockSplit}>:</span>
      <span className={style.clockNumber}>{secTen}</span>
      <span className={style.clockNumber}>{secUnit}</span>
    </>
  );
};

export default Clock;
