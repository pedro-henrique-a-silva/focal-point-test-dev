import Image from 'next/image'
import React from 'react'
import logo from "@/assets/logo.svg"
import style from '@/styles/header.module.scss'

function Header() {
  return (
    <header className={style.header}>
      <Image 
        src={logo}
        width={150}
        height={36} 
        alt="logo"
      />
      <h1 className={style.welcomeTitle}>Bem-vindo de volta, Marcus</h1>
      <h2 className={style.actualDateTitle}>Segunda, 01 de dezembro de 2025</h2>
    </header>
  )
}

export default Header