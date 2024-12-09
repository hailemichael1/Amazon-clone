import React from 'react'
import logo from "../../assets/amazon_logo.png"
import styles from "./Footer.module.css"
function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <img src={logo} width="100"/>
        <p>© 1996-2024, Amazon.com, Inc. or its affiliates
        </p>
    </footer>
    </div>
  )
}

export default Footer
