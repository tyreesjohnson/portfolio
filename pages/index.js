import Head from 'next/head'

import Message from './components/message/message'
import NavigationHorizontal from './components/navigation/navigation-hortizontal'

import SectionOne from './components/sections/section-one'
import SectionTwo from './components/sections/section-two'
import SectionThree from './components/sections/section-three'

import Footer from './components/footer/footer'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Tyrees Johnson</title>
        <meta name="description" content="Portfolio of Tyrees Johnson built with Next.js and hosted on AWS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Message/>
      <SectionOne/>
     

     
      </main>
    </div>
  )
}
