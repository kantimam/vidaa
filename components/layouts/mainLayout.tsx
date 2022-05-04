import React, { PropsWithChildren } from "react";
import Link from "next/link";
import Nav from "../nav";

type Props = {};

const MainLayout = (props: PropsWithChildren<{}>) => (
  <>
    <header>
      <Nav />
    </header>
    {props.children}
    <footer>footer stuff</footer>
  </>
);

export default MainLayout;
