import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import React from 'react';

export default function Listing({ average, carDistribution }) {
  console.log(carDistribution);
  const sorted = carDistribution.sort((a, b) =>
    a.distribution < b.distribution
      ? 1
      : b.distribution < a.distribution
      ? -1
      : 0
  );
  return (
    <Box textAlign='center' width='70%' m='auto'>
      <Heading>Average Listing Selling Price per Seller Type</Heading>
      <Table variant='striped' colorScheme='teal' mb={5}>
        <Thead>
          <Tr>
            <Th>Seller Type</Th>
            <Th>Average in Euro</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.entries(average).map((item, index) => {
            const [type, price] = item;
            return (
              <Tr key={index}>
                <Td>{type}</Td>
                <Td>€{price.toFixed(2)},-</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <Heading>Percentual distribution of available cars by Make</Heading>
      <Table variant='striped' colorScheme='teal'>
        <Thead>
          <Tr>
            <Th>Make</Th>
            <Th>Distribution</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sorted.map((item, index) => {
            const { make, distribution } = item;
            const percent = distribution * 100;
            return (
              <Tr key={index}>
                <Td>{make}</Td>
                <Td>{percent.toFixed(2)}%</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}
