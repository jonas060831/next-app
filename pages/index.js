import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const creator = process.env.NEXT_PUBLIC_CREATOR_NAME

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>hello {creator} </h1>
    </div>
  )
}


export default Home