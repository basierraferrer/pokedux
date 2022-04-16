import React from "react";
import { IGeneric } from "globals/interfaces/IGeneric";
import styles from "./Generic.module.scss";

const Generic = ({ children }: IGeneric) => {
  return <div className={styles.genericWrapper}>{children}</div>;
};

export default Generic;
