import Link from "next/link";
export default async function Home({ params }) {
  return (
    <>
      <h1>This is home page</h1>
      <h1>Here are the links</h1>

      <Link href="/about">About</Link>
      <Link href="/services">Servies</Link>
      <Link href="/blogs">Blogs</Link>
    </>
  );
}
