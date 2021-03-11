import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Practice1 from '../practicies/Practice1'
import Practice2 from '../practicies/Practice2'

export default function Home() {
  return (
    <div>
      {/* <h1>Hellow!</h1> */}
      <Practice1 />
      <Practice2 />
    </div>
  )
}
function setState(): [any, any] {
  throw new Error('Function not implemented.')
}
