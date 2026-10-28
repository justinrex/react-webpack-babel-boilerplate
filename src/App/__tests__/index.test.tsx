import { render, screen } from '@testing-library/react';
import { App } from '../index';

test('renders the starter screen with a main landmark and setup guidance', () => {
  render(<App />);

  expect(screen.getByRole('main')).toContainElement(
    screen.getByRole('heading', { level: 1, name: 'React + TypeScript' }),
  );
  expect(screen.getByText('Edit src/App/index.tsx to get started.')).toBeVisible();
});
