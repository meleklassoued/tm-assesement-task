/* ------------------------------- dependecies ------------------------------ */
// Packages
import React from 'react'
// ui components
import PageLayout from '../page-components/shared/page-Layout'
import Hero from '../page-components/Hero'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <PageLayout>
      <Hero></Hero>
    </PageLayout>
  )
}
