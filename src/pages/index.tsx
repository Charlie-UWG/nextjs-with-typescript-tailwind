import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Practice1 from '../practicies/Practice1'
import Practice2 from '../practicies/Practice2'
import Practice3 from '../practicies/Practice3'
import Practice4 from '../practicies/Practice4'
import HomePage from './testPages/HomePage'

export default function Home() {
  return (
    <>
      <header className=" border-none rounded-lg bg-gray-100 text-center p-3  w-5/12 mx-auto my-4">
        <Link href="./testPages/HomePage">
          <a>HomePage</a>
        </Link>
        <Link href="./testPages/Page1">
          <a>Page1</a>
        </Link>
        <Link href="./testPages/Page2">
          <a>Page2</a>
        </Link>
      </header>
      <HomePage />
      <div>
        <Practice1 />
        <Practice2 />
        <Practice3 />
        <Practice4 />
      </div>
    </>
  )
}
function setState(): [any, any] {
  throw new Error('Function not implemented.')
}
