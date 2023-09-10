import styles from "./error.module.scss";

export default function Custom404() {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorHeader}>404 - This page could not be found</h1>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="images/this_is_fine_cat.png"
        className={styles.errorImage}
        alt="Error picture"
      />
    </div>
  );
}
