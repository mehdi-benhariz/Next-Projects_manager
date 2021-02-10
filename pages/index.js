import Head from 'next/head'
import Project  from '../comps/Project'
import {useRouter} from "next/router"
import { useState } from 'react'

export default  function Home({projects}) {
const [data, setdata] = useState([]);

  const router = useRouter()
  const {search}= router.query;
 console.log(search)
  if(search){
  fetch(`http://localhost:3001/projects?q=${search}`)
  .then((res)=>res.json())
  .then((data)=>{
    setdata(data)
  });
  console.log({data})
    return (
      <div>
    {data.map((p)=>{
      return(
<Project key={p.id} project={p} />
      )
      })}
      </div>)
  }

  return (
    <>
   <Head>
     <title>Project List |main </title>
   </Head>
   <div class="pb-12" >
     <h3 class="flex items-center justify-center text-2xl font-bold" >all the projects</h3>
     {projects.map((p)=>{
       return(
         <Project key={p.id} project={p}  />
       )
     })}
   </div>
    </>
  )   
}

export const  getStaticProps=async()=> {
  const base_url = `http://localhost:3001/projects`;

  const res = await fetch(`${base_url}`);
  const data = await res.json()
  return {
    props: {projects:data}, 
  }
}