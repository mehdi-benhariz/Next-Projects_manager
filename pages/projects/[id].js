import {useRouter} from "next/router"

const Detail = ({ project }) => {
  const { name, id, stacks, description, year, url } = project;
   console.log({id})
   const router = useRouter()

   return (
    <div class="bg-white rounded hover:shadow p-2 m-2 border-l-2 ">
      <h2
        class="text-2xl font-semibold hover:bg-gray-500 hover:text-white
           p-2 rounded transition ease-linear duration-500 border-b-2 broder-gray"
      >
        {name}{" "}
      </h2>

      <div class="my-3 flex flex-wrap -m-1">
        {stacks.map((s, i) => {
          return (
            <span
              key={i}
              class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold
                   text-sm leading-loose cursor-pointer"
            >
              {s}{" "}
            </span>
          );
        })}
      </div>
      <p class="text-lg font-normal">
        made at : <span class="text-xl text-gray-600 font-thin">{year}</span>{" "}
      </p>
      <h4 class="text-xl font-medium hover :border-b-2 hover:border-blue-400 transition ease-linear duration-300">
        description:
      </h4>
      <p class="text-lg text-gray-700 font-normal">{description}</p>
      <div class="border-b-2 border-gray-300">
        url :<span class="text-lg font-normal">{url}</span>
      </div>
      <button
        onClick={(e) => {
            e.preventDefault()
            handleDelete(id)}
        }
        class="p-2 hover:bg-red-500 border-2 border-red-500 hover:text-white
           transition ease-linear duration-500 rounded-md mr-2 w-20"
      >
        Delete
      </button>
      <button
        onClick={(e) =>{
              e.preventDefault()
               router.push({
                   pahtname:"/edit/",
                   query:{id:parseInt( id)}
               })
        }}
        class="p-2 hover:bg-yellow-500 border-2 border-yellow-500 hover:text-white
           transition ease-linear duration-500 rounded-md w-20 "
      >
        Edit
      </button>
    </div>
  );
};

export default Detail;

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch("http://localhost:3001/projects/" + id);
  const data = await res.json();

  return {
    props: { project: data },
  };
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3001/projects");
  const data = await res.json();

  const paths = data.map(({ id }) => {
    return {
      params: { id: id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
const handleDelete = async (id) => {
  await fetch("http://localhost:3001/projects/" + id, { method: "DELETE" });
};


