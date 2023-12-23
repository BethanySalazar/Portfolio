import styled from 'styled-components'
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  z-index: 1;
`
export const StyledLink = styled.a`
  font-size: ${props => (props.bold === 'true' ? '20px' : 'default')};
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
  display: inline-block;
  vertical-align: middle;

  &:hover {
    text-decoration: underline;
    font-weight: bold;
    filter: brightness(1.2);
  }
`
