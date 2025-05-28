import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  let categoryHeader = '';
  switch (category) {
    case 'now-playing':
      categoryHeader = '현재 상영중인';
      break;
    case 'popular':
      categoryHeader = '인기있는';
      break;
    case 'top-rated':
      categoryHeader = '높은 평가를 받은';
      break;
    case 'up-coming':
      categoryHeader = '개봉 예정중인';
      break;
    default:
      return '';
  }
  return (
    <>
      <Link to={`/movies/${category}`}
        className="flex items-end min-w-64 h-[20vh] rounded-md bg-cover bg-center text-white"
        style={{ backgroundImage: `url('/images/${category}.jpg')` }}
      >
        <p className='flex nowrap-ellipsis w-auto rounded-md bg-[#00000071] text-[1.5%] p-1.5 m-[0.5vw]'>
          {categoryHeader}
        </p>
      </Link>
    </>
  )
}

export default CategoryCard;