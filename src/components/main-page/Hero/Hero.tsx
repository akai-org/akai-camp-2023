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
                vol.2023
          </Badge>
          <Heading size="3xl" className={styles.title} withAccent>
            AKAI Camp
          </Heading>
          <div>
          <Text size="2xl" className={styles.date}>
            21 październik
          </Text>

          </div>
          <div >
              <Text className={styles.place}  size="xl">Centrum wykładowe PUT</Text>
          </div>
          <div>
            <Text className={styles.address} size="xl">Kampus Piotrowo</Text>
          </div>
               
        </div>
      </div>
    </Section>
  );
}
