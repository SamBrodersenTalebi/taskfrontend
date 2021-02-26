import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import TopCars from './TopCars';

export default function Contact({ contacts, mostContacted }) {
  const sortedMostContacted = mostContacted.sort((a, b) =>
    a.date > b.date ? 1 : b.date > a.date ? -1 : 0
  );
  return (
    <Box textAlign='center' width='70%' m='auto' mt={5}>
      <Heading>Average price of the 30% most contacted listings</Heading>
      <Text mt={4} fontSize='xl'>
        Average price: <i>€{contacts.averagePrice.toFixed(2)},-</i>
      </Text>
      <Heading mt={6} mb={6}>
        The Top 5 most contacted listings per Month
      </Heading>
      {sortedMostContacted.map((item, index) => {
        return <TopCars key={index} topcar={item} />;
      })}
    </Box>
  );
}
