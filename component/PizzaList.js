import { useState } from "react";
import styles from "../styles/PizzaList.module.css";
import Image from "next/image";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}></h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
        assumenda corrupti voluptatibus sunt impedit reiciendis tempore
        doloribus in laborum quis eaque voluptate tempora quos veniam voluptas
        error laudantium hic magni.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
