import { useRouter } from "next/router";

const Edit = () => {
   const router= useRouter()
   const {pid} = router.query
    


    return ( 
<div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <div class="-mx-3 md:flex mb-6">
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Project Name
          </label>
          <input
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded 
            py-3 px-4 mb-3"
            id="grid-first-name"
            type="text"
            placeholder="name"
            required
            onChange={(e) => setproject({ ...project, name: e.target.value })}
          />
          <p class="text-red text-xs italic">Please fill out this field.</p>
        </div>
        <div class="md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-url"
          >
            github url
          </label>
          <input
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded 
            py-3 px-4"
            id="grid-url"
            required
            type="url"
            placeholder="https://github.com/"
            onChange={(e) => setproject({...project, url: e.target.value })}
          />
        </div>
      </div>
      <div class="-mx-3 md:flex mb-6">
      <div class='my-3 flex flex-wrap -m-1'>
      {project.stacks.map((s, i) => {
          return (
            <span
              key={i}
              class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold
                    text-sm leading-loose cursor-pointer"
              onClick={(e)=>{
                  e.preventDefault()
                setproject( {...project,stacks:project.stacks.splice(i,1)})

            }}
            >
              {s}{" "}
            </span>
          );
        })}
      </div>
       
        <div class="md:w-full px-3">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-password"
          >
            description
          </label>
          <input
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded 
            py-3 px-4 mb-3"
            id="grid-descritpion"
            type="text"
            placeholder="description..."
            required
            onChange={(e) =>
              setproject({ ...project, description: e.target.value })
            }
          />
          <p class="text-grey-dark text-xs italic">
            Make it as long and as crazy as you'd like
          </p>
        </div>
      </div>
      <div class="-mx-3 md:flex mb-2">
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-year"
          >
            year of making
          </label>
          <input
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded 
            py-3 px-4"
            id="grid-year"
            type="date"
            placeholder="year"
            required
            onChange={(e) => setproject({ ...project, year: e.target.value })}
          />
        </div>
        <div class="md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-state"
          >
            Stacks
          </label>
          <div class="relative">
            <select
              class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
              id="grid-state"
              onChange={(e)=>setproject({ ...project, stacks: [...project.stacks,e.target.value] })}
            >
              {techs.map((t) => {
                return (
                  <option key={t}>
                    {t}
                  </option>
                );
              })}
            </select>
            <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg
                class="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 px-3">
          <button
            class="border-2 border-blue-500 rounded-full font-bold text-blue-500 px-8 py-3 transition duration-300 ease-in-out 
             hover:bg-blue-500 hover:text-white mr-6 mt-6"
            onClick={(e) => {
              e.preventDefault();
              console.log({ project });
            }}
          >
            Edit{" "}
          </button>
        </div>
      </div>
    </div>     );
}
 
export default Edit;
export async function getStaticPaths() {
  const res = await fetch("http://localhost:3001/projects");
  const data = await res.json();
  const id = context.params.id;

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

const handleUpdate = async (id, newP) => {
    await fetch("http://localhost:3001/projects/" + id, {
      method: "DELETE",
      body: newP,
    });
  };