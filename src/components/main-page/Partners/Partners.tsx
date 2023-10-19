import { Badge, Heading, Section, Icon } from "components/ui";
import { questionMark } from "components/ui/Icon";
import styles from "./Partners.module.scss";

type CompanyInfo = {
  name: string;
  url?: string;
  logo: string;
  isHidden?: boolean;
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
        { name: "MUG", logo: "mug.svg", url: "https://www.mug.pl/" },
        {
          name: "HexArcana",
          logo: "hexarcana.png",
          url: "https://hexarcana.pl",
        },
        {
          name: "All for one",
          logo: "all_for_one.png",
          url: "https://www.all-for-one.pl/pl/",
        },
        {
          name: "Wunderman Thompson",
          logo: "wtt.png",
          url: "https://www.wundermanthompson.com/",
        },
        {
          name: "Egnyte",
          logo: "egnyte.png",
          url: "https://www.egnyte.com/",
        },
        {
          name: "Allegro",
          logo: "allegro.png",
          url: "https://allegro.pl/",
        },
      ],
    },
    {
      name: "Partnerzy medialni",
      companies: [
        { name: "Hackyeah", logo: "hackyeah.jpg", url: "https://hackyeah.pl" },
      ],
    },
    {
      name: "Przy współpracy",
      companies: [
        {
          name: "Politechnika Poznańska",
          logo: "politechnika.png",
          url: "https://www.put.poznan.pl/",
        },
        {
          name: "Fundacja na rzecz rozwoju Politechniki Poznańskiej",
          logo: "fundacja_pp.svg",
          url: "http://www.fundacjapp.poznan.pl",
        },
        {
          name: "Wydział Informatyki i Telekomunikacji",
          logo: "wiit.png",
          url: "https://cat.put.poznan.pl",
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
                {companies.map(({ name, logo, url, isHidden }) => {
                  return (
                    <a
                      className={styles.partnerIconLink}
                      target={isHidden ? "" : "_blank"}
                      rel="noopener noreferrer"
                      href={isHidden ? undefined : url}
                      key={name}
                    >
                      {isHidden ? (
                        <Icon
                          icon={questionMark}
                          className={styles.questionMark}
                        />
                      ) : (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            alt={`${name} logo`}
                            src={`images/partners/${logo}`}
                            className={styles.partnerIcon}
                          />
                        </>
                      )}
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
