import styled from 'styled-components';

export const Container = styled.div`
  margin: ${({ theme }) => theme.spacing.xl};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xl};
`;
