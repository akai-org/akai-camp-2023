import { Heading, Section } from "components/ui";
import styles from "./FAQ.module.scss";
import { FAQDisclosure } from "./FAQDisclosure/FAQDisclosure";

export type Question = {
  question: string;
  answer: string;
};

interface Section {
  title?: string;
  questions: Question[];
}

export const FAQ = () => {
  const sections = [
    {
      title: "",
      questions: [
        {
          question: "Czy uczestnictwo w wydarzeniu jest darmowe?",
          answer:
            "Tak! Nie pobieramy żadnych wpisowych, ani innych tego typu rzeczy.",
        },
        {
          question:
            "Czy mogę uczestniczyć we wszystkich możliwych prelekcjach?",
          answer:
            "Chcemy zapewnić różnorodność naszym uczestnikom, zatem oba panele odbywają się równocześnie. Niestety musicie wybrać co Was najbardziej interesuje.",
        },
        {
          question: "Czy jest obowiązkowe uczestniczyć w prelekcjach?",
          answer:
            "Nie. Czas na konferencji spożytkujcie jak tylko chcecie. Jeśli bardziej interesuje Was networking, to bardzo prosze!",
        },
        {
          question:
            "Czy jest możliwość zadania pytań prelegentom? A na osobności?",
          answer:
            "Tak, po każdym panelu przewidujemy 10-15 minut na dyskusję. Wtedy możecie zadać wszystkie interesujące Was pytania. Natomiast, jeśli chcecie otrzymać odpowiedź na osobności, to podejdźcie do prelegenta po prezentacji. Jednak zastrzegamy, że każdy z nich ma prawo do odmowy.",
        },
        {
          question: "Jak i kiedy mogę się zapisać na wydarzenie?",
          answer:
            "Informacje o zapisach już wkrótce. Śledźcie naszą stroną internetową i portale społecznościowe - tam pojawią się odpowiedzi.",
        },
        {
          question: "Ile osób będzie uczestniczyło w wydarzeniu?",
          answer:
            "100 - 150 osób. Chcemy jak największej liczbie uczestników zapewnić maksymalną wartość wydarzenia.",
        },
        {
          question:
            "Mam inne pytanie, które nie jest zawarte w FAQ-u. Jak mogę się z Wami skontaktować?",
          answer: `Śmiało piszcie do nas na <a href="https://www.facebook.com/akai.pp" target="_blank" class="${styles.links}">Facebooku</a> lub na adres mailowy <a href="mailto:kontakt@akai.org.pl" class="${styles.links}">kontakt@akai.org.pl</a>`,
        },
      ],
    },
  ];

  return (
    <Section id="faq" variant="purple" className={styles.container}>
      <Heading className={styles.heading} withAccent>
        FAQ
      </Heading>

      <div>
        {sections.map(({ title, questions }, index: number) => (
          <div className={styles.questionsContainer} key={title || index}>
            {title && <p className={styles.sectionTitle}>{title}</p>}
            {questions.map((question) => (
              <FAQDisclosure key={question.question} FAQItem={question} />
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
};
