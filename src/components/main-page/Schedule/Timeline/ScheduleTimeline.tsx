import { Section, Heading } from "components/ui";
import React from "react";
import styles from "./ScheduleTimeline.module.scss";
import { Timeline } from "../../types";
import { timelineList } from "./config";
import { ScheduleItem } from "components/ui";

export function ScheduleTimeline() {
  return (
    <Section id="schedule" className={styles.container}>
      <Heading withAccent>Plan wydarzenia</Heading>
      <ul className={styles.timeline}>
        {timelineList.map(
          ({ title, hour, location, description, topics }: Timeline) => (
            <li key={title} className={styles.timeline__item}>
              <ScheduleItem
                hour={hour}
                title={title}
                location={location}
                description={description}
                topics={topics}
              />
            </li>
          ),
        )}
      </ul>
    </Section>
  );
}
