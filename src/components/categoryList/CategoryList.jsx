import React from "react";
import styles from "./categorylist.module.css";
import Link from "next/link";
import Image from "next/image";
const url=process.env.NEXTAUTH_URL
const getData = async () => {
  const res = await fetch(`${url}/api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) return Error;

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data.map((i) => (
          <Link
            href={`/blog?cat=${i.slug}`}
            className={`${styles.category} ${styles.style}`} key={i.id}
          >
            {i.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
