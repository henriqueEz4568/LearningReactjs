import { useState } from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'*/

export function App() {
  return (
    <div>
      <Header />
<Post
author='fulano'
content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos veniam quisquam provident incidunt enim a itaque dicta corrupti cum consequatur, magnam recusandae iusto quidem, eligendi ducimus modi atque delectus voluptas." />
     
    </div>
  )
}
