import { Heading, Section, Text } from "components/ui";
import { cog, lightBulb } from "components/ui/Icon";
import { Category } from "./Category";
import styles from "./EventDetailsExtended.module.scss";

export function EventDetailsExtended() {
  return (
    <Section id="event-details" className={styles.section}>
      <Heading className={styles.heading} withAccent>
        AKAI Camp 2023
      </Heading>
      <Text size="m" className={styles.text}>
        Pierwsza edycja konferencji <strong>AKAI&nbsp;Camp</strong>{" "}
        organizowanej przez AKAI&nbsp;- Akademickie&nbsp;Koło
        Aplikacji&nbsp;Internetowych - odbędzie się na{" "}
        <strong>Politechnice Poznańskiej</strong>. Ta inicjatywa jest kolejnym
        rozdziałem inspirującej podróży, którą rozpoczęliśmy podczas Hackathonu
        AKAI Code. Tym razem skupiamy się wokół tematyki{" "}
        <strong>Rozwoju Kariery</strong>.
      </Text>

      {
        //TODO: Czy tekst nie powinien być kierowany do jednej osoby?
      }

      <Text size="m" className={styles.text}>
        AKAI Camp wychodzi naprzeciw rosnącym oczekiwaniom osób, które chcą
        doskonalić swoje umiejętności oraz zbudować solidne podstawy pod
        przyszłą karierę w branży IT. Podczas konferencji będziesz miał okazję
        wziąć udział w{" "}
        <strong>
          prelekcjach prowadzonych przez doświadczonych ekspertów branżowych
        </strong>
        . Jest to również dobra szansa na zdobycie wiedzy o aktualnych trendach
        w branży, czy też do <strong>nawiązywania kontaktów</strong> z
        przedstawicielami firm partnerskich. To wszystko sprawia, że AKAI Camp
        to nie tylko miejsce edukacji, ale także inspiracji i{" "}
        <strong>networkingu</strong>!
      </Text>

      <Heading size="xl" as="h3" className={styles.subtitle}>
        Dla kogo?
      </Heading>

      <Text size="m" className={styles.text}>
        Jesteś studentem? Licealistą? A może po prostu pragniesz poszerzać
        horyzonty i wzbogacić swoje CV? AKAI Camp jest dedykowany właśnie dla
        Ciebie!
      </Text>

      <Heading size="xl" as="h3" className={styles.subtitle}>
        Panele dyskusyjne
      </Heading>

      <Text size="m" className={styles.text}>
        Sercem wydarzenia są dwa równoległe panele dyskusyjne, które będą trwały
        przez cały dzień:
      </Text>

      <div className={styles.categoriesContainer}>
        <Category
          icon={cog}
          title={"Meet my career"}
          text={
            "Tutaj dowiesz się o kluczowych umiejętnościach niezbędnych do osiągnięcia zawodowych celów, a także o błędach, których warto unikać. Ten panel dostarczy wartościową analizę różnych ścieżek zawodowych, podczas której zaprezentowane zostaną ich zalety i wyzwania."
          }
        />
        <Category
          icon={lightBulb}
          title={"How to self improve"}
          text={
            "W tym segmencie omawiane będą wskazówki dotyczące podniesiania atrakcyjności CV oraz informacje na temat tego, na co rekruterzy kładą nacisk podczas rekrutacji. To właśnie tutaj prelegenci przedstawią skarbnicę praktycznych trików, które pomogą wyróżnić się na tle konkurencji i rozwinąć umiejętności zawodowe."
          }
        />
      </div>
    </Section>
  );
}
