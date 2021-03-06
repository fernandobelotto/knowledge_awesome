import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import book from '../../static/img/book.png'
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{ height: '600px' }}>
      <div className="container">
        <h1 className="hero__title" >{siteConfig.title}</h1>
        <p className="hero__subtitle" >{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/blogs">
            Explore Now
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A collection of awesome things regarding the Node ecosystem.">
      <main>
        <HomepageHeader />
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
