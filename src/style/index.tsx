import styled from "styled-components";
import { StyleProps } from "../model/interface/props";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: inherit;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const ScreenContainer = styled.div<StyleProps>`
  margin: 0;
  padding: 0;
  background-color: ${({ bgColor }) => bgColor || "#ffff"};
`;

export const Button = styled.button<StyleProps>`
  width: ${({ width, sizeUnit }) =>
    sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : "100%"};
  height: ${({ height }) => height || 2.8}rem;
  background: ${({ bgColor }) => bgColor || "#39CDCC"};
  border-radius: ${({ radius }) => radius || 8}px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  color: ${({ color }) => color || "#ffff"};
  font-size: ${({ size }) => size || 1}rem;
  font-weight: ${({ fontWeight }) => fontWeight || 600};
  margin-right: ${({ rightMargin }) => rightMargin || 0}rem;
  margin-left: ${({ leftMargin }) => leftMargin || 0}rem;
  margin-top: ${({ topMargin }) => topMargin || "0"}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin || "0"}rem;
  padding: 0 ${({ padding }) => padding || 0}rem;
  padding-top: ${({ topPadding }) => topPadding || 0}rem;
  padding-bottom: ${({ bottomPadding }) => bottomPadding || 0}rem;
  padding-left: ${({ leftPadding, padding }) =>
    leftPadding ? leftPadding : padding ? padding : 0}rem;
  padding-right: ${({ rightPadding, padding }) =>
    rightPadding ? rightPadding : padding ? padding : 0}rem;
  position: relative;

  &:hover,
  &:focus {
    background: ${({ hoverBgColor, bgColor }) => hoverBgColor || bgColor};
    opacity: 0.9;
    color: ${({ hoverColor, color }) =>
      hoverColor ? hoverColor : color ? color : "#fff"};
    outline: none;
  }
`;
export const OutlineButton = styled.button<StyleProps>`
  width: ${({ width, sizeUnit }) =>
    sizeUnit && width
      ? `${width}${sizeUnit}`
      : width
      ? `${width}rem`
      : "20rem"};
  height: ${({ height }) => height || 4.5}rem;
  border: 1px solid ${({ color }) => color || "#6DE7B4"};
  border-radius: ${({ radius }) => radius || 0.8}rem;
  outline: none;
  background: transparent;
  transition: all 0.2s;
  font-size: ${({ titleSize }) => titleSize || 1.5}rem;
  color: ${({ color }) => color || "#00071F"};
  font-weight: ${({ fontWeight }) => fontWeight || 700};
  margin-right: ${({ rightMargin }) => rightMargin || 0}rem;
  margin-left: ${({ leftMargin }) => leftMargin || 0}rem;
  margin-top: ${({ topMargin }) => topMargin || "0"}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin || "0"}rem;
  padding: 0 ${({ padding }) => padding || 0}rem;
  padding-top: ${({ topPadding }) => topPadding || 0}rem;
  padding-bottom: ${({ bottomPadding }) => bottomPadding || 0}rem;
  padding-left: ${({ leftPadding, padding }) =>
    leftPadding ? leftPadding : padding ? padding : 0}rem;
  padding-right: ${({ rightPadding, padding }) =>
    rightPadding ? rightPadding : padding ? padding : 0}rem;

  &:hover,
  &:focus {
    background: ${({ hoverBgColor, color }) => hoverBgColor || color};
    color: ${({ hoverColor }) => hoverColor || "#00071F"};
    border: none;
    outline: none;
  }
`;

export const SelectButton = styled.div<StyleProps>`
  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;
  border-radius: 10rem;
  display: grid;
  place-items: center;
  padding: 0.7rem;
  margin-right: ${({ rightMargin }) => rightMargin || 0.8}rem;
  margin-bottom: 1rem;
  border: 1px solid #8095e0;
  position: relative;

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 3;
    opacity: 0;
  }
  label {
    z-index: 2;
    text-align: center;
    font-size: ${({ size }) => size || 1.5}rem;
    margin: 0;
    padding: 0;
  }
  span {
    width: 100%;
    height: ${({ height }) => height}rem;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10rem;
    transition: all 0.2s;
  }
  input:checked ~ span {
    background-color: #2e4dbd;
    width: ${({ width }) => Number(width) + 0.5}rem;
    height: ${({ height }) => Number(height) + 0.5}rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  input:checked ~ label {
    font-weight: 700;
  }
`;
export const Divider = styled.div<StyleProps>`
  width: 100%;
  margin-top: ${({ margin }) => margin || 3}rem;
  margin-bottom: ${({ margin }) => margin || 3}rem;
  border: 1px solid ${({ bgColor }) => bgColor || "rgba(255, 255, 255, 0.07)"};
`;

