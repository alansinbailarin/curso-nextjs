import Link from "next/link";
import { MainLayout } from "@/components/layouts/MainLayout";
import { DarkLayout } from "@/components/layouts/DarkLayout";

export default function AboutPage() {
  return (
    <>
      <div>
        <h1>About page</h1>
      </div>
      <div>
        <Link href="/">Ir a home</Link>
      </div>
    </>
  );
}

AboutPage.getLayout = (page) => {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
