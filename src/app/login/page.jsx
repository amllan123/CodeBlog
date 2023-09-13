"use client"
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import styles from "./login.module.css";
import { useRouter } from "next/navigation";
const Login = () => {

  const {data,status}=useSession()
  const router=useRouter();
  if(status==="authenticated")
  {
    router.push("/")
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>Sign in with Google</div>
        <div className={styles.socialButton} onClick={() => signIn("github")}>Sign in with GitHub</div>

      </div>
    </div>
  );
};

export default Login;
