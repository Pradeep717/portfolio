import React from "react";
import { companies, cirtificates } from "@/data";
import { InfiniteMovingDoc } from "./ui/InfiniteMovingDoc";

const Cirtificates = () => {
  return (
    <div className="py-20" id="cirtificates">
      <h1 className="heading">
        Certificates <span className="text-purple">from my journey</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingDoc
          items={cirtificates}
          direction="left"
          speed="fast"
          // pauseOnHover={true}
        />
      </div>
    </div>
  );
};

export default Cirtificates;
