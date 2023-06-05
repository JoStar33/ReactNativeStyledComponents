import MovieCardSkeleton from "components/molecules/skeletons/cards/MovieCardSkeleton/MovieCardSkeleton";
import { ScreenSkeletonContainer } from "./MovieScreenSkeleton.style";

const MovieScreenSkeleton = () => {
  return (
    <ScreenSkeletonContainer>
      {new Array(4).fill(1).map((_, index) => (
        <MovieCardSkeleton key={index} />
      ))}
    </ScreenSkeletonContainer>
  );
};

export default MovieScreenSkeleton;
