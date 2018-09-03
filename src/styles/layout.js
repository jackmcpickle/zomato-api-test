import styled from 'styled-components';
import {WHITE, LIGHT_GREY, GHOST, LIGHT_BLUE} from './colours';

export const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;

export const HeaderWrap = styled.header`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  background-color: ${WHITE};
  padding: 4rem;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Grid = styled.div`
  width: 100%;
  padding: 1rem 0;
  flex-grow: ${props => (props.grow ? 1 : 0)};

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
  min-width: 130px;
  margin-bottom: 0.5rem;
`;

export const SideBarStyle = styled(Grid)`
  background-color: ${GHOST};
`;

export const RestName = styled.li`
  padding: 0.7rem 2rem;
  border-bottom: 1px solid ${LIGHT_GREY};
  cursor: pointer;

  &:hover {
    background-color: ${LIGHT_BLUE};
    color: ${WHITE};
  }
`
export const HeaderLock = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background-color: rgba(255, 255, 255, 0.5);
`
export const RestaurantShow = styled(Row)`
  padding: 2rem;
`