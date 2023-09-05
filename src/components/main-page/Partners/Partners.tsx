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
        { name: "MUG", logo: "_blank" },
        { name: "All for one", logo: "_blank" },
      ],
    },
    {
      name: "Partnerzy medialni",
      companies: [{ name: "Radio afera", logo: "_blank" }],
    },
    {
      name: "Przy współpracy",
      companies: [
        { name: "Politechnika Poznańska", logo: "_blank" },
        { name: "WIiT", logo: "_blank" },
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
                    <a className={styles.partnerIconLink} href={url} key={name}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        alt={`${name} logo`}
                        src={`/images/partners/${logo}`}
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
