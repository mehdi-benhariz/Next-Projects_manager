import { useState } from "react";
// import {hash} from "bcrypt";

const SignIn = () => {
  const [user, setuser] = useState({ username: "", password: "" });

  // hash(myPlaintextPassword, saltRounds, function (err, hash) {
  //   // Store hash in your password DB.
  // });
  return (
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div class="mb-4">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="username"
        >
          Username
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="username"
          type="text"
          placeholder="Username"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          id="password"
          type="password"
          placeholder="*************"
        />
        <p class="text-red text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue hover:bg-blue-200 text-blue-500 font-bold py-2 px-4 rounded"
          type="button"
          onClick={(e)=>{
            e.preventDefault()

          }}
        >
          Sign In
        </button>
        <a
          class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
    </div>
  );
};

export default SignIn;

const checkUser=async(user,pwd)=>{
  const res =await fetch(`http://localhost:3001/users?username=${user}`)
  const data  =await res.json()
  if(data =={})
    return "doesn't exist";
  if(pwd != data[0].password)
    return "password incorrect!";
  return true;
}