"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import logo from "@/public/innsight_logo.png";
import Image from "next/image";
import { RollingText } from "@/components/ui/shadcn-io/rolling-text";

const taglines = [
  "See What Matters—On Sight.",
  "Measure What Matters—By Design.",
];

export default function AuthCallbackClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentTagline, setCurrentTagline] = useState(taglines[0]);
  useEffect(() => {
    const accessToken = searchParams.get("accessToken");
    const refreshToken = searchParams.get("refreshToken");
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * taglines.length);
      setCurrentTagline(taglines[randomIndex]);
    }, 2500); // 1000ms

    if (!accessToken || !refreshToken) {
      router.replace("/login");
      return;
    }

    // Kirim ke server untuk disimpan sebagai HttpOnly cookie
    fetch("/api/set-token", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ accessToken, refreshToken }),
    }).then(() => {
      router.replace("/dashboard");
    });

    return () => clearInterval(interval);
  }, [router, searchParams]);

  return (
    <main className="flex flex-col items-center justify-center h-screen text-center">
      <Image src={logo} alt="logo_innsight" height={250} width={250} />
      <RollingText className="font-bold" text={currentTagline} />
    </main>
  );
}
