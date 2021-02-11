import { useRouter } from "next/router";

const Edit = () => {
   const router= useRouter()
   const {pid} = router.query
    


    return ( 
        <div>Edit a project</div>
     );
}
 
export default Edit;

const handleUpdate = async (id, newP) => {
    await fetch("http://localhost:3001/projects/" + id, {
      method: "DELETE",
      body: newP,
    });
  };