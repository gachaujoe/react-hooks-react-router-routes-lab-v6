// import "@testing-library/jest-dom";
// import { RouterProvider, createMemoryRouter} from "react-router-dom"
// import { render, screen } from "@testing-library/react";
// import routes from "../routes";
// import Movie from '../pages/Movie';

// const id = 1
// const router = createMemoryRouter(routes, {
//     initialEntries: [`/movie/${id}`],
//     initialIndex: 0
// })

// test("renders without any errors", () => {
//   const errorSpy = jest.spyOn(global.console, "error");

//   render(<RouterProvider router={router} />);

//   expect(errorSpy).not.toHaveBeenCalled();

//   errorSpy.mockRestore();
// });

// test("renders movie's title in an h1", async () => {
//   render(<RouterProvider router={router} />);
//   const h1 = await screen.findByText(/Doctor Strange/);
//   expect(h1).toBeInTheDocument();
//   expect(h1.tagName).toBe("H1");
// });

// test("renders movie's time within a p tag", async () => {
//   render(<RouterProvider router={router} />);
//   const p = await screen.findByText(/115/);
//   expect(p).toBeInTheDocument();
//   expect(p.tagName).toBe("P");
// });

// test("renders a span for each genre",  () => {
//   render(<RouterProvider router={router} />);
//   const genres = ["Action", "Adventure", "Fantasy"];
//   genres.forEach(async (genre) =>{
//     const span = await screen.findByText(genre);
//     expect(span).toBeInTheDocument();
//     expect(span.tagName).toBe("SPAN");
//   })
// });

// test("renders the <NavBar /> component", async () => {
//   const router = createMemoryRouter(routes, {
//     initialEntries: [`/movie/1`]
//   })
//   render(
//       <RouterProvider router={router}/>
//   );
//   expect(await screen.findByRole("navigation")).toBeInTheDocument();
// });

import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

let container;

beforeEach(() => {
  container = render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  ).container;
});

test('wraps content in a div with "navbar" class', () => {
  const navbarElement = container.querySelector('.navbar');
  expect(navbarElement).toBeInTheDocument();
});

test("renders a Home <NavLink>", async () => {
  const a = screen.queryByText(/Home/);

  expect(a).toBeInTheDocument();
  expect(a.tagName).toBe("A");
  expect(a.href).toContain("/");

  fireEvent.click(a, { button: 0 });

  expect(a.classList).toContain("active");
});

test("renders a Actors <NavLink>", async () => {
  const a = screen.queryByText(/Actors/);

  expect(a).toBeInTheDocument();
  expect(a.tagName).toBe("A");
  expect(a.href).toContain("/");

  fireEvent.click(a, { button: 0 });

  expect(a.classList).toContain("active");
});

test("renders a Directors <NavLink>", async () => {
  const a = screen.queryByText(/Directors/);

  expect(a).toBeInTheDocument();
  expect(a.tagName).toBe("A");
  expect(a.href).toContain("/");

  fireEvent.click(a, { button: 0 });

  expect(a.classList).toContain("active");
});

test("renders movie's title in an h2", async () => {
  // const h2 = await screen.findByText(/Doctor Strange/);
  const h2 = await screen.findByRole('heading', { level: 2, name: /Doctor Strange/i });
  expect(h2).toBeInTheDocument();
  expect(h2.tagName).toBe("H2");
});

test("renders movie's time within a p tag", async () => {
  const p = await screen.findByText((content, element) => {
    return element.tagName.toLowerCase() === 'p' && content.includes('115');
  });
  expect(p).toBeInTheDocument();
  // expect(p.tagName).toBe("P");
});

test("renders genres in span tags", async () => {
  const genres = ["Action", "Adventure", "Fantasy"];
  for (const genre of genres) {
    const span = await screen.findByText((content, element) => {
      return element.tagName.toLowerCase() === 'span' && content.includes(genre);
    });
    expect(span).toBeInTheDocument();
    // expect(span.tagName).toBe("SPAN");
  }
});

test("renders the <NavBar /> component", async () => {
  expect(await screen.findByRole("navigation")).toBeInTheDocument();
});

