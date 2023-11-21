import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import login_div from "public/login-div.png";
import { Navbar } from "@/components";

const page = () => {
  return (
    <>
      <div className="flex flex-wrap-reverse h-screen">
        <div className="bg-black text-white py-60 px-32 w-screen md:w-2/5">
          <h6 className="text-5xl mb-6">
            <b>Login</b>
          </h6>
          <div>
            <p className="text-sm text-grey">Enter your account details</p>
            <div className="flex flex-col w-96 my-12">
              <input
                className="bg-black  mb-2"
                type="email"
                name="email"
                placeholder="Email"
              />
              <hr className="w-96 border-grey mb-2  " />
              <input
                className="bg-black  my-3 mb-2"
                type="password"
                name="password"
                placeholder="Password"
              />
              <hr className="w-96 border-grey mb-8  " />
              <Link rel="stylesheet" href="" className="text-xs  text-grey">
                Forgot Password?
              </Link>
            </div>

            <Link
              rel="stylesheet"
              href=""
              className="border-purple border-2 px-44 bg-purple mt-10 w-96 text-sm text-grey rounded-lg py-2 inline-block hover:bg-black"
            >
              Login
            </Link>
            <div className=" flex mt-36 items-center">
              <div>
                <Link rel="stylesheet" href="" className="text-xs text-grey">
                  Don't have and account?
                </Link>
              </div>
              <div>
                <Link
                  rel="stylesheet"
                  href=""
                  className="border-2 ml-24 px-2 bg-darkSilver border-darkSilver w-16 text-xs text-grey rounded-lg inline-block hover:bg-black"
                >
                  Signup
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-purple text-white hidden md:block"
          style={{
            backgroundImage: 'url("blob.svg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* <div>
          <Image src = {blobimage} alt="blob"  className="rounded-custom1 float-right"/>
        </div> */}
          <div className=" absolute ml-80 mt-56 ">
            <label className="text-6xl ">
              <b>Welcome to</b>
            </label>
            <br />
            <label className="text-5xl">ILearn</label>
            <br />
            <label className="text-sm">Login to access your account</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
