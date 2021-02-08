import Head from 'next/head'
import Project  from '../comps/Project'
import {useRouter} from "next/router"
import { useState } from 'react'

export default  function Home({projects}) {
const [data, setdata] = useState([]);

  const router = useRouter()
  const {search}= router.query;
   if(search){
  fetch(`http://localhost:3001/projects?q=${search}`)
  .then((res)=>res.json())
  .then((data)=>{
    setdata(data)
  });
    return (
      <div>
    {data.map(({id,name})=>{
      return(
<Project key={id} id={id} name={name} />
      )
      })}
      </div>)
  }

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
  const base_url = `http://localhost:3001/projects?q=`;

  const res = await fetch(`${base_url}`);
  const data = await res.json()
  return {
    props: {projects:data}, 
  }
}