import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
         setTimeout(()=>{
         router.push('/')
         },2000)
    }, [])
    return ( 
<div class="flex items-center justify-center " >
            <div>
            <h1 class="text-3xl ">wooops ... :( </h1>
            <h2 class="block ">this page cannot be found</h2>
            <p class="block ">go back to <Link href="/" class="text-lg" >Home page</Link> </p>
            </div>

        </div>
     );
}
 
export default NotFound;