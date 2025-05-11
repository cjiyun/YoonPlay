import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/card";
import axios from "axios";
import styled from "styled-components";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  let {category} = useParams();
  if (category === 'up-coming') {
    category = 'upcoming';
  } else {
    category = category.replace('-', '_');
  }

  useEffect(() => {
    const getMovies = async () => {
      const movies = await axios.get(`https://api.themoviedb.org/3/movie/${category}?language=ko-KR&page=1`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWQzZDRlNWM1NTQxZjMwY2U0YTlmOGJiZDc3ZDYxNyIsIm5iZiI6MTc0NjUyNzM5OC4zMzksInN1YiI6IjY4MTllNGE2MjgxNTI1MDMwMTg0ZDdmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OoeVNei4egh384FX5oWELxEur2l2UfLlW48b1m01AwE`,
        }
      })
      setMovies(movies);
    }
    getMovies()
  }, []);

  return (
    <MovieContainer>
      {movies.data?.results.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </MovieContainer>
  )
}

const MovieContainer = styled.div` 
  display: grid;
  //grid-template-columns : 열의 배치
  //fr : 가변 크기, 비율대로 크기를 나눔
  //repeat(반복 횟수, 반복 값) : 횟수만큼 반복되는 값을 처리
  //같은 비율의 9개 열을 생성.
  grid-template-columns: repeat(9, calc((100% - 160px) / 9));
  gap: 20px;
`

export default MoviesPage;