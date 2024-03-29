import React from "react";
import { TeacherSidebar, TeacherMain } from "@/components";

const page = () => {
  return (
    <>
      <div className="bg-black">
        <TeacherSidebar childComponent={<TeacherMain />}></TeacherSidebar>
      </div>
    </>
  );
};

export default page;
