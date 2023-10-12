import React from "react";
import styles from "./ScheduleItem.module.scss";
import classNames from "classnames";
import { Timeline, Topic } from "components/main-page/types";
import { Text, Icon } from "../";
import { chevron } from "components/ui/Icon/index";
import { Disclosure, Transition } from "@headlessui/react";
import { Heading } from "../";
import { Lecture } from "../Lecture/Lecture";

export function ScheduleItem({
  title,
  location,
  hour,
  description,
  topics,
}: Timeline) {
  const topicsTypes: {
    [key: string]: { title: string; lectures: Topic[] | undefined };
  } = {
    universal: {
      title: "",
      lectures: topics?.filter((lecture) => lecture.panel === "universal"),
    },
    technical: {
      title: "Panel techniczny (CW1)",
      lectures: topics?.filter((lecture) => lecture.panel === "technical"),
    },
    softSkills: {
      title: "Panel umiejętności miękkich (CW2)",
      lectures: topics?.filter((lecture) => lecture.panel === "soft-skills"),
    },
  };

  return (
    <section className={styles.item}>
      <div className={styles["item__row"]}>
        <Text
          size="l"
          className={classNames(
            styles["item__header"],
            styles["item__header--time"],
          )}
        >
          <time>{hour}</time>
        </Text>
        <Heading size="l" as="h3" className={styles["item__header"]}>
          {title}
        </Heading>
      </div>
      <div className={styles["item__row"]}>
        <Text size="s" className={styles["item__header--location"]}>
          {location}
        </Text>
      </div>
      <div
        className={classNames(
          styles["item__row"],
          styles["item__row--description"],
        )}
      >
        {description && <Text size="m">{description}</Text>}
        {topics &&
          Object.values(topicsTypes).map((panel) => (
            <React.Fragment key={panel.title}>
              {panel.lectures!.length > 0 && (
                <>
                  {panel.title && (
                    <Heading
                      size="l"
                      as="h4"
                      className={styles["lecture__header"]}
                    >
                      {panel.title}
                    </Heading>
                  )}
                  {panel.lectures!.map((topic) => (
                    <Disclosure key={topic.title}>
                      {({ open }) => (
                        <div>
                          <Disclosure.Button className={styles.lectureButton}>
                            <Icon
                              icon={chevron}
                              className={classNames(styles.chevron, {
                                [styles.open]: open,
                              })}
                            />
                            {topic.title}
                          </Disclosure.Button>
                          <Transition
                            enter={styles.enter}
                            enterFrom={styles.enterFrom}
                            enterTo={styles.enterTo}
                            leave={styles.leave}
                            leaveFrom={styles.leaveFrom}
                            leaveTo={styles.leaveTo}
                          >
                            <Disclosure.Panel
                              className={classNames(styles.lecturePanel, {
                                [styles.open]: open,
                              })}
                            >
                              <Lecture
                                lecturers={topic.lecturer}
                                abstract={topic.abstract}
                              />
                            </Disclosure.Panel>
                          </Transition>
                        </div>
                      )}
                    </Disclosure>
                  ))}
                </>
              )}
            </React.Fragment>
          ))}
      </div>
    </section>
  );
}
