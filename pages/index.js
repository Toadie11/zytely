import Image from "next/image";
import { Inter } from "next/font/google";
import Part1 from "@/components/part1";
import Part2 from "@/components/part2";
import Part3 from "@/components/part3";
import Portfolio from "@/components/portfolio";
import Part4 from "@/components/part4";
import Part5 from "@/components/part5";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Part1></Part1>
      <Part2></Part2>
      <Part3></Part3>
      <Portfolio></Portfolio>
      <Part4></Part4>
    </div>
  );
}
