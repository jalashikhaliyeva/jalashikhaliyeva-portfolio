import React from "react";
import StarsIcon from "../../public/stars.svg";
import Image from "next/image";

function Title({title}) {
  return (
    <div className="flex items-center justify-center py-60">
      <Image src={StarsIcon} />
      <h3 className="font-clash text-mainColor2 text-center text-3xl md:text-5xl  ">
       {title}
      </h3>
    </div>
  );
}

export default Title;
