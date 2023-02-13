import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder27: "rounded-radius27",
  RoundedBorder18: "rounded-radius18",
  RoundedBorder6: "rounded-radius6",
};
const variants = {
  OutlineLightblue900:
    "bg-white_A700 border border-light_blue_900 border-solid text-light_blue_900",
  FillLightblue900: "bg-light_blue_900 text-white_A700",
  OutlineBlack900: "border border-black_900 border-solid text-black_900",
  OutlineLightblue900_1:
    "bg-light_blue_900 border border-light_blue_900 border-solid text-white_A700",
};
const sizes = { sm: "pl-[13px] py-[13px]", md: "p-[29px] sm:px-[20px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder27",
    "RoundedBorder18",
    "RoundedBorder6",
  ]),
  variant: PropTypes.oneOf([
    "OutlineLightblue900",
    "FillLightblue900",
    "OutlineBlack900",
    "OutlineLightblue900_1",
  ]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder27",
  variant: "OutlineLightblue900",
  size: "sm",
};

export { Button };
