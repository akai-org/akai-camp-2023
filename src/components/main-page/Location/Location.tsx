import { Heading, Section, Icon } from "components/ui";
import dynamic from "next/dynamic";
import { bus, mapMarker } from "components/ui/Icon";
import styles from "./Location.module.scss";

const LocationMap = dynamic(
  () =>
    import("./LocationMap").then(
      ({ LocationMap }) => LocationMap,
    ) as Promise<React.FC>,
  {
    ssr: false,
  },
);

export function Location() {
  return (
    <Section variant="purple" id="location" className={styles.section}>
      <Heading className={styles.sectionHeading} withAccent>
        Lokalizacja
      </Heading>
      <div className={styles.wrapper}>
        <LocationMap />
        <div className={styles.content}>
          <div className={styles.contentWrapper}>
            <div className={styles.iconWrapper}>
              <Icon className={styles.icon} icon={mapMarker} />
            </div>
            <div className={styles.headingWrapper}>
              <p className={styles.bold}>Centrum&nbsp;Wykładowe</p>
              <p className={styles.bold}>Politechniki&nbsp;Poznańskiej</p>
              <p>Kampus Piotrowo,&nbsp;Poznań</p>
            </div>
          </div>
          <div className={styles.textWrapper}>
            <p className={styles.text}>
              <Icon icon={bus} className={styles.busIcon} />
              Przystanek Politechnika: 13
            </p>
            <p className={styles.text}>
              <Icon icon={bus} className={styles.busIcon} />
              Przystanek Kórnicka: 6, 7, 13
            </p>
            <p className={styles.text}>
              <Icon icon={bus} className={styles.busIcon} />
              Przystanek Baraniaka: 6, 7
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
