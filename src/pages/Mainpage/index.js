import React from "react";

import { Img, Button, Text } from "components";
import { useNavigate } from "react-router-dom";

const MainpagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700_89 flex flex-col font-inter items-center justify-start mx-[auto] pb-[67px] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <header className="flex md:hidden sm:hidden items-center justify-center w-[100%]">
            <ul className="bg-gray_300 flex flex-1 sm:flex-col flex-row md:hidden sm:hidden items-center justify-center p-[25px] sm:px-[20px] w-[100%] common-row-list">
              <li className="mt-[6px] mb-[2px] sm:w-[100%] sm:my-[10px] w-[18%]">
                <Img
                  src="images/img_xceptionallearning.png"
                  className="h-[46px] md:h-[auto] sm:h-[auto] object-cover"
                  alt="XceptionalLEARNING"
                />
              </li>
              <li className="mb-[2px] ml-[77px] sm:w-[100%] sm:my-[10px] w-[55%]">
                <div className="bg-white_A700 h-[52px] rounded-radius25"></div>
              </li>
              <li className="mb-[2px] ml-[119px] mr-[11px] sm:w-[100%] sm:my-[10px] text-center">
                <Button
                  className="flex items-center justify-center text-center"
                  onClick={() => navigate("/home1")}
                  rightIcon={
                    <Img
                      src="images/img_clock.svg"
                      className="ml-[16px] text-center"
                      alt="clock"
                    />
                  }
                  shape="RoundedBorder6"
                  variant="OutlineBlack900"
                >
                  <div className="common-pointer bg-transparent cursor-pointer font-normal leading-[normal] not-italic text-[18px] text-black_900 text-left">
                    Logout
                  </div>
                </Button>
              </li>
            </ul>
          </header>
          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start mt-[27px] md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[70%]">
            <div className="bg-bluegray_100 flex flex-col items-center justify-start p-[16px] rounded-radius12 md:w-[100%] sm:w-[100%] w-[6%]">
              <Img
                src="images/img_arrowleft.svg"
                className="common-pointer h-[21px] w-[21px]"
                onClick={() => navigate(-1)}
                alt="arrowleft"
              />
            </div>
            <Button
              className="flex items-center justify-center md:ml-[0] ml-[44px] sm:ml-[0] text-center"
              onClick={() => navigate("/info")}
              rightIcon={
                <Img
                  src="images/img_plus.svg"
                  className="ml-[13px] text-center"
                  alt="plus"
                />
              }
            >
              <div className="common-pointer bg-transparent cursor-pointer font-normal leading-[normal] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-left text-light_blue_900">
                Add Student
              </div>
            </Button>
            <Button
              className="flex items-center justify-center md:ml-[0] ml-[32px] sm:ml-[0] text-center"
              rightIcon={
                <Img
                  src="images/img_plus_bluegray_200.svg"
                  className="ml-[9px] text-center"
                  alt="plus"
                />
              }
            >
              <div className="bg-transparent cursor-pointer font-normal leading-[normal] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-left text-light_blue_900">
                Schedule Session
              </div>
            </Button>
            <Button
              className="flex items-center justify-center md:ml-[0] ml-[32px] sm:ml-[0] text-center"
              rightIcon={
                <Img
                  src="images/img_plus_bluegray_200.svg"
                  className="ml-[8px] text-center"
                  alt="plus"
                />
              }
            >
              <div className="bg-transparent cursor-pointer font-normal leading-[normal] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-left text-light_blue_900">
                Import Student via Sheet
              </div>
            </Button>
          </div>
          <div className="font-inika h-[741px] md:h-[771px] sm:h-[771px] max-w-[1291px] mt-[30px] mx-[auto] md:px-[20px] sm:px-[20px] relative w-[100%]">
            <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
              <Img
                src="images/img_pexelsfransva.png"
                className="h-[741px] md:h-[auto] sm:h-[auto] object-cover rounded-radius9 w-[100%]"
                alt="pexelsfransva"
              />
            </div>
            <div className="absolute bg-gradient  bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-[auto] p-[89px] sm:px-[20px] md:px-[40px] w-[100%]">
              <Text
                className="mb-[156px] text-center text-white_A700"
                as="h1"
                variant="h1"
              >
                Welcome <br />
                to Student Profile
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainpagePage;
