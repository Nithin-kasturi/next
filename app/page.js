import Link from "next/link";
import TestComponent from "./_Components/page";
import TestComponent2 from "@/Components/page";
export default async function Home({ params }) {
  return (
    <>
      <h1>This is home page</h1>
      <h1>Here are the links</h1>
      <TestComponent />
      <Link href="/about">About</Link>
      <Link href="/services">Servies</Link>
      <Link href="/blogs">Blogs</Link>
      <TestComponent2 />
    </>
  );
}
