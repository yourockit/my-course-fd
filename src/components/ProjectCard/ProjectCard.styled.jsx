import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const CardContainer = styled(motion.div)`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  margin-bottom: -120px;
`;

export const CardContant = styled(motion.div)`
  /* width: 166px;
  height: 216px; */
  position: absolute;
  top: -100px;
  right: 0;
  border-radius: 20px;
  box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075),
    0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075),
    0 0 16px hsl(0deg 0% 0% / 0.075);
  transform-origin: 10% 60%;
`;
