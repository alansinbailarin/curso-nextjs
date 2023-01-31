import Link from "next/link";
import { MainLayout } from "@/components/layouts/MainLayout";

export default function AboutPage() {
  return (
    <MainLayout>
      <div>
        <h1>contact page</h1>
      </div>
      <div>
        <Link href="/">Ir a home</Link>
      </div>
    </MainLayout>
  );
}
