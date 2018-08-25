import styled from 'styled-components';
import {WHITE} from './colours';

export const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;

export const HeaderWrap = styled.header`
  display: flex;
  flex-wrap: wrap;
  background-color: ${WHITE};
  padding: 4rem;
`;

export const Grid = styled.div`
  width: 100%;
  @media(min-width: 900px) {
    width: ${props => (props.size / 12) * 100}%;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  display: inline-block;
  min-width: 200px;
  margin-bottom: 0.5rem;
`;
