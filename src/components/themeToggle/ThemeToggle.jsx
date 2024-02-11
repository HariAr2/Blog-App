"use client"

import { useContext } from 'react'
import styles from './themeToggle.module.css'
import { ThemeContext } from '@/context/ThemeContext'

export const ThemeToggle = () => {

  const {toggle,theme} = useContext(ThemeContext)
  console.log(theme)

  return (
    <div className={styles.container} onClick={toggle} style={theme === "dark" ? {right:2,backgroundColor:"white"} : {backgroundColor:"#0f172a"}}>
      <img src="/moon.png" alt="dark" width={15} height={15} />
      <div className={styles.ball} style={theme === "dark" ? {backgroundColor:"#0f172a"} : {right:2,backgroundColor:"white"}}></div>
      <img src="/sun.png" alt="light" width={15} height={15}/>
    </div>
  )
}

export default ThemeToggle

