import { Box, Table, Text, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';
import React from 'react';

const months = [
  { month: 1, string: 'January' },
  { month: 2, string: 'February' },
  { month: 3, string: 'March' },
  { month: 4, string: 'April' },
  { month: 5, string: 'May' },
  { month: 6, string: 'June' },
  { month: 7, string: 'July' },
  { month: 8, string: 'August' },
  { month: 9, string: 'September' },
  { month: 10, string: 'October' },
  { month: 11, string: 'November' },
  { month: 12, string: 'December' },
];

export default function TopCars({ topcar }) {
  const { date, carInfo } = topcar;
  const sortedCarInfo = carInfo.sort((a, b) =>
    a.count < b.count ? 1 : b.count < a.count ? -1 : 0
  );
  const findMonth = months.find(
    (item) => item.month === Number(date.slice(0, 1))
  );
  const correctDate = `${findMonth.string} ${date.slice(2)}`;
  return (
    <Box mb={8}>
      <Text fontSize='xl' fontWeight='bold'>
        Date: {correctDate}
      </Text>
      <Table variant='striped' colorScheme='teal'>
        <Thead>
          <Tr>
            <Th>Listing Id</Th>
            <Th>Make</Th>
            <Th>Selling Price</Th>
            <Th>Mileage</Th>
            <Th>Seller Type</Th>
            <Th>Total Amount of contacts</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortedCarInfo.map((item, index) => {
            const { id, make, price, mileage, seller_type, count } = item;
            return (
              <Tr key={index}>
                <Td>{id}</Td>
                <Td>{make}</Td>
                <Td>{price}</Td>
                <Td>{mileage}</Td>
                <Td>{seller_type}</Td>
                <Td>{count}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}
