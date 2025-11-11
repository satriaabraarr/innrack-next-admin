"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "@/public/innsight_logo.png";
import { ShimmeringText } from "./ui/shadcn-io/shimmering-text";

const taglines = [
  "See What Matters—On Sight.",
  "Measure What Matters—By Design.",
];

export default function LoadingComponent() {
  const [currentTagline, setCurrentTagline] = useState(taglines[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * taglines.length);
      setCurrentTagline(taglines[randomIndex]);
    }, 600); // 600ms

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center h-screen text-center">
      <Image src={logo} alt="logo_innsight" height={250} width={250} />
      <ShimmeringText className="font-semibold" text={currentTagline} />
    </main>
  );
}
