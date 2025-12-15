import { notFound } from "next/navigation";

export default async function About({ params }) {
  const { about } = await params;
  console.log(about);
  if (!about) {
    notFound();
  }
  return <h1>About page {about}</h1>;
}
