import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Link href={`/Sales/${""}`}>
        <h1>Home</h1>
      </Link>
    </div>

  );
}
