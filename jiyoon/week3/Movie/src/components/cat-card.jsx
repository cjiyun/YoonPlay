import { Link } from "react-router-dom";
import styled from "styled-components";
import '../css/category.css';

const CategoryCard = ({ category }) => {
  let catHeader = '';
  switch (category) {
    case 'now-playing':
      catHeader = '현재 상영중인';
      break;
    case 'popular':
      catHeader = '인기있는';
      break;
    case 'top-rated':
      catHeader = '높은 평가를 받은';
      break;
    case 'up-coming':
      catHeader = '개봉 예정중인';
      break;
    default:
      return '';
  }
  return (
    <>
      <CatCard to={`/movies/${category}`} className={`${category}`}>
        <CatTitle>{catHeader}</CatTitle>
      </CatCard>
    </>
  )
}

const CatCard = styled(Link)`
  display: flex;
  place-items: end start;
  width: calc((100vw - 240px) / 4);
  border-radius: 5px;
  background-size: cover;
  text-decoration: none;
  color: white;
`
const CatTitle = styled.p`
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: auto;
  border-radius: 5px;
  background-color: #00000071;
  font-size: 1.5%;
  padding: 5px;
  margin: 0.5vw;
`

export default CategoryCard;