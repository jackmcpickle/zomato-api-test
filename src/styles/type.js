import styled from 'styled-components';
import {GREY, BLACK, LIGHT_GREY} from './colours';


export const SmallHeading = styled.h2`
  margin: 0;
  font-size: 1rem;
  text-transform: uppercase;
  color: ${GREY};
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  margin-top: 0;
  font-size: 3rem;
  color: ${BLACK};
`;

export const SmallListHeading = styled(SmallHeading)`
  padding: 1rem 2rem;
  font-size: 0.9rem;
  margin: 0;
  border-bottom: 1px solid ${LIGHT_GREY};

`;
