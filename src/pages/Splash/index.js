import React from "react";

import { Img } from "components";

const SplashPage = () => {
  return (
    <>
      <div className="bg-blue_50_89 flex flex-col justify-end mx-[auto] w-[100%]">
        <Img
          src="images/img_ellipse2.png"
          className="h-[110px] md:h-[auto] sm:h-[auto] mr-[1315px] object-cover w-[9%]"
          alt="EllipseTwo"
        />
        <div className="flex flex-col items-center mt-[320px] sm:px-[20px] px-[267px] md:px-[40px] w-[100%]">
          <Img
            src="images/img_xceptionallearning.png"
            className="h-[164px] md:h-[auto] sm:h-[auto] max-w-[904px] mx-[auto] object-cover w-[100%]"
            alt="XceptionalLEARNING"
          />
        </div>
        <div className="flex flex-col items-end mt-[8px] sm:pl-[20px] md:pl-[40px] pl-[945px] w-[100%]">
          <Img
            src="images/img_ellipse1.png"
            className="h-[843px] md:h-[auto] sm:h-[auto] object-cover w-[100%]"
            alt="EllipseOne"
          />
        </div>
      </div>
    </>
  );
};

export default SplashPage;
