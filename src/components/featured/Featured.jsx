import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";



const Featured = () => {
  const logo = "<span className={styles.titleLogo}>CodeBlog</span>";
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
          <h2 className={styles.postTitle}>Next.js vs React.js</h2>
          <p className={styles.postDesc}>
            In the world of web development, React.js has been a dominant player
            ...
          </p>
          <button className={styles.postButton}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
