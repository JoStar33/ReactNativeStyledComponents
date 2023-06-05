// import { StyleSheet } from "react-native";
import { styled } from "styled-components/native";

// export const colorButtonStyles = StyleSheet.create({
//   container: {
//     maxWidth: 300,
//     minWidth: 150,
//     height: 50,
//     padding: 10,
//     borderRadius: 40,
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "row",
//   },
//   labelText: {
//     fontWeight: "800",
//     fontSize: 20,
//   },
// });

const ButtonContainer = styled.TouchableOpacity`
  max-width: 300px;
  min-width: 300px;
  height: 50px;
  padding: 10px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


const LabelText = styled.Text`
  font-weight: 800;
  font-size: 20px;
`;


export { ButtonContainer, LabelText };

