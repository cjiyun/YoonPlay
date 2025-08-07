import MovieList from '@/components/common/MovieList';
import useScrollRestoration from '@/hooks/useScrollRestoration';

const HomePage = () => {
  const category = 'popular';
  useScrollRestoration(category);

  return <MovieList category={category} />;
};

export default HomePage;
