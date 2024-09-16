// import "@testing-library/jest-dom";
// import { RouterProvider, createMemoryRouter} from "react-router-dom"
// import { render, screen } from "@testing-library/react";
// import routes from "../routes";

// const directors = [
//   {
//     name: "Scott Derrickson",
//     movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"],
//   },
//   {
//     name: "Mike Mitchell",
//     movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"],
//   },
//   {
//     name: "Edward Zwick",
//     movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"],
//   },
// ];

// const router = createMemoryRouter(routes, {
//   initialEntries: [`/directors`],
//   initialIndex: 0
// })

// test("renders without any errors", () => {
//   const errorSpy = jest.spyOn(global.console, "error");

//   render(<RouterProvider router={router}/>);

//   expect(errorSpy).not.toHaveBeenCalled();

//   errorSpy.mockRestore();
// });

// test("renders 'Directors Page' inside of a <h1 />", () => {
//   render(<RouterProvider router={router}/>);
//   const h1 = screen.queryByText(/Directors Page/);
//   expect(h1).toBeInTheDocument();
//   expect(h1.tagName).toBe("H1");
// });

// test("renders each director's name", async () => {
//   render(<RouterProvider router={router}/>);
//   for (const director of directors) {
//     expect(
//       await screen.findByText(director.name, { exact: false })
//     ).toBeInTheDocument();
//   }
// });

// test("renders a <li /> for each movie", async () => {
//   render(<RouterProvider router={router}/>);
//   for (const director of directors) {
//     for (const movie of director.movies) {
//       const li = await screen.findByText(movie, { exact: false });
//       expect(li).toBeInTheDocument();
//       expect(li.tagName).toBe("LI");
//     }
//   }
// });

// test("renders the <NavBar /> component", () => {
//   const router = createMemoryRouter(routes, {
//     initialEntries: ['/directors']
//   })
//   render(
//       <RouterProvider router={router}/>
//   );
//   expect(document.querySelector(".navbar")).toBeInTheDocument();
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