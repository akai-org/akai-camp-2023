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
      <Text className={styles.text}>
        Z ogromną radością prezentujemy pierwszą edycję konferencji{" "}
        <strong>AKAI Camp</strong> - kolejny rozdział w inspirującej podróży,
        którą rozpoczęliśmy podczas Hackathonu AKAI Code. Tym razem skupiamy się
        wokół tematyki <strong>Rozwoju Kariery</strong>, tworząc wyjątkowe
        wydarzenie dla wszystkich tych, którzy pragną podnieść wartość swojego
        CV oraz poszerzyć horyzonty zawodowe. Impreza odbędzie się na{" "}
        <strong>Politechnice Poznańskiej</strong>.
      </Text>
      <Text className={styles.text}>
        AKAI Camp wychodzi naprzeciw rosnącym oczekiwaniom osób pragnących
        doskonalić swoje umiejętności oraz zbudować solidne podstawy pod
        przyszłą karierę. Nasza konferencja ma być{" "}
        <strong>mostem łączącym uczestników i firmy partnerskie</strong> poprzez
        inspirujące rozmowy, czy możliwość nawiązania cennych kontaktów.
      </Text>
      <Text className={styles.text}>
        Podczas konferencji, uczestnicy będą mieli okazję uczestniczyć w{" "}
        <strong>
          prelekcjach prowadzonych przez doświadczonych ekspertów branżowych
        </strong>
        . Poruszane tematy obejmują różnorodne aspekty kształtowania kariery i
        samorozwoju.
      </Text>

      <Text className={styles.text}>
        AKAI Camp to także doskonała okazja do nawiązania relacji z
        przedstawicielami firm partnerskich. Będziesz miał możliwość zadawania
        pytań, dowiedzenia się więcej o ich oczekiwaniach wobec potencjalnych
        pracowników oraz poznania aktualnych trendów w branży. To wszystko
        sprawia, że AKAI Camp to nie tylko miejsce edukacji, ale także
        inspiracji i <strong>networkingu</strong>!
      </Text>

      <Text className={styles.text}>
        Nie możemy się doczekać, aby Cię przywitać na AKAI Camp i razem
        eksplorować możliwości poszerzania naszych ścieżek zawodowych, czerpiąc
        z bogactwa wiedzy i doświadczenia naszych wyjątkowych prelegentów oraz
        partnerów. Zapisy ruszają wkrótce, więc obserwuj nasze social media i
        stań się częścią tej wyjątkowej przygody!
      </Text>

      <Heading size="xl" as="h3" className={styles.subtitle}>
        Dla kogo?
      </Heading>

      <Text className={styles.text}>
        Jesteś studentem? Licealistą? A może po prostu pragniesz poszerzać
        horyzonty i wzbogacić swoje CV? AKAI Camp jest dedykowany właśnie dla
        Ciebie!
      </Text>

      <Heading size="xl" as="h3" className={styles.subtitle}>
        Panele dyskusyjne
      </Heading>

      <Text className={styles.text}>
        Sercem wydarzenia są dwa równoległe panele dyskusyjne, które będą trwały
        przez cały dzień:
      </Text>

      <div className={styles.categoriesContainer}>
        <Category
          icon={lightBulb}
          title={"Meet my career"}
          text={
            "Ten panel skupi się na kluczowych umiejętnościach niezbędnych do osiągnięcia zawodowych celów. Przedstawione zostaną ważne błędy, których warto unikać, by osiągnąć sukces jako aspirujący profesjonalista. Czeka na Was też wartościowa analiza różnych ścieżek zawodowych, podczas której zaprezentowane zostaną ich zalety i wyzwania. Będziemy omawiać, na co szczególnie zwracać uwagę, aby zdobyć przewagę na dynamicznym rynku pracy."
          }
        />
        <Category
          icon={cog}
          title={"How to self improve"}
          text={
            "Ten panel dostarczy inspirujących wskazówek dotyczących podniesienia atrakcyjności Waszego CV. Eksperci podzielą się informacjami na temat tego, na co rekruterzy kładą nacisk i jak można stać się bardziej wartościowym pracownikiem na rynku. Przedstawimy także skarbnicę praktycznych trików, które pomogą Ci wyróżnić się na tle konkurencji i rozwijać swoje umiejętności zawodowe."
          }
        />
      </div>

      <Heading size="xl" as="h3" className={styles.subtitle}>
        Networking i konkursy
      </Heading>

      <Text className={styles.text}>
        Podczas wydarzenia dostępne będą <strong>stanowiska firm</strong>,
        stanowiące doskonałą okazję do nawiązania kontaktów, rozmów i zdobycia
        wartościowych wskazówek. To miejsce, gdzie z łatwością można podejść,
        porozmawiać i wzbogacić swoją sieć zawodową. Firmy przygotują również
        różnego rodzaju <strong>konkursy</strong>, dodając dodatkową dawkę
        emocji i szansę na atrakcyjne nagrody.
      </Text>
    </Section>
  );
}
