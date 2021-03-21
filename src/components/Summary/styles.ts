import styled from 'styled-components';

interface ValorProps {
  valor: number;
  //activeColor: 'green' | 'red';
}

// const colors = {
//   red: '#E62E4D',
//   green: '#33CC95',
// }

export const Container = styled.div<ValorProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
    //background: var(--green);
    background: ${(props) => props.valor > 0
    ? '#33CC95'
    : '#E62E4D'};
    color: #fff;

    }
  }
`;
