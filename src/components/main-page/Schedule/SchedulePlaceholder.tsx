import { Section, Heading, Text } from "components/ui";
import styles from "./Schedule.module.scss";
import React from "react";

export function SchedulePlaceholder() {
  return (
    <Section id="schedule">
      <Heading withAccent>Plan wydarzenia</Heading>

      <Text size="m" className={styles.additionalInfo}>
        Plan wydarzenia zostanie ogłoszony wkrótce!
      </Text>
      <Text size="m" className={styles.additionalInfo}>
        Stay tuned!
      </Text>
      <div className={styles.imageContainer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/25.png"
          alt="Stay tuned image"
          className={styles.stayTuned}
        />
      </div>
    </Section>
  );
}
