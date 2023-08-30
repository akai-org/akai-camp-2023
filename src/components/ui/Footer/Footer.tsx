import { facebook, github, linkedin, twitter } from "../Icon";
import { Icon } from "components/ui";
import { Text } from "components/ui";
import { Badge } from "components/ui";
import styles from "./Footer.module.scss";

const socialIcons = [
  {
    url: "https://www.facebook.com/akai.pp",
    icon: facebook,
    title: "Facebook",
  },
  {
    url: "https://twitter.com/akai_pp",
    icon: twitter,
    title: "Twitter",
  },
  {
    url: "https://github.com/akai-org",
    icon: github,
    title: "Github",
  },
  {
    url: "https://linkedin.com/company/akai-pp/",
    icon: linkedin,
    title: "Linkedin",
  },
] as const;

export function Footer({}) {
  return (
    <footer className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.row}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/AKAI_logo.svg" alt="logo" className={styles.logo} />
          <div className={styles.socialContainer}>
           {/* <Text className={styles.foundUs} size="l">Znajdź nas na: </Text> */}
           <Badge color="secondary" className={styles.foundUs} size="sm">Znajdź nas na: </Badge>
            <div className={styles.socialIcons}>
              {socialIcons.map(({ url, icon, title }) => (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={url}
                  title={title}
                  className={styles.iconWrapper}
                >
                  <Icon icon={icon} className={styles.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <ul>
            <li >
              Kontakt:{" "}
              <a className={styles.links} href="mailto:kontakt@akai.org.pl">kontakt@akai.org.pl</a>
            </li>
            <li>
            <a href="/statute_2022.pdf" className={`${styles.statuteText} ${styles.links}`}>
              Status
            </a>
            </li>
          </ul>
          <p>&copy; 2023 AKAI</p>
        </div>
      </div>
    </footer>
  );
}
