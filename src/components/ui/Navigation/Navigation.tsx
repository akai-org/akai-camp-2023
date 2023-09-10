import React, { useRef } from "react";
import classNames from "classnames";
import { Section } from "components/main-page/types";
import styles from "./Navigation.module.scss";

type SectionConfig = {
  key: string;
  name?: string;
  url: `#${Section}`;
  hidden?: boolean;
};
const sections: readonly SectionConfig[] = [
  { key: "hero", url: "#hero", hidden: true },
  { key: "akaiCode", name: "AKAI Camp ’23", url: "#event-details" },
  { key: "registration", name: "Rejestracja", url: "#registration" },
  { key: "partners", name: "Partnerzy", url: "#partners" },
  { key: "faq", name: "FAQ", url: "#faq" },
] as const;

export function Navigation() {
  const checkboxRef = useRef<HTMLInputElement | null>(null);

  function deselectNavigation() {
    if (checkboxRef?.current) {
      checkboxRef.current.checked = false;
    }
  }

  return (
    <nav className={classNames(styles.container)}>
      <div className={styles.innerContainer}>
        <a href="#" className={styles.logoWrapper}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/Akai_logo.svg" alt="logo" className={styles.logo} />
        </a>
        <input
          ref={checkboxRef}
          id="nav-toggle"
          type="checkbox"
          className={styles.hamburger}
        />
        <div className={styles.linksWrapper}>
          <ul className={styles.links}>
            {sections
              .filter(({ hidden }) => !hidden)
              .map(({ name, url }) => (
                <li key={url}>
                  <a
                    href={url}
                    className={styles.link}
                    onClick={deselectNavigation}
                  >
                    {name}
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <label htmlFor="nav-toggle" className={styles.hamburgerTrigger}>
          <span></span>
        </label>
      </div>
    </nav>
  );
}
