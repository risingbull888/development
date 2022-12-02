import React, { useState } from 'react';

import {Heading, ChakraProvider, Grid, GridItem, SimpleGrid, Box, Center} from '@chakra-ui/react';

import CarCard from './components/CarCard';
import Sidebar from './components/Sidebar';


function App() {
  const [color, setColor] = useState([]);
  const [sortName, setSortName] = useState(false);
  const [sortHP, setSortHP] = useState(false);
  const [showcases, setShowcases] = useState([]);
  const [totalHP, setTotalHP] = useState(0);


  const data = [
    { name: 'Bugatti Chiron', color1: 'Blue',color2: 'Black', total: 1500 },
    { name: 'Aston Martin Zagato', color1: 'Red', color2: '', total: 510 },
    { name: 'Lamborghini Aventador', color1 : 'Orange', color2: '', total: 759 },
    { name: 'Ford GT MKII', color1: 'Purple', color2: 'Black', total: 700 },
    { name: 'BMW i8', color1: 'Red', color2: 'Black', total: 369 },
    { name: 'Lotus 3-Eleven', color1: 'Green', color2: 'Yellow', total: 430 },
    { name: 'Jaguar F-Type', color1: 'Blue', color2: '', total: 575 },
    { name: 'Bugatti Veyron', color1: 'Black', color2: 'Orange', total: 1200 },
  ]

  const addToShowcases = (car, add) => {
    if (add) {
      if (!showcases.includes(car)) {
        setShowcases([...showcases, car[0]]);
        setTotalHP(totalHP + car[1]);
      }
    } else {
      const arr = [...showcases];
      const idx = arr.indexOf(car[0]);
      if (idx !== -1) {
        arr.splice(idx, 1);
        setShowcases(arr);
        setTotalHP(totalHP - car[1]);
      }
    }
  }

  const isShowcase = (name) => {
    return showcases.includes(name);
  }

  const selectFilter = (eventKey, add) => {
    if (add) {
      setColor([...color, eventKey]);
    } else {
      const array = [...color];
      const idx = array.indexOf(eventKey);
      if (idx !== -1) {
        array.splice(idx, 1);
        setColor(array);
      }
    }
  }

  const matchesFilter = (car) => {
    if (color === []) {
      return true;
    } else {
      for (let i = 0; i < color.length; i++) {
        if (color[i] === 'Showcase') {
          if (!showcases.includes(car.name)) {
            return false;
          }
        } else if (car.color1 !== color[i] && car.color2 !== color[i]) {
          return false;
        }
      }
    }
    return true;
  }

  const selectSort = (sort) => {
    if (sort === 'name') {
      setSortName(!sortName);
    } else {
      setSortHP(!sortHP);
    }
  }

  let sorted = data.filter(matchesFilter).sort((x, y) => {
    if (sortName && sortHP) {
      const difference = x.name.localeCompare(y.name);

      if (difference === 0) {
        return x.total - y.total;
      }
      return difference;
    } else if (sortName) {
      return x.name.localeCompare(y.name);
    } else if (sortHP) {
      return x.total - y.total;
    } else {
      return 0;
    }
  })

  return (
    <ChakraProvider>
      <Center>
        <Heading as='h1' size='3xl' py={10} color={'red'}>| The Garage |</Heading>
      </Center>

      <Grid templateColumns='repeat(5, 1fr)' templateRows='repeat(1, 1fr)' px={5}>
        <GridItem colSpan={4}>
          <Center>
            <SimpleGrid
              columns={[1, null, 2, null, 4]}
              spacing={4}
            >
              {sorted.map((item, idx) =>
                <Box key={idx}>
                  <CarCard
                    name={item.name}
                    color1={item.color1}
                    color2={item.color2}
                    total={item.total}
                    src={`${item.name.toLowerCase()}.png`}
                    onClick={addToShowcases}
                    isShowcase={isShowcase}
                  />
                </Box>)}
            </SimpleGrid>
          </Center>
        </GridItem>

        <GridItem colSpan={1}>
          <Heading as='h2' size='md' py={3} px={3} color={'red'}>Sort & Filter</Heading>
          <Sidebar
              onSelect={selectFilter}
              onSelectSort={selectSort}
          />
          <Box>
            <Heading as='h3' size='md' py={3} px={3} color={'red'}>Showcase Cars</Heading>
            {showcases.map((car, idx) =>
                <Box key={idx} p={3} color='gray'>
                  {car}
                </Box>)}
            <Heading as='h4' size='sm' py={3} px={3}>Total HP: {totalHP}</Heading>
          </Box>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
