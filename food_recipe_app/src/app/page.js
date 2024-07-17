import Link from "next/link";

export default function Home() {
  return (
  <div>
    <h1>welcom to food recipe app</h1>
    <Link href="/recipe-list">some recipes</Link>
  </div>
  );
}
