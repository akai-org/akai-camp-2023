import dynamic from "next/dynamic";
import { Heading, Section } from "components/ui";
import styles from "./Registration.module.scss";
import { Button } from "components/ui";

//TODO: Add AKAI domain URL
const registrationFormURL = "https://forms.gle/Lz8AXr4r3pZbCSJQ8";

const HackathonTimer = dynamic(
  () =>
    import("./HackathonTimer").then(
      ({ HackathonTimer }) => HackathonTimer,
    ) as Promise<React.FC>,
  {
    ssr: false,
  },
);

export function Registration() {
  return (
    <Section variant="purple" id="registration" className={styles.section}>
      <Heading className={styles.heading} withAccent>
        AKAI Camp startuje za
      </Heading>
      <HackathonTimer />
      <div className={styles.buttonsContainer}>
        <Button href={registrationFormURL}>Rejestracja</Button>
        {/* Rejestracja rusza 20.09.2023 */}
      </div>
    </Section>
  );
}
