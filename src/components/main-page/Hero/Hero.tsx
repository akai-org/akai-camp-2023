import { Heading, Section, Text, Badge } from "components/ui";
import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <Section variant="purple" id="hero" className={styles.section}>
      <div className={styles.contentWrapper}>
        <div className={styles.logoWrapper}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/AkaiCamp_logo.svg" alt="logo" className={styles.logo} />
        </div>
        <div className={styles.description}>
          <Badge color="secondary" className={styles.badge}>
                Stacjonarnie
          </Badge>
          <Heading size="3xl" className={styles.title} withAccent>
            AKAI Camp
          </Heading>
          <Text size="2xl" className={styles.subtitle}>
            21.10.2023
          </Text>
          <div className={styles.badgesContainer}>
            <div className={styles.badgeWrapper}>
              <div className={styles.badgeDescription}>
                <Text size="xl">Centrum wykładowe PUT</Text>
                <Text size="xl">Kampus Piotrowo</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
