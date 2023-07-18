import { styled } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 2rem;
`;

const Grid = styled.div`
  display: grid;
  width: 50vw;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
`;

const Box = styled(motion.div)`
  height: 200px;
  background-color: #ffffff97;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  &:first-child {
    transform-origin: right bottom;
  }
  &:nth-child(2) {
    transform-origin: left bottom;
  }
  &:nth-child(3) {
    transform-origin: right top;
  }
  &:last-child {
    transform-origin: left top;
  }
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    zIndex: 99,
    scale: 1.3,
    transition: { type: 'tween', duration: 0.3 },
  },
};

const Circle = styled(motion.div)`
  background-color: rgb(254, 255, 134);
  height: 70px;
  width: 70px;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Btn = styled.button`
  border: none;
  background-color: #fff;
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  color: blue;
  &:hover {
    color: orange;
    scale: 1.1;
  }
`;

function App() {
  const [id, setId] = useState<null | string>(null);
  const [btnClicked, setBtnClicked] = useState(false);
  const toggleClicked = () => setBtnClicked((prev) => !prev);
  return (
    <Wrapper>
      <Grid>
        <Box
          onClick={() => setId('1')}
          key={'1'}
          layoutId={'1'}
          variants={BoxVariants}
          initial='noraml'
          whileHover='hover'></Box>
        <Box
          onClick={() => setId('2')}
          key={'2'}
          layoutId={'2'}
          variants={BoxVariants}
          initial='noraml'
          whileHover='hover'>
          {!btnClicked ? <Circle layoutId='circle' /> : null}
        </Box>
        <Box
          onClick={() => setId('3')}
          key={'3'}
          layoutId={'3'}
          variants={BoxVariants}
          initial='noraml'
          whileHover='hover'>
          {btnClicked ? <Circle layoutId='circle' /> : null}
        </Box>
        <Box
          onClick={() => setId('4')}
          key={'4'}
          layoutId={'4'}
          variants={BoxVariants}
          initial='noraml'
          whileHover='hover'></Box>
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            animate={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            exit={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
            <Box
              layoutId={id}
              style={{
                width: 400,
                height: 200,
                backgroundColor: 'rgba(255,255,255,1)',
              }}></Box>
          </Overlay>
        ) : null}
      </AnimatePresence>
      <Btn onClick={toggleClicked}>click</Btn>
    </Wrapper>
  );
}

export default App;
