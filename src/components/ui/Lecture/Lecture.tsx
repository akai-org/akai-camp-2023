import { LecturerInfo } from "components/main-page/types";
import { Text } from "../Text/Text";
import styles from "./Lecture.module.scss";

type LectureType = {
  lecturers: LecturerInfo[];
  abstract: string;
};

export const Lecture = ({ lecturers, abstract }: LectureType) => {
  return (
    <div>
      <Text className={styles["lecturer__heading"]}>
        {lecturers
          .map(
            (lecturer: LecturerInfo) =>
              lecturer.fullName +
              (lecturer?.company ? " (" + lecturer.company + ")" : ""),
          )
          .join(", ")}
      </Text>
      <Text>{abstract}</Text>

      {lecturers.map((lecturer) => (
        <div key={lecturer.fullName}>
          <hr className={styles.separator} />
          <div className={styles["lecturer__bio"]}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className={styles["lecturer__image"]}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`images/speakers/${lecturer.avatar}`}
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "images/person.png";
                }}
                alt={lecturer.fullName}
              />
            </div>
            <Text className={styles["lecturer__bio__description"]}>
              <strong>{lecturer.fullName}</strong> - {lecturer.biography}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
};
