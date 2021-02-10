import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from "next/router";
import { useState } from 'react';

const NavBar = () => {
    const [search, setsearch] = useState("");
    const router = useRouter();

    //getting the search result 
    return (
        <nav class="grid sm:grid-cols-3 sm:h-full px-2 " >
            <div className="logo">
                <Image src="/projects.jpg" width={128} height={77}  />
            <h1 class=" text-xl text-blue-600 font-medium hover:bg-blue-600 hover:text-white
            p-2 rounded transition ease-linear duration-500" >Projects</h1>
            </div>
            <div class="left-0 " >
            <Link href="/"><a
             class="inline-block border-b-4 hover:border-blue-500 text-xl font-medium 
             transition ease-linear duration-300 " 
            >Main</a></Link>
            <Link href="/about"><a
            class="inline-block border-b-4 hover:border-blue-500 text-xl font-medium 
            transition ease-linear duration-300 " 
            >About</a></Link>
            <Link href="/create" ><a
            class="inline-block border-b-4 rounded-sm hover:border-blue-500 text-xl font-medium 
            transition ease-linear duration-300 " 
            >Add</a></Link>

            <form class="inline-block pl-1" >
            <input placeholder="search for a project..." onChange={(e)=>{setsearch(e.target.value)}} 
            class="border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 
            focus:border-transparent  shadow appearance-none  rounded w-2/3 mr-2 text-grey-darker"/>
  <button class="bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 
    text-white  rounded font-meduim p-1 text-xl"
    onClick={(e)=>  {
e.preventDefault()
  router.push({
    pathname: '/',
    query: { search: search }
}) 
setsearch('')}
} >
Find  </button>
            </form>

            </div>

        </nav>
      );
}
 
export default NavBar;
