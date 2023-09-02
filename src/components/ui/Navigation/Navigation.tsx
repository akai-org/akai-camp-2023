import React, { useEffect, useRef, useState } from "react";
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
  const [activeSection, setActiveSection] = useState<string | undefined>(
    undefined,
  );
  const [colorChange, setColorChange] = useState<boolean>(false);

  const checkboxRef = useRef<HTMLInputElement | null>(null);

  const changeBackgroundColor = () => {
    if (window.scrollY >= 80 && !colorChange) {
      setColorChange(true);
    } else if (window.scrollY < 80 && colorChange) {
      setColorChange(false);
    }
  };

  function deselectNavigation() {
    if (checkboxRef?.current) {
      checkboxRef.current.checked = false;
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackgroundColor);

    const sections = document.querySelectorAll(".section");
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        // intersection observer is triggered initially on load with all registered sections
        // - preventing from evaluating the section to highlight for that case
        if (entries.length === sections.length) {
          return;
        }

        entries.forEach((entry) => {
          const { id } = entry.target;

          setActiveSection(id);
        });
      },
      // TODO: it may require to fine-tune the threshold for mobile breakpoints
      // in which some sections are larger, hence threhold needs to be lowered
      {
        threshold: 0.35,
        rootMargin: "-25% 0px -25%",
      },
    );
    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      sections.forEach((section) => sectionObserver.unobserve(section));
    };
  }, []);

  return (
    <nav
      className={classNames(
        styles.container,
        colorChange ? styles["container--dark"] : styles["container--light"],
      )}
    >
      <div className={styles.innerContainer}>
        <a href="#" className={styles.logoWrapper}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            // src="/images/AkaiCamp_logo.svg"
            src="/images/22.png"
            alt="logo"
            className={styles.logo}
          />
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
                    className={classNames(styles.link, {
                      [styles.active]: url === `#${activeSection}`,
                    })}
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
