import React from 'react';
import { render, screen } from '@testing-library/react';
import Repo from '../Repo';
import { MemoryRouter, Route } from 'react-router-dom';

test('Repo contains files and readme', () => {
  render(
    <MemoryRouter initialEntries={[`/user/lokoArt`]}>
      <Route path="/users/:userId">
        <Repo />
      </Route>
    </MemoryRouter>
  );

  // wait for api to return
  setTimeout(() => {
    const linkElement = screen.getByText(/README.md/i);
    expect(linkElement).toBeInTheDocument();
    const readMeElement = screen.getAllByText(/xanpool-frontend-assigment/i);
    expect(readMeElement).toBeInTheDocument();
  }, 1000)
});
