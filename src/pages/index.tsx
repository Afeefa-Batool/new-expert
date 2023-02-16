import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Container from '@/Tags/Container/Container'
import styled from "styled-components"
import { Grid } from '@mui/material'
import Paper from '@mui/material/Paper'
import Header from '@/Components/Adminpannel/Header/Header'

 
 
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const Main=styled.main``

  
  return (
    <>
      <Head>
        {/* <title>Expert || Any Service | Any Time | Any Where</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Main>
     
        <Container>
        <Header />
      </Container>
       </Main>
    </>
  )
}