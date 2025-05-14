import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = ({ movie }) => {
  const {poster_path, title, release_date, id} = movie;
  return (
    <Link to={`/movies/${id}`} className='card-container'>
      <MovieImg
        src={`${import.meta.env.VITE_IMAGE_URL}${poster_path}`}
        alt={title}
      />
      <MovieTitle>{title}</MovieTitle>
      <Date>{release_date}</Date>
    </Link>
  )
}

const MovieImg = styled.img`
  place-self: center;
  width: 100%;
  height: 80%;
  border-radius: 10px;
  &:hover {
    filter: brightness(50%);
  }
`
const MovieTitle = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  font-size: 4%;
  font-weight: bold;
  margin-top: 5px;
`
const Date = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  font-size: 1%;
  margin: 0;
`

export default Card;