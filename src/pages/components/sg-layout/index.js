// Libs
import React from 'react'

import './_style.scss'

// Components (from atomic to composite)
// import Menu from './sg-menu'

const Layout = ({ children, className = '' }) => (
  <div className={`sg-layout ${className}`}>{children}</div>
)

const Aside = ({ children, className = '' }) => (
  <aside className={`sg-layout__aside ${className}`}>{children}</aside>
)

const Header = ({ children, className = '' }) => (
  <header className={`sg-layout__header ${className}`}>
    <div className="sg-layout__header__content">{children}</div>
  </header>
)

const Main = ({ children, className = '' }) => (
  <main className={`sg-layout__main ${className}`}>{children}</main>
)

const Section = ({ children, className = '' }) => (
  <section className={`sg-layout__section ${className}`}>{children}</section>
)

const Heading = ({ children, className = '' }) => (
  <h2 className={`sg-layout__heading ${className}`}>{children}</h2>
)

const Paragraph = ({ children, className = '' }) => (
  <p className={`sg-layout__paragraph ${className}`}>{children}</p>
)

const Subheading = ({ children, className = '' }) => (
  <h3 className={`sg-layout__subheading ${className}`}>{children}</h3>
)

export {
  Layout as default,
  Aside,
  Header,
  Main,
  Section,
  Heading,
  Subheading,
  Paragraph,
}