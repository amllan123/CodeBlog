import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const url=process.env.NEXTAUTH_URL

const getData = async (page,cat) => {
  const res = await fetch(`${url}/api/posts?page=${page}&cat=${cat || ""}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};


const Featured = async () => {

  const { posts, count } = await getData(1," ");
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to <span className={styles.titleLogo}>Code Hive</span> ! Explore
        Coding Blogs and Stay Updated on Cutting-Edge Technologies.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            src="/demo.jpg"
            className={styles.image}
            height={300}
            width={500}
            alt=""
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>{posts[0].title}</h2>
          <p className={styles.postDesc} dangerouslySetInnerHTML={{__html:posts[0]?.desc.substring(0, 100)+'...'}}>
          
          </p>
          <Link href={`/posts/${posts[0].id}`} className={styles.link}>
          Read More
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
