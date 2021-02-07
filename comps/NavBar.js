import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from "next/router";
import { useState } from 'react';

const NavBar = () => {
    const [search, setsearch] = useState("");
    const router = useRouter();

    //getting the search result 
    return (
        <nav class="grid sm:grid-cols-3 sm:h-full px-4 " >
            <div className="logo">
                <Image src="/projects.jpg" width={128} height={77}  />
            <h1 class=" text-xl text-blue-600 font-medium hover:bg-blue-600 hover:text-white
            p-2 rounded transition ease-linear duration-500" >Projects</h1>
            </div>
            <div class="left-0 " >
            <Link href="/" class="inline-block " ><a>Main</a></Link>
            <Link href="/about" class="inline-block " ><a>About</a></Link>
            <Link href="/add" class="inline-block " ><a>Add</a></Link>
            <input placeholder="search for a project..." onChange={(e)=>setsearch(e.target.value)} />
            <button class="border border-blue-500 p-2 rounded pl-1" onClick={()=>  router.push({
            pathname: '/',
            query: { search: search }
        })      } >Find</button>
            </div>

        </nav>
      );
}
 
export default NavBar;
