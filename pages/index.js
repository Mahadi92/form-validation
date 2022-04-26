import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
    const arrOfObj = Object.keys(e.target)
    const filter = arrOfObj.filter((data) => { !isNaN(data) })
    // console.log(!isNaN(arrOfObj[2]))

    arrOfObj.getAttribute

  }

  return (
    <main>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder='Enter your name' />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="Enter your email" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="password" name="password" placeholder="Enter your password" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </main>
  )
}
