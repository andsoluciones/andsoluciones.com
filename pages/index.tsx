import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <script async src="/statcounter.js"/>
        <title>{siteTitle}</title>  
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Technologist. Sofware Engineer at <a href="https://www.thoughtworks.com">Thoughtworks</a></p>
        <p>
          Hi, my name is Miguel, I'm an experienced software Engineer and SRE Specialist with Agile mindset.{' '}
          I love helping organizations to deliver software solutions with adaptive design.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Contact</h2>
        <p>
          You can reach me out at mh [at] andsoluciones.com
        </p>
        <p>
          You can also find me at <a href="https://github.com/mhernandezve">GitHub</a>, <a href="https://www.linkedin.com/in/hernandezmiw/">Linkedin</a> and <a href="https://twitter.com/mhernandezve">Twitter</a>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
