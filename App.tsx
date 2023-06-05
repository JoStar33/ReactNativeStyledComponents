import { QueryClient, QueryClientProvider } from "react-query";
import MovieScreen from "./src/screens/MovieScreen/MovieScreen";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieScreen/>
    </QueryClientProvider>
  )
};

export default App;
