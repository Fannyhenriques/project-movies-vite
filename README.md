<h1 align="center">
  <a href="">
    <img src="/src/assets/movies.svg" alt="Project Banner Image">
  </a>
</h1>

# Movie Library 
Movie Library is a React app where current and upcoming movies are displayed. The app uses React Router, allowing users to navigate between pages without reloading the site.
Features:
- Home Page: Displays popular movies fetched from the API.
- Upcoming Movies Page: Lists movies that are coming soon.
- About Page: Provides details about the app.
- Movie Details: Clicking on a movie shows additional information about that movie.

### The Problem and process
- I began by creating pages (Home, Upcoming Movies, About) and defining routes in a central route file. Originally I wanted more pages but as time was limited, I decided to focus on the core pages and removed unused routes.

- A FetchMovies component was created to fetch movie data and details dynamically using the unique movieId. The data is then passed to the relevant pages and components. Movie lists and details were rendered on the respective pages. While the app works as intended, I recognized areas for improvement in the component structure as the project grew more complex.

- My initial goal was to use reusable components (e.g., for typography and buttons). I started with a reusable grid but couldn’t implement all reusable structures as planned.
The app’s structure became somewhat complex as the project evolved, which made parts of the code redundant and repetitive.

- I had some difficulties with making the app responsive, one solution to making the page look good in mobile (ex. iphone 5/SE) was to set the descripton of the movie to a fixed height and make it scrollable. If I had more time I would refine the styling for better responsiveness. 

### If I had more time I would improve:
- Code Organization: As the app evolved, it became evident that restructuring the project into smaller reusable components would improve maintainability. If I had more time I would perhaps change the all in all structure of the app for better maintalability. 

- Create a reusable component for movie details to reduce redundancy.

- Add a search bar to let users find movies by title.

- Implement better error handeling/messages for failed API requests or when a movie is not found.

### View it live

https://fannys-movie-library.netlify.app/

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>
