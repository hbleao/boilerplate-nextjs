import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  background-color: #06092b;
  color: #fff;
  padding: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo {
    width: 25rem;
    margin-bottom: 2rem;
  }

  .title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .description {
    font-size: 2rem;
    font-weight: 400;
  }

  .ilustration {
    margin-top: 3rem;
    width: min(30rem, 100%);
  }
`
