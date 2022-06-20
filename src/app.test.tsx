import { render, screen } from '@testing-library/react';
import App from './App';
import { server } from './mocks/server';

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test('should ', async () => {
  render(<App />);

  expect(await screen.findByText('blablablabla'));
});
