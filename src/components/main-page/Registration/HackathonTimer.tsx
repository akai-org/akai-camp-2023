import dayjs from "dayjs";
import classNames from "classnames";
import { Badge, Text } from "components/ui";
import styles from "./HackathonTimer.module.scss";
import { useIntervalUpdate } from "components/hooks/useIntervalTimer";

type ConfigItem = {
  unit: "d" | "h" | "m" | "s";
  text: string;
  modulo: number;
  className?: string;
};

const datesConfig: ConfigItem[] = [
  { unit: "d", text: "dni", modulo: 365 },
  { unit: "h", text: "godz", modulo: 24 },
  { unit: "m", text: "min", modulo: 60 },
  { unit: "s", text: "sec", modulo: 60, className: styles.seconds },
];

const hackathonStartDate = dayjs("2023-10-21T10:30:00Z");

export function HackathonTimer() {
  useIntervalUpdate();

  const now = dayjs();

  return (
    <div className={styles.wrapper}>
      {datesConfig.map(({ unit, text, modulo, className }) => {
        const value = Math.max(hackathonStartDate.diff(now, unit) % modulo, 0);

        return (
          <div key={unit} className={classNames(styles.item, className)}>
            <Badge color="secondary" className={styles.badge}>
              {value}
            </Badge>
            <Text className="registration" size="xl">
              {text}
            </Text>
          </div>
        );
      })}
    </div>
  );
}
