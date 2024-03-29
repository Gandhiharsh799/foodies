import React from "react";
import styles from "./mealgrid.module.css";
import MealItem from "./meal-item";

export default function MealsGrid({ meals }) {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
            <MealItem {...meal}/>
        </li>
      ))}
    </ul>
  );
}
