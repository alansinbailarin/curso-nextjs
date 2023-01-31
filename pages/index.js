import Head from "next/head";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { MainLayout } from "@/components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div>
        <h1>asd page</h1>
      </div>
      <div>
        <Link href="/about">Ir a about</Link>
      </div>
    </MainLayout>
  );
}
