/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Grid } from "../components/ui/Grid.jsx";

const PopularMovieContainer = styled.div `
width: 100%;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
text-align: center;
padding: 16px;
box-sizing: border-box;

`;

const CardWrapper = styled.div `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const MovieCard = styled.img `
  width: 100%;
  transition: opacity 0.3s ease;
  ${CardWrapper}:hover & {
    filter: brightness(0.4);
}
`;
const TitleDisplay = styled.span `
  position: absolute;
  color: white;
  bottom: 40px;
  font-size: 1.7rem;
  text-shadow: 1px 1px 0px black;
  transition: opacity 0.2s ease;
  font-weight: 600;
  opacity: 0;
  ${CardWrapper}:hover & {
    opacity: 1;
  }
`;


export const PopularMovies = ({popularMovies, isLoading }) => {
  console.log("isLoading:", isLoading); 
  console.log("popularMovies:", popularMovies);

  if (isLoading) {
		return <p>Loading Movies...</p>;
	}  
  return (
    <>
      <h2>Popular Movies</h2>
      <PopularMovieContainer>
      <Grid >
        {popularMovies && popularMovies.length > 0 ? (
          popularMovies.map((movie) => (
            <CardWrapper key={movie.id}>
              <MovieCard src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <TitleDisplay>{movie.title}</TitleDisplay>
              </CardWrapper>
          ))
        ) : (
          <p>No movies available.</p>
        )}
        </Grid>
      </PopularMovieContainer>
    </>
  );
};