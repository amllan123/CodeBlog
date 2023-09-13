import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
const Card = ({ data, key }) => {

  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src={data.img} alt="" fill className={styles.image} />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{data.createdAt.substring(0, 10)}</span>
          <span className={styles.category}>{data.catSlug}</span>
        </div>
        <Link href={`/posts/${data.id}`}>
          <h1>{data.title}</h1>
        </Link>
         <p className={styles.desc}>{data.desc.substring(0, 100)}...</p> 
        
        <Link href={`/posts/${data.id}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
