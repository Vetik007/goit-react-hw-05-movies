import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const Details = styled.div`
  display: flex;
  justify-content: center;
`;
export const DetailsImg = styled.div`
  margin-right: 30px;
`;

export const Img = styled.img`
  width: 250px;
`;

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 30px;
  list-style: none;
  padding-bottom: 15px;
  border-bottom: 1px solid black;
  color: black;
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: black;
  outline: 2px solid black;
  border-radius: 5px;
  padding: 5px;

  :hover {
    background: tomato;
    color: white;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 14px;
  border: 1px solid #0d57aa;
  border-radius: 6px;
  background-color: #b5d1f2;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: #0d57aa;
    color: #ffffff;
  }
`;

// =========================================

export const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  padding: 8px 14px;

  font-weight: 500;
  font-size: 18px;

  border-radius: 4px;

  border: none;
  color: var(--accent);
  background-color: var(--bg);
  box-shadow: var(--main-shadow);

  transition: all 200ms ease-in-out;
  cursor: pointer;

  :hover,
  :focus-visible {
    color: var(--bg);
    background-color: var(--accent);
  }

  :focus {
    outline: 3px solid var(--bg);
    box-shadow: 0px 0px 0px 6px var(--accent);
  }
`;

// export const Container = styled.div`
//   margin: 20px 0;
//   display: flex;
//   gap: 10px;
// `;

export const AddInfo = styled(NavLink)`
  display: inline-block;
  padding: 8px 14px;

  font-weight: 500;
  font-size: 18px;

  border-radius: 4px;

  border: none;
  color: var(--accent);
  background-color: var(--bg);
  box-shadow: var(--main-shadow);

  transition: all 200ms ease-in-out;
  cursor: pointer;

  &.active {
    color: var(--bg);
    background-color: var(--accent);
    box-shadow: var(--main-shadow);
  }

  :hover,
  :focus-visible {
    color: var(--bg);
    background-color: var(--accent);
  }

  :focus {
    outline: 3px solid var(--bg);
    box-shadow: 0px 0px 0px 6px var(--accent);
  }
`;
