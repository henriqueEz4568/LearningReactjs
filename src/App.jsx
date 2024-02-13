import { useState } from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'
import styles from './App.module.css';
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'*/
import './global.css'
export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
  <Sidebar />    
<Post
author='fulano'
content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos veniam quisquam provident incidunt enim a itaque dicta corrupti cum consequatur, magnam recusandae iusto quidem, eligendi ducimus modi atque delectus voluptas." />
     
    </div>
  )
}
