import React from "react";
import styles from "./Category.module.css";
import { Link } from "react-router-dom";

function CategoryCard({ data }) {

  function trunc(str, n) {
    return str?.length > n ? str.substr(0, n) + "..." : str;
  }
  return (
    <div className={styles.category}>
      <Link to={`/category/${data.category}`}>
        <span>
          <h2>{trunc(data.title, 45)}</h2>
        </span>
        <img src={data.image} alt="image" />
        <p>Shop Now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
