import { Platform } from "react-native";
import { styled } from "styled-components/native";

const MovieCardContainer = styled.View`
  padding: 3%;
  flex: 1;
  margin: 4%;
  min-width: 40%;
  height: 200px;
  background-color: white;
  border-radius: 8px;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  ${Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOffset: {
        width: 10,
        height: 10,
      },
      shadowOpacity: 0.5,
      shadowRadius: 10,
    },
    android: {
      elevation: 20,
    },
    web: {
      shadowColor: "#000",
      shadowOffset: {
        width: 10,
        height: 10,
      },
      shadowOpacity: 0.5,
      shadowRadius: 10,
    },
  })}
`;

const MovieImage = styled.Image`
  width: 120px;
  height: 120px;
  margin-bottom: 2px;
`;

const MovieTitle = styled.Text`
  width: 120px;
  height: 20px;
  font-weight: 800;
  margin-bottom: 2px;
`;

const MovieDescription = styled.Text`
  width: 120px;
  height: 30px;
`;

export { MovieCardContainer, MovieImage, MovieTitle, MovieDescription };

