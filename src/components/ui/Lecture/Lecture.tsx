import { LecturerInfo } from "components/main-page/types";
import { Text, Icon } from "../";
import styles from "./Lecture.module.scss";
import { company } from "components/ui/Icon";
import parse from "html-react-parser";

type LectureType = {
  lecturers: LecturerInfo[];
  abstract: string;
};

export const Lecture = ({ lecturers, abstract }: LectureType) => {
  return (
    <div className={styles["lecturer"]}>
      <Text className={styles["lecturer__heading"]}>
        {lecturers
          .map((lecturer: LecturerInfo) => lecturer.fullName)
          .join(", ")}
      </Text>
      <Text size="m">{parse(abstract)}</Text>

      {lecturers.map((lecturer) => (
        <div key={lecturer.fullName}>
          <hr className={styles.separator} />
          <div className={styles["lecturer__bio"]}>
            {/* eslint-disable-next-line @next/next/no-img-element */}

            <figure className={styles["lecturer__image"]}>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`images/speakers/${lecturer.avatar}`}
                  onError={(
                    e: React.SyntheticEvent<HTMLImageElement, Event>,
                  ) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "images/person.png";
                  }}
                  alt={lecturer.fullName}
                  className={
                    lecturer?.scaleDown ? styles["lecturer__image--scale"] : ""
                  }
                />
              </div>
              <figcaption>
                <strong>{lecturer.fullName}</strong>
                {lecturer.company && (
                  <div>
                    <Icon icon={company} className={styles["lecturer__icon"]} />
                    <Text>{lecturer.company}</Text>
                  </div>
                )}
              </figcaption>
            </figure>
            <Text className={styles["lecturer__bio__description"]}>
              {lecturer.biography}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
};
