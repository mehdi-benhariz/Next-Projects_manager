import Link from "next/link";

const Project = ({name,id}) => {
    return (  
        <Link  href={`projects/${id}`}>
        <div class="bg-white rounded hover:shadow p-2 m-2 border-l-2
         hover:border-blue-600 " >
           <h2>{name} </h2>
           <button onClick={()=> handleDelete(id)}
            class="p-2 hover:bg-red-500 border-2 border-red-500 hover:text-white" >delete</button>
        </div>
        </Link>

    );
}
 
export default Project;

const handleDelete=async(id)=>{
    const res= await fetch('http://localhost:3001/projects/'+id,{method:'DELETE'})
    
    console.log(res)
 }