import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../error.module.scss";

const AkaicampRegister = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/statute.pdf");
  }, []);

  return <div className={styles.errorContainer}></div>;
};

export default AkaicampRegister;
