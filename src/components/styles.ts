import styled from 'styled-components';

export const LinkTreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  width: 700px;
  align-items: center;
  flex-wrap: wrap;
`;

export const Link = styled.a`
  width: 100%;
  padding: 20px 20px;
  margin-bottom: 10px;
  background-color: transparent;
  border: 2px solid;
  border-image: linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%);
  border-image-slice: 1;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 1rem;
`;