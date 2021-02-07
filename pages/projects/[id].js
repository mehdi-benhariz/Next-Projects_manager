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
 
   const id = context.params.id;
   const res= await fetch('http://localhost:3001/projects/'+id)
   const data = await res.json();
  
   return {
       props:{project:data}
   }   
 
 }

export async function getStaticPaths() {
   const res= await fetch('http://localhost:3001/projects')
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