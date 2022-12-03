import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box, 
  Checkbox, 
  Stack
} from '@chakra-ui/react';

const Sidebar = (props) => {
  const [blueChecked, setBlueChecked] = useState(false);
  const [redChecked, setRedChecked] = useState(false);
  const [purpleChecked, setPurpleChecked] = useState(false);
  const [greenChecked, setGreenChecked] = useState(false);
  const [blackChecked, setBlackChecked] = useState(false);
  const [orangeChecked, setOrangeChecked] = useState(false);
  const [yellowChecked, setYellowChecked] = useState(false);
  const [showChecked, setShowChecked] = useState(false);

  return (
    <Accordion defaultIndex={[0,1,2]} allowMultiple minW={'3xs'}>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              Showcase
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Checkbox onChange={(e) => {
            e.preventDefault();
            showChecked ? props.onSelect('Showcase',false) : props.onSelect('Showcase', true)
            setShowChecked(!showChecked);
          }}>Showcased</Checkbox>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              Sort By
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Stack>
            <Checkbox onChange={(e) => {
              e.preventDefault();
              props.onSelectSort('Name');
            }}>Name</Checkbox>
            <Checkbox onChange={(e) => {
              e.preventDefault();
              props.onSelectSort('Hp');
            }}>Horsepower</Checkbox>
          </Stack>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              Colors
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        <Stack>
            <Checkbox onChange={(e) => {
              e.preventDefault();
              blueChecked ? props.onSelect('Blue', false) : props.onSelect('Blue', true)
              setBlueChecked(!blueChecked);
            }}>Blue</Checkbox>

            <Checkbox onChange={(e) => {
              e.preventDefault();
              purpleChecked ? props.onSelect('Purple', false) : props.onSelect('Purple', true)
              setPurpleChecked(!purpleChecked);
            }}>Purple</Checkbox>

            <Checkbox onChange={(e) => {
              e.preventDefault();
              redChecked ? props.onSelect('Red', false) : props.onSelect('Red', true)
              setRedChecked(!redChecked);
            }}>Red</Checkbox>

            <Checkbox onChange={(e) => {
              e.preventDefault();
              blackChecked ? props.onSelect('Black', false) : props.onSelect('Black', true)
              setBlackChecked(!blackChecked);
            }}>Black</Checkbox>

            <Checkbox onChange={(e) => {
              e.preventDefault();
              orangeChecked ? props.onSelect('Orange', false) : props.onSelect('Orange', true)
              setOrangeChecked(!orangeChecked);
            }}>Orange</Checkbox>

            <Checkbox onChange={(e) => {
              e.preventDefault();
              greenChecked ? props.onSelect('Green',false) : props.onSelect('Green', true)
              setGreenChecked(!greenChecked);
            }}>Green</Checkbox>

          <Checkbox onChange={(e) => {
            e.preventDefault();
            yellowChecked ? props.onSelect('Yellow',false) : props.onSelect('Yellow', true)
            setYellowChecked(!yellowChecked);
          }}>Yellow</Checkbox>
          </Stack>
        </AccordionPanel>
      </AccordionItem>

    </Accordion>
  )
}

export default Sidebar;
