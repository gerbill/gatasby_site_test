import * as React from 'react'
import {Link} from "gatsby";

export default function IndexPage (){
  return (
    <main>
      <h1>Welcome to my Gatsby site!</h1>
      <Link to='/about'>About</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>
