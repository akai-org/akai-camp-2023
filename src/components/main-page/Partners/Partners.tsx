import { Badge, Heading, Section } from "components/ui";
import styles from "./Partners.module.scss";

type CompanyInfo = {
  name: string;
  url?: string;
  logo: string;
};

interface Partners {
  name: string;
  companies: CompanyInfo[];
}

const Partners = () => {
  const partners = [
    {
      name: "Wspierają nas",
      companies: [
        // {
        //   name: "Wunderman Thompson",
        //   logo: "wtt.png",
        //   url: "https://www.wundermanthompson.com/",
        // },
        { name: "MUG", logo: "mug.svg", url: "https://www.mug.pl/" },
        {
          name: "All for one",
          logo: "all_for_one.png",
          url: "https://www.all-for-one.pl/pl/",
        },
        { name: "Allegro", logo: "allegro.png", url: "https://allegro.pl/" },
        { name: "Egnyte", logo: "egnyte.png", url: "https://www.egnyte.com/" },
        {
          name: "HexArcana",
          logo: "hexarcana.png",
          url: "https://hexarcana.pl",
        },
      ],
    },
    // {
    //   name: "Partnerzy medialni",
    //   companies: [{ name: "Radio afera", logo: "_blank" }],
    // },
    {
      name: "Przy współpracy",
      companies: [
        {
          name: "Politechnika Poznańska",
          logo: "politechnika.png",
          url: "https://www.put.poznan.pl/",
        },
      ],
    },
  ] as Partners[];

  return (
    <Section variant="white" id="partners" className={styles.section}>
      <Heading className={styles.heading} withAccent>
        Partnerzy
      </Heading>
      <div className={styles.container}>
        {partners.map(({ name, companies }) => {
          return (
            <div className={styles.container} key={name}>
              <Badge color="secondary" className={styles.badge}>
                {name}
              </Badge>
              <div className={styles.partnersIconsWrapper}>
                {companies.map(({ name, logo, url }) => {
                  return (
                    <a
                      className={styles.partnerIconLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={url}
                      key={name}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        alt={`${name} logo`}
                        src={`images/partners/${logo}`}
                        className={styles.partnerIcon}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export { Partners };
