import Image from 'next/image'
import React from 'react'
import logo from "@/assets/logo.svg"
import style from '@/styles/header.module.scss'

function Header() {

  function formatDateToLongString(date: Date) {
      const options: Intl.DateTimeFormatOptions = { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric'
      };

      return date.toLocaleDateString('pt-BR', options);
  }

  const today = new Date();

  return (
    <header className={style.header}>
      <Image
        priority={true}
        src={logo}
        width={150}
        height={36} 
        alt="logo"
      />
      <h1 className={style.welcomeTitle}>Bem-vindo de volta, Marcus</h1>
      <h2 className={style.actualDateTitle}>{formatDateToLongString(today)}</h2>
    </header>
  )
}

export default Header