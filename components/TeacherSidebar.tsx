"use client";
import Link from "next/link";
import React, { ReactNode } from "react";
import GlobalConifg from "@/app/app.config.js";

interface ParentComponentProps {
  childComponent: ReactNode;
}

const TeacherSidebar = (component: ParentComponentProps) => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-row bg-black">
          <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="btn btn-secondary drawer-button lg:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </label>
          <div className="flex-grow">{component.childComponent}</div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-purple text-base-content">
            {/* Sidebar content here */}
            <h1 className="font-bold text-2xl m-4">
              Hello {GlobalConifg.username}!
            </h1>

            <li className="mt-4 text-lg">
              <Link
                href={"/teacherMain/checkPlagiarism"}
                className="hover:bg-black"
              >
                Plagiarism Checker
              </Link>
            </li>
            <li className="mt-4 text-lg">
              <Link
                href={"/teacherMain/checkGrammar"}
                className="hover:bg-black"
              >
                Grammar Checker
              </Link>
            </li>
            <li className="mt-4 text-lg">
              <Link href={"/teacherMain/mcq"} className="hover:bg-black">
                MCQ Generator
              </Link>
            </li>
            <li className="mt-4 text-lg">
              <Link href={"/teacherMain/saq"} className="hover:bg-black">
                SAQ Generator
              </Link>
            </li>
            <li className="mt-4 text-lg">
              <Link href={"/teacherMain/casestudy"} className="hover:bg-black">
                Case Study Generator
              </Link>
            </li>
            <li className="mt-4 text-lg">
              <Link
                href={"/teacherMain/courseoutlineGenerator"}
                className="hover:bg-black"
              >
                Course Outline Generator
              </Link>
            </li>
            <li className="mt-4 text-lg">
              <Link
                href={"/teacherMain/chapterobjectivesGenerator"}
                className="hover:bg-black"
              >
                Chapter Objectives Generator
              </Link>
            </li>
            <li className="mt-4 text-lg">
              <Link href={"/"} className="hover:bg-black">
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TeacherSidebar;
