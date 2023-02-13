import React from "react";

import { Img, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const Home1Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white_A700_89 flex flex-col font-inter items-center justify-start mx-[auto] p-[122px] sm:px-[20px] md:px-[40px] w-[100%]"
        style={{ backgroundImage: "url('images/img_home.png')" }}
      >
        <div className="bg-white_A700 flex flex-col md:gap-[40px] sm:gap-[40px] gap-[82px] items-center justify-start max-w-[953px] mx-[auto] p-[90px] md:px-[20px] sm:px-[20px] rounded-radius33 shadow-bs w-[100%]">
          <Img
            src="images/img_xceptionallearning.png"
            className="h-[116px] sm:h-[auto] object-cover md:w-[100%] sm:w-[100%] w-[83%]"
            alt="XceptionalLEARNING"
          />
          <div className="flex flex-col items-center justify-start mb-[38px] md:w-[100%] sm:w-[100%] w-[66%]">
            <Input
              className="font-normal leading-[normal] not-italic p-[0] sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-black_900 text-black_900 text-left w-[100%]"
              wrapClassName="w-[100%]"
              type="text"
              name="GroupTwo"
              placeholder="User name"
              shape="RoundedBorder18"
              size="lg"
              variant="OutlineBlack900"
            ></Input>
            <Input
              className="font-normal leading-[normal] not-italic p-[0] sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-black_900 text-black_900 text-left w-[100%]"
              wrapClassName="mt-[29px] w-[100%]"
              type="password"
              name="GroupOne"
              placeholder="Password"
              shape="RoundedBorder18"
              size="md"
              variant="OutlineBlack900"
            ></Input>
            <Button
              className="common-pointer cursor-pointer font-normal leading-[normal] min-w-[509px] mt-[74px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[auto]"
              onClick={() => navigate("/mainpage")}
              shape="RoundedBorder18"
              size="md"
              variant="FillLightblue900"
            >
              Password
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
