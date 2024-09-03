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
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2 items-center justify-center">
              <img src={img} alt={name} className="w-10 h-10 md:w-10" />
              {nameImg ? (
                <img src={nameImg} alt={name} className="md:w-24 w-20" />
              ) : (
                <span className="text-lg">{name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cirtificates;
