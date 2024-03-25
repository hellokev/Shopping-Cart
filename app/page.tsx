import Image from "next/image";
import Link from 'next/link';
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1 className="text-3xl font-bold underline pt-20">Welcome to Kevmazon!</h1>
    </div>
  );
}
