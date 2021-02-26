import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Listing from './Listing';

const item = {
  private: 1555,
  dealer: 1666,
  other: 9999,
};

const distribution = [
  { make: 'Audi', distribution: 0.16 },
  { make: 'Tesla', distribution: 0.22 },
];

test('renders content', () => {
  const component = render(
    <Listing average={item} carDistribution={distribution} />
  );

  //container contains all HTML rendered by component
  expect(component.container).toHaveTextContent('Tesla');
});