export const CustomContainer = styled.div<StyleProps>`
  width: ${({ width, sizeUnit }) =>
    sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : "100%"};
  height: ${({ height, sizeUnit }) =>
    sizeUnit && height ? `${height}${sizeUnit}` : `${height}rem` || "auto"};
  margin-top: ${({ topMargin }) => topMargin || 0}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin}rem;
  margin-left: ${({ leftMargin }) => leftMargin || 0}rem;
  margin-right: ${({ rightMargin }) => rightMargin || 0}rem;
  padding-top: ${({ topPadding }) => topPadding || 0}rem;
  padding-bottom: ${({ bottomPadding }) => bottomPadding || 0}rem;
  padding-left: ${({ leftPadding }) => leftPadding || 0}rem;
  padding-right: ${({ rightPadding }) => rightPadding || 0}rem;
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  border-radius: ${({ radius }) => radius || 0}rem;
  display: ${({ display }) => display || "flex"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  border: ${({ borderColor }) =>
    borderColor ? `1px solid ${borderColor}` : "none"};
`;

export const FlexColumn = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => `${gap}rem` || "0"};
  height: ${({ height }) => `${height}%` || "auto"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  width: ${({ width }) => width || 100}%;
  margin-top: ${({ topMargin }) => topMargin || 0}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin}rem;
  margin-left: ${({ leftMargin }) => leftMargin || 0}rem;
  margin-right: ${({ rightMargin }) => rightMargin || 0}rem;
  padding-top: ${({ topPadding }) => topPadding || 0}rem;
  padding-bottom: ${({ bottomPadding }) => bottomPadding || 0}rem;
  padding-left: ${({ leftPadding }) => leftPadding || 0}rem;
  padding-right: ${({ rightPadding }) => rightPadding || 0}rem;
  padding: ${({ padding }) => padding || 0}rem;
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  border-radius: ${({ radius }) => radius || 0}rem;
  border: ${({ borderColor }) =>
    borderColor ? `1px solid ${borderColor}` : "none"};
  position: relative;
`;
export const FlexRow = styled.div<StyleProps>`
  display: flex;
  flex-direction: row;
  gap: ${({ gap }) => `${gap}rem` || "0"};
  height: ${({ height }) => `${height}rem` || "auto"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  flex-wrap: ${({ wrap }) => wrap || "nowrap"};
  width: ${({ width, sizeUnit }) =>
    sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : "100%"};
  margin-top: ${({ topMargin }) => topMargin || 0}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin}rem;
  margin-left: ${({ leftMargin }) => leftMargin || 0}rem;
  margin-right: ${({ rightMargin }) => rightMargin || 0}rem;
  padding: ${({ padding }) => padding || 0}rem;
  padding-top: ${({ topPadding }) => topPadding || 0}rem;
  padding-bottom: ${({ bottomPadding }) => bottomPadding || 0}rem;
  padding-left: ${({ leftPadding }) => leftPadding || 0}rem;
  padding-right: ${({ rightPadding }) => rightPadding || 0}rem;
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  border-radius: ${({ radius }) => radius || 0}rem;
  border: 1px solid ${({ borderColor }) => borderColor || "transparent"};
  cursor: ${({ cursor }) => cursor || "default"};
`;

export const SearchInput = styled.div<StyleProps>`
  background-color: #fff;
  width: ${({ width, sizeUnit }) =>
    sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : "100%"};
  height: 100%;
  margin-bottom: ${({ bottomMargin }) => bottomMargin || 0}rem;
  position: relative;
  border: 1.3px solid var(--primary-color);
  border-radius: 8px;
  padding: 0.7rem 1rem;

  input {
    border: none;
    outline: none;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    color: var(--quaternary-color);
    font-size: 15px;
  }

  div {
    position: absolute;
    top: 0;
    right: 0;
    border: 1.2px solid var(--primary-color);
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    height: 100%;
    width: 3rem;
    background: var(--secondary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  img {
  }
`;

export const TextInput = styled.div<StyleProps>`
  background-color: #fff;
  width: ${({ width, sizeUnit }) =>
    sizeUnit && width ? `${width}${sizeUnit}` : width ? `${width}rem` : "100%"};
  border: 2px solid rgba(84, 95, 125, 0.15);
  border-radius: 5px;
  padding: ${({ padding }) => padding || 0}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin || 0}rem;
  position: relative;

  input {
    border: none;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    height: 100%;
    position: relative;
    width: 100%;
  }

  p {
    position: absolute;
    top: 0.4em;
    right: 1em;
    font-size: small;
    cursor: pointer;
  }
`;

export const Avatar = styled.div<StyleProps>`
  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: ${({ borderColor }) =>
    borderColor ? `1px solid ${borderColor}` : "none"};

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const SideMenuContainer = styled.div<StyleProps>`
  position: fixed;
  top: 5.5em;
  left: 0;
  width: 270px;
  height: 100%;
  padding: 1em 0;
  background: #fff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.04);
  overflow-y: auto;
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    left: ${({ open }) => (open ? "0" : "-100%")};
    transition: all 0.3s ease-in;
    z-index: 999;

    :before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: -1;
    }
  }
`;

export const ContentContainer = styled.div<StyleProps>`
  position: absolute;
  z-index: -1;
  max-width: 75.6vw;
  height: 75vh;
  padding: 2em;
  background: #fbfbfb;
  right: 0;
  top: 5.5em;
  left: 16.7em;
  overflow-y: auto;

  @media (max-width: 768px) {
    left: 0;
    right: 0;
    max-width: 100%;
    padding-right: 1em;
  }
`;
