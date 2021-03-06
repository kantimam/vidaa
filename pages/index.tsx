import type { GetServerSidePropsContext, NextPage } from 'next'
import Head from 'next/head'
import ImagesGrid from '../components/imagesGrid'

const Home: NextPage = ({posts}: any) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container mx-auto">
          <ImagesGrid posts={posts}/>
        </div>
      </main>

      
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // Fetch data from external API
  try {
    const res = await fetch(`https://api.imgflip.com/get_memes`)
    const json = await res.json();
    if(json?.data?.memes){
      
      return { props: { posts: json.data.memes } }  
    }else {
      console.log('no posts found');
      return { props: { posts: [] } }  
    }
  
    // Pass data to the page via props
  } catch (error) {
    console.log(error);
    return { props: { posts: [] } }  
    
  }
  
}


export default Home
