"use client"
import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'IceCream';
        font-weigt: 400;
        src: url('/assets/fonts/IceCreamParty.ttf');
      }

      @font-face {
        font-family: 'IceCreamSolid';
        font-weigt: 400;
        src: url('/assets/fonts/IceCreamPartySolid.ttf');
      }
    `}
  />
);

export default Fonts;