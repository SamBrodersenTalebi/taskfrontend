import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import TopCars from './TopCars';

const item = {
  carInfo: [
    {
      id: '1138',
      make: 'Toyota',
      price: '13986',
      mileage: '8000',
      seller_type: 'other',
      count: 33,
    },
    {
      id: '1235',
      make: 'Mercedes-Benz',
      price: '5847',
      mileage: '5500',
      seller_type: 'dealer',
      count: 17,
    },
  ],
  date: '1_2020',
};

test('renders content', () => {
  const component = render(<TopCars topcar={item} />);

  //container contains all HTML rendered by component
  expect(component.container).toHaveTextContent('January 2020');
  expect(component.container).toHaveTextContent('Mercedes-Benz');
});
