import Head from "next/head";
import Link from "next/link";

import { Navbar } from "../Navbar";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>My App</title>
        <meta name="description" content="Contact content" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <div>{children}</div>
      </main>
    </>
  );
};
