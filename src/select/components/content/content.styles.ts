import styled from 'styled-components';

const Content = styled.span``;

const Pill = styled.span`
  padding: 0.25rem;

  border-radius: 0.25rem;
  
  background-color: #4a99d5;
  color: #fff;
  
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

const DeleteButton = styled.button`
  margin-left: 0.5rem;
  padding: 0.25rem;
  
  border: none;
  background: none;
  
  color: #fff;
`;

const Placeholder = styled.span`
  color: #656565;
`;

const Styled = { Content, Pill, DeleteButton, Placeholder };

export default Styled;