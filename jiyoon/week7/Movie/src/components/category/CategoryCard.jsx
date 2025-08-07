import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CategoryCard = ({ category }) => {
  const headers = {
    'now-playing': '현재 상영중인',
    'popular': '인기있는',
    'top-rated': '높은 평가를 받은',
    'up-coming': '개봉 예정중인',
  };
  let categoryHeader = headers[category] || '';

  return (
    <>
      <Link
        to={`/movies/${category}`}
        className="flex h-[20vh] min-w-64 items-end rounded-md bg-cover bg-center text-white"
        style={{ backgroundImage: `url('/images/${category}.jpg')` }}
      >
        <p className="m-[0.5vw] flex w-auto truncate rounded-md bg-[#00000071] p-1.5 text-[1.5%]">
          {categoryHeader}
        </p>
      </Link>
    </>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategoryCard;
