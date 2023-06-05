
import ColorButton from "components/atoms/buttons/ColorButton/ColorButton";
import { View } from "react-native";

const MainScreen = () => {
  return (
    <View>
      <ColorButton
        label={"테스트입니다"}
        color={"skyblue"}
        handleClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </View>
  );
};

export default MainScreen;
