import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;

  header {
    background-color: var(--color-rad-700);
  }

  main {
    display: flex;
    gap: 20px
  }
`

export const Board = styled.ul`
  background-color: var(--color-rad-400);
  height: 100vh;
  width: 300px;
  list-style: none;
`