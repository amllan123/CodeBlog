"use client";
import React, { useState } from "react";
import styles from "./authlink.module.css";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"
const AuthLink = () => {


  const {data ,status}=useSession()
  const [open, setOpen] = useState(false);
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link} onClick={signOut}>Logout</span>
        </>
      )}

      <div className={styles.burger} onClick={()=>setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="">HomePage</Link>
          <Link href="">about</Link>
          <Link href="">Contact</Link>
          {status === "unauth" ? (
            <Link href="/login" >
              Login
            </Link>
          ) : (
            <>
              <Link href="/write" >
                Write
              </Link>
              <span >Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLink;
