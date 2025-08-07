import { useParams } from 'react-router-dom';
import MovieList from '@/components/common/MovieList';
import useScrollRestoration from '@/hooks/useScrollRestoration';

const CategoryMoviesPage = () => {
  let { category } = useParams();
  category = category === 'up-coming' ? 'upcoming' : category.replace('-', '_');

  useScrollRestoration(category);

  return <MovieList category={category} />;
};

export default CategoryMoviesPage;
