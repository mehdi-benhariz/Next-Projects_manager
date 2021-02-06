import {useRouter} from "next/router"

export default function Product({product}){
   const router = useRouter()
   const {id} = router.query


    return <div>
<h1>a product {id} </h1>
<h2>{product.type} </h2>
    </div>  
}

export async function getServerSideProps({params}) {
    const req = await fetch('http://localhost:3000/products.json')
    const data = await req.json();
    const product = data.find(p=>p.id===params.id)
    console.log({product})
  return {
    props: {product:product}, 
  }
}

// export async function getStaticProps({params}) {
//     const req = await fetch('http://localhost:3000/products.json')
//     const data = await req.json();
//     const product = data.find(p=>p.id===params.id)
//     console.log({product})
//   return {
//     props: {product:product}, 
//   }
// }


// export async function getStaticPaths() {
//     const req = await fetch('http://localhost:3000/products.json')
//     const data = await req.json();

//     const paths = data.map(pro =>{
//         return {params: {id:pro.id}} 
//     })

//     return {
//     paths,
//     fallback: false
//   };
// }