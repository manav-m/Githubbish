import React from 'react';
import { render, screen } from '@testing-library/react';
import User from '../User';
import { MemoryRouter, Route } from 'react-router-dom';

test('User contains list of repos', () => {
  render(
    <MemoryRouter initialEntries={[`/user/lokoArt`]}>
      <Route path="/users/:userId">
        <User />
      </Route>
    </MemoryRouter>
  );

  // wait for api to return
  setTimeout(() => {
    const linkElement = screen.getByText(/xanpool-frontend-assigment/i);
    expect(linkElement).toBeInTheDocument();
  }, 1000)
});
