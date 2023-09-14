import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";
const url=process.env.NEXTAUTH_URL
const getData = async () => {
  const res = await fetch(`${url}/api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) return Error;

  return res.json();
};

const MenuCategories = async () => {
  const data = await getData();
  return (
    <div className={styles.categoryList}>

      {data.map((i)=>(

           <Link
           key={i.id}
           href={`/blog?cat=${i.slug}`}
        className={`${styles.categoryItem} ${styles.style}`}
      >
        {i.title}
      </Link>
      ))}
   
      
    </div>
  );
};

export default MenuCategories;
