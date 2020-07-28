import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders confirmed text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Confirmed/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders hospitalized text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hospitalized/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders deaths text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Deaths/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders recovered text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Recovered/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders last updated text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Last updated/i);
  expect(linkElement).toBeInTheDocument();
});
