import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Practice1 from '../practicies/Practice1'
import Practice2 from '../practicies/Practice2'
import Practice3 from '../practicies/Practice3'
import Practice4 from '../practicies/Practice4'

export default function Home() {
  return (
    <div>
      <Practice1 />
      <Practice2 />
      <Practice3 />
      <Practice4 />
    </div>
  )
}
function setState(): [any, any] {
  throw new Error('Function not implemented.')
}
