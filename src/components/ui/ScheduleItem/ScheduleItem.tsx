import styles from "./ScheduleItem.module.scss";
import classNames from "classnames";
import { Timeline, Topic } from "components/main-page/types";
import { Text, Icon } from "../";
import { chevron } from "components/ui/Icon/index";
import { Disclosure, Transition } from "@headlessui/react";

export function ScheduleItem({
  title,
  location,
  hour,
  description,
  topics,
}: Timeline) {
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
        <Text size="l" className={styles["item__header"]}>
          {title}
        </Text>
      </div>
      <div className={styles["item__row"]}>
        <Text size="s" className={styles["item__header--location"]}>
          {location}
        </Text>
      </div>
      {description && (
        <div
          className={classNames(
            styles["item__row"],
            styles["item__row--description"],
          )}
        >
          <Text size="m">{description}</Text>

          {topics &&
            topics.map((topic: Topic) => (
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
                        {topic.abstract}
                      </Disclosure.Panel>
                    </Transition>
                  </div>
                )}
              </Disclosure>
            ))}
        </div>
      )}
    </section>
  );
}
