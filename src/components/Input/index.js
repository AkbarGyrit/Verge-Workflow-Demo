import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineLightblue900:
    "bg-white_A700 border border-light_blue_900 border-solid",
  OutlineBlack900: "border border-black_900 border-solid",
};
const shapes = {
  RoundedBorder7: "rounded-radius7",
  RoundedBorder18: "rounded-radius18",
};
const sizes = {
  sm: "pb-[18px] pt-[13px] px-[13px]",
  md: "pl-[25px] pr-[29px] sm:px-[20px] py-[30px]",
  lg: "pb-[27px] pt-[33px] sm:px-[20px] px-[26px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder7", "RoundedBorder18"]),
  variant: PropTypes.oneOf(["OutlineLightblue900", "OutlineBlack900"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder7",
  variant: "OutlineLightblue900",
  size: "sm",
};

export { Input };
