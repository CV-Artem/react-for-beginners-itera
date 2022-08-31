import React from 'react';

export type FooterProps = {
    copyright:string;
  }
export const Footer: React.FC<FooterProps> = (props) => (<footer>{props.copyright} 2022</footer>);
