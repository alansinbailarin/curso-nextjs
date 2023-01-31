import { MainLayout } from "@/components/layouts/MainLayout";
import Link from "next/link";

export default function Pricing() {
  return (
    <MainLayout>
      <div>
        <h1>Pricing page</h1>
      </div>
      <div>
        <Link href="/about">Ir a about</Link>
      </div>
    </MainLayout>
  );
}
