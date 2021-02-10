import Link from "next/link";

const Project = ({project}) => {

    const {name,id,stacks} = project;

    return (  
        <div class="bg-white rounded hover:shadow p-2 m-2 border-l-2
         hover:border-blue-600 " >
        <Link  href={`projects/${id}`}>
           <h2 class="text-xl hover:bg-gray-500 hover:text-white
            p-2 rounded transition ease-linear duration-500" >{name} </h2>
           </Link>

           <div class='my-3 flex flex-wrap -m-1'>
               {stacks.map((s,i)=>{
                   return (
                    <span key={i} class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold
                    text-sm leading-loose cursor-pointer" >{s} </span>
                   )
               })}
           
            </div>
           <button onClick={()=> handleDelete(id)}
            class="p-2 hover:bg-red-500 border-2 border-red-500 hover:text-white
            transition ease-linear duration-500 rounded-md" >delete</button>
        </div>

    );
}
 
export default Project;

const handleDelete=async(id)=>{
    await fetch('http://localhost:3001/projects/'+id,{method:'DELETE'})
    
 }