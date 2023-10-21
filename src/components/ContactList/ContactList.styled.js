import styled from 'styled-components';

export const List = styled.ul`
  background: var(--white);
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  border-radius: 5px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  column-gap: 15px;

  p {
    min-width: 300px;
    margin-bottom: 0;
  }
`;
