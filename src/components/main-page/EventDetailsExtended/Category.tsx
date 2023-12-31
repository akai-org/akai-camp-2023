import { Heading, Icon, Text } from "components/ui";
import styles from "./Category.module.scss";

type Props = {
  icon: string;
  title: string;
  text: string;
};

export function Category({ icon, title, text }: Props) {
  return (
    <div className={styles.container}>
      <Icon icon={icon} className={styles.icon} />
      <Heading size="xl" as="h4" className={styles.title}>
        {title}
      </Heading>
      <Text size="m" className={styles.text}>
        {text}
      </Text>
    </div>
  );
}
