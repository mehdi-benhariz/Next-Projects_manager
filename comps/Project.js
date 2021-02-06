import Link from "next/link";

const Project = ({name,id}) => {
    return (  
        <Link  href={`projects/${id}`}>
        <div class="bg-white rounded hover:shadow p-2 m-2 border-l-2
         hover:border-blue-600 " >
           <h2>{name} </h2>
        </div>
        </Link>

    );
}
 
export default Project;