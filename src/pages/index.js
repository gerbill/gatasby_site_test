import * as React from 'react'
import Layout from "../components/layout";
import {StaticImage} from "gatsby-plugin-image";
import Seo from "../components/seo";


export default function IndexPage (){
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt='Legion of Battle Angels'
        src='../images/Legion of Battle Angels.png'
      />
    </Layout>
  )
}

export const Head = () => <Seo title='Home Page' />
