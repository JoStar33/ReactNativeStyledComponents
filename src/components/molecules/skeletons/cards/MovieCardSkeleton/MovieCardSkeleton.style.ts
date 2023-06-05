import { Platform, StyleSheet } from "react-native";

/*
Q: 왜 스켈레톤 UI에는 styled-components를 안 쓰셨나요?

A: 이유는 간단한데요, 실행이 안됩니다. 네. 말그대로 실행이 안돼요.
  https://github.com/chramos/react-native-skeleton-placeholder/issues/42
  저와 같은 고민으로 인해 Github에도 글이 올라왔었는데요, 다들 안된다고 하더군요...ㅠ
*/
export const movieCardSkeletonStyles = StyleSheet.create({
  container: {
    padding: "3%",
    flex: 1,
    margin: "4%",
    //최소길이를 정해줘서 정렬이 안되는 이슈 해결함.
    minWidth: "40%",
    height: 200,
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "column",
    overflow: "hidden",
    ...Platform.select({
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
    }),
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 2,
  },
  title: {
    width: 120,
    height: 20,
    marginBottom: 2,
  },
  description: {
    width: 120,
    height: 30,
  },
});
