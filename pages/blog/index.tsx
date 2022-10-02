import Head from 'next/head';
import Link from 'next/link';
import type { NextPage } from 'next';

import Header from '../../components/header';
import Footer from '../../components/footer';
import examplePosts from '../../mocks/blog';

import styles from './blog.module.css';

const BlogOverview: NextPage = () => {
  return <>
    <Head>
      <meta name="description" content="Generated by create next app" />
    </Head>

    <Header />
    <main className={styles.overview}>
      <h1 className={styles.overviewTitle}>Blogposts</h1>
      { examplePosts.map((post, index) => (
          <Link href={post.link} key={`post--${index}`}>
            <a className={styles.postItem}>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.postIntro}>{post.intro}</p>
              <div>
                <button className={styles.postButton}>Read More</button>
              </div>
            </a>
          </Link>
        )) }
    </main>
    <Footer />
  </>;
};

export default BlogOverview;
