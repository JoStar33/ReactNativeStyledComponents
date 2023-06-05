import React from "react";
import { ButtonContainer, LabelText } from "./ColorButton.style";

interface Props {
  label: string;
  color: string;
  handleClick: () => void;
}

const ColorButton = ({ label, color, handleClick }: Props) => {
  return (
    <ButtonContainer
      style={{
        backgroundColor: color,
      }}
      testID={`colorButton-${label}`}
      onPress={handleClick}
    >
      <LabelText>{label}</LabelText>
    </ButtonContainer>
  );
};

export default ColorButton;
