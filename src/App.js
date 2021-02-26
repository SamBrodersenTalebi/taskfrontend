import { useEffect, useState } from 'react';
import './App.css';
import { Container } from '@chakra-ui/react';
import axios from 'axios';
import Contact from './components/Contact';
import Listing from './components/Listing';

function App() {
  const [averageSellingPrice, setaverageSellingPrice] = useState(false);
  const [carDistribution, setcarDistribution] = useState(false);
  const [mostContactedPrice, setmostContactedPrice] = useState(false);
  const [mostContacted, setmostContacted] = useState(false);

  const fetchContactData = async () => {
    const baseUrl = 'http://localhost:3001/api/contact';
    axios.get(`${baseUrl}/averageprice`).then((data) => {
      setmostContactedPrice(data.data);
    });
    axios.get(`${baseUrl}/topcars`).then((data) => {
      setmostContacted(data.data);
    });
  };

  const fetchListingData = () => {
    const baseUrl = 'http://localhost:3001/api/listing';
    axios.get(`${baseUrl}/averageprice`).then((data) => {
      setaverageSellingPrice(data.data);
    });
    axios.get(`${baseUrl}/distribution`).then((data) => {
      setcarDistribution(data.data);
    });
  };

  useEffect(() => {
    fetchListingData();
    fetchContactData();
  }, []);

  if (
    !averageSellingPrice ||
    !carDistribution ||
    !mostContactedPrice ||
    !mostContacted
  ) {
    return <div>Loading....</div>;
  }
  return (
    <Container maxW='container.xl'>
      <Listing
        average={averageSellingPrice}
        carDistribution={carDistribution}
      />

      <Contact contacts={mostContactedPrice} mostContacted={mostContacted} />
    </Container>
  );
}

export default App;
