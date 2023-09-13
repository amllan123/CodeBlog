
import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthLink from '../authLink/AuthLink'
import Themetoggler from '../themeToggler/Themetoggler'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" width={24} height={24}/>
        <Image src="/instagram.png" width={24} height={24}/>
      </div>
      <div className={styles.logo}>CodeBlog</div>
      <div className={styles.links}>
        <Themetoggler/>
        <Link className={styles.link} href="/">Home</Link>
        <AuthLink/>
      </div>
    </div>
    
    
        )
}

export default Navbar