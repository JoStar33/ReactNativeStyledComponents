// import { NavigationProp, useNavigation } from "@react-navigation/native";
// import { StackMenus } from "constants/menus";
import { Movie } from "types/movie";
import { MovieCardContainer, MovieDescription, MovieImage, MovieTitle } from "./MovieCard.style";

interface Props {
  item: Movie;
}

type RootParamList = {
  MovieDetailScreen: { movie: Movie } | undefined;
};

const MovieCard = ({ item }: Props) => {
  // const navigation = useNavigation<NavigationProp<RootParamList>>();
  // const handleClick = () => {
  //   navigation.navigate(StackMenus.MovieDetailScreen, {
  //     movie: item
  //   });
  // };
  return (
    //onPress={handleClick}
    <MovieCardContainer>
      <MovieImage
        source={{ uri: item.medium_cover_image }}
      />
      <MovieTitle>{item.title}</MovieTitle>
      <MovieDescription>{item.description_full}</MovieDescription>
    </MovieCardContainer>
  );
};

export default MovieCard;
