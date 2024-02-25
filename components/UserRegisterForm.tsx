"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const UserRegisterForm = () => {
  const [userName, setuserName] = useState();
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const [fullName, setFullname] = useState();
  const router = useRouter();

  const handleformSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName,
            email,
            password,
            fullName,
          }),
        }
      );

      const data = await response.json();
      console.log(data);
      if (!data) {
        alert("Registration failed");
      }
      alert("Registration successful");
      router.push("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col mt-10 bg-white space-y-2 p-2 ">
      <div>
        <h3 className="font-bold text-2xl text-center">SignUp</h3>
        <p className="font-medium ">Its free and anyone can login</p>
      </div>
      <div className="flex flex-col">
        <label htmlFor="" className="text-sm font-light text-blue-800">
          Username:
        </label>
        <input
          name="username"
          type="text"
          className="border-[1px] border-gray-300 pl-2 outline-none"
          onChange={(e: any) => setuserName(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="" className="text-sm font-light text-blue-800">
          Email:
        </label>
        <input
          type="email"
          name="email"
          className="border-[1px] border-gray-300 pl-2 outline-none"
          onChange={(e: any) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col ">
        <label htmlFor="" className="text-sm font-light text-blue-800">
          Password:
        </label>
        <input
          type="text"
          name="password"
          className="border-[1px] border-gray-300 pl-2 outline-none"
          autoComplete="on"
          onChange={(e: any) => setpassword(e.target.value)}
        />
      </div>

      <div className="flex flex-col ">
        <label htmlFor="" className="text-sm font-light text-blue-800">
          fullName:
        </label>
        <input
          type="text"
          name="fullName"
          className="border-[1px] border-gray-300 pl-2 outline-none"
          onChange={(e: any) => setFullname(e.target.value)}
        />
      </div>
      <div className="flex justify-center mt-2">
        <button
          onClick={handleformSubmit}
          className="bg-green-400 w-24 text-center p-1"
        >
          SignUp
        </button>
      </div>
    </form>
  );
};

export default UserRegisterForm;
