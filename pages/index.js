import Head from 'next/head'
import Project  from '../comps/Project'
import {useRouter} from "next/router"

export default function Home({projects}) {
  const router = useRouter()
   export const {search}= router.query;
   
  return (
    <>
   <Head>
     <title>Project List |main </title>
   </Head>
   <div>
     <h3>all the projects</h3>
     {projects.map(({id,name})=>{
       return(
         <Project key={id} name={name} id={id}  />
       )
     })}
   </div>
    </>
  )   
}

export const  getStaticProps=async()=> {
  import {search } from './search'
  const base_url = `http://localhost:3001/projects?q=`;

  if(search)
     base_url+search;

  const res = await fetch(`${base_url}`);
  const data = await res.json()
  return {
    props: {projects:data}, 
  }
}