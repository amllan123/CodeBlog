import React from "react";
import Pagination from "../pagination/Pagination";
import styles from "./cardlist.module.css";
import Card from "../card/Card";
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

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page,cat);
  const post_per_page = 2;
  const hasNext = post_per_page * (page - 1) + post_per_page < count;
  const hasPrev = post_per_page * (page - 1) > 0;
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts.map((item) => (
          <Card key={item._id} data={item} />
        ))}
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  );
};

export default CardList;
