const Detail = ({project}) => {
    return (  
        <div>
            <h2>detail page</h2>
            <p>{project.name} </p>
        </div>
    );
}
 
export default Detail;

export async function getStaticProps(context) {
    const res= await fetch('http://localhost:3000/projects.json')
    const data = await res.json();
   
   const id = context.params.id;
   return {
       props:{project:data[id-1]}
   }   
 
 }

export async function getStaticPaths() {
   const res= await fetch('http://localhost:3000/projects.json')
   const data = await res.json();

   const paths = data.map(({id})=>{
    return {
           params: { id:id.toString() } 
      };
   })

   return {
       paths,
       fallback:false
   }

}