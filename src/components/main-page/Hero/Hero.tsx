import { Heading, Section, Text, Badge } from "components/ui";
import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <Section variant="purple" id="hero" className={styles.section}>
      <div className={styles.contentWrapper}>
        <div className={styles.logoWrapper}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="images/AkaiCamp_logo.svg"
            alt="AKAI Camp Logo"
            className={styles.logo}
          />
        </div>
        <div className={styles.description}>
          <Heading size="3xl" as="h1" className={styles.title} withAccent>
            AKAI Camp
          </Heading>
          <Badge color="secondary" className={styles.badge}>
            vol.2023
          </Badge>
          <div>
            <Text size="2xl" className={styles.date}>
              21 października
            </Text>
          </div>
          <div>
            <Text className={styles.place} size="xl">
              Centrum Wykładowe
            </Text>
          </div>
          <div>
            <Text className={styles.address} size="xl">
              Politechniki Poznańskiej
            </Text>
          </div>
        </div>
      </div>
    </Section>
  );
}
