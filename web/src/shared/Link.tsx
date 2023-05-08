import React from 'react';
import styled from 'styled-components';

const LinkStyled = styled.a`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 20px;
  &::after {
    content: "";
    display: block;
    width: 107%;
    margin-top: -8px;
    margin-left: -3%;
    border-bottom: 8px solid #3CEEB5;
    border-radius: 999px;
    transition: all .2s ease;
  }
  &:hover {
    transform: translateY(2px);
  }
`

interface LinkProps {
  children: React.ReactNode,
  href: string,
}

const Link: React.FC<LinkProps> = ({ children, href }) => {
  return (
    <LinkStyled href={href}>{children}</LinkStyled>
  )
}

export default Link;