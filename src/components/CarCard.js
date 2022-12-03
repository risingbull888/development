import React from 'react';

import {
  Card,
  CardBody,
  Stack,
  CardFooter,
  Heading,
  Text,
  Divider,
  Button,
  Image,
  HStack,
  Tag,
  TagLabel,
} from '@chakra-ui/react';

const CarCard = (props) => {
  const isShowcase = props.isShowcase(props.name);

  const getColors = (color1, color2) => {
    const colors = [];

    if (color1 === 'Blue' || color2 === 'Blue') {
      colors.push(['Blue', 'blue']);
    }

    if (color1 === 'Purple' || color2 === 'Purple') {
      colors.push(['Purple', 'purple']);
    }

    if (color1 === 'Black' || color2 === 'Black') {
      colors.push(['Black', 'gray']);
    }

    if (color1 === 'Orange' || color2 === 'Orange') {
      colors.push(['Orange', 'orange']);
    }

    if (color1 === 'Red' || color2 === 'Red') {
      colors.push(['Red', 'red']);
    }

    if (color1 === 'Green' || color2 === 'Green') {
      colors.push(['Green', 'green']);
    }

    if (color1 === 'Yellow' || color2 === 'Yellow') {
      colors.push(['Yellow', 'yellow']);
    }

    return colors;
  }

  return <Card maxW='sm' boxShadow='lg'>
    <CardBody>
      <Image
        src={props.src}
        alt={props.name}
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <HStack spacing={3}>
          {
            getColors(props.color1, props.color2).map((car, index) => (
              <Tag size={'lg'} key={index} variant='outline' colorScheme={car[1]}>
                <TagLabel>{car[0]}</TagLabel>
              </Tag>
            ))}
        </HStack>
        <Heading size="lg">{props.name}</Heading>
        <Text>Total Horsepower: {props.total}{" HP"}</Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <Button variant={!isShowcase ? 'solid' : 'outline'} colorScheme='red' onClick={() =>
        {
          props.onClick([props.name, props.total], !isShowcase);
        }}>{ !isShowcase ? 'Add to Showcase' : 'Remove from Showcase' }
        </Button>
    </CardFooter>
  </Card>
}

export default CarCard;
