import styled from 'styled-components'
export const MainContainer = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px;
`
export const Title = styled.h1`
  padding-right: 20px;
`
export const TabsContainer = styled.div`
  // border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-end;
`
export const Tab = styled.div`
  // border: 1px solid red;
  height: fit-content;
  display: flex;
  word-wrap: break-word;
  justify-content: flex-end;
  padding: 0px 0px 0px 10px;
  
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    font-weight: bold;
    filter: brightness(1.2);
  }
`
