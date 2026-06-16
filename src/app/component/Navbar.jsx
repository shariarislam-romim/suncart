"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";

const Navbar = () => {

   const userData = authClient.useSession()
  // console.log(userData)
  const user= userData.data?.user

   const handleSignOut = async ()=> {
    await authClient.signOut();
   }

  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex ">     
          <h2 className="font-semibold md:font-bold text-xl md:text-3xl bg-linear-to-r from-pink-500 via-purple-500 bg-red-500 text-transparent bg-clip-text">SunCart</h2>
        </div>

        <ul className="flex items-center gap-2 md:gap-5 text-m">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-photos"}>All Products</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex gap-2 md:gap-4">
           {!user && <ul className="flex items-center  text-m gap-3">
            <li>
              <Link href={"/sign-up"}>Register</Link>
            </li>
            <li>
              <Link href={"/sign-in"}>Log In</Link>
            </li>
          </ul>}
          {
            user && <div className="flex gap-4">
              <Avatar size="m">
        <Avatar.Image alt={user?.name} src={user?.image} referrerPolicy="no-referrer"/>
        <Avatar.Fallback>{user?.name}</Avatar.Fallback>
      </Avatar>

      <Button onClick={handleSignOut} size="m" variant="danger">Log Out</Button>
            </div>
          }
        </div>
      </nav>
    </div>
  );
};

export default Navbar;



