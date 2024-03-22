import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Welcome to Kevmazon!</h1>;
      <nav>
      <Link href="/shop">
        Shop
      </Link>
      </nav>
    </div>
  );
}
