"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import iconOnly from "@/public/innsight_icon.png";
export function WelcomeCard() {
  return (
    <div className="w-full px-4">
      <div className="mx-auto md:mx-0 md:w-1/2">
        {/* Gradient border wrapper */}
        <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-violet-100 via-white to-cyan-100">
          {/* Glow orbs */}
          <div className="pointer-events-none absolute -top-10 -left-10 h-32 w-32 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />

          {/* Card body */}
          <Card className="relative overflow-hidden rounded-[14px] border border-white/10 bg-background/70 shadow-xl backdrop-blur-md transition-transform duration-300 ease-out hover:-translate-y-0.5">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_400px_at_10%_-20%,rgba(124,58,237,0.15),transparent_60%),radial-gradient(800px_300px_at_110%_120%,rgba(34,211,238,0.15),transparent_60%)]" />

            <CardContent className="relative z-10 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 ring-1 ring-white/10">
                  <Image
                    src={iconOnly}
                    alt="innsight_icon"
                    className="h-10 w-10 text-violet-400 drop-shadow-sm"
                  />
                </div>

                <div className="space-y-2">
                  <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                    Welcome to{" "}
                    <span className="relative font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-400 to-amber-300">
                      InnRack
                      <span
                        className="absolute inset-0 text-white opacity-0 [text-shadow:0_0_6px_rgba(255,255,255,0.6)] group-hover:opacity-100 transition-opacity duration-300"
                        aria-hidden="true"
                      >
                        InnRack
                      </span>
                    </span>
                    .
                  </h1>

                  <p className="text-muted-foreground leading-relaxed">
                    Your goals, your progress—visible{" "}
                    <span className="relative inline-block font-medium">
                      <span className="relative font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-amber-300 to-fuchsia-400">
                        on sight
                        <span
                          className="absolute inset-0 text-white opacity-0 [text-shadow:0_0_6px_rgba(255,255,255,0.6)] group-hover:opacity-100 transition-opacity duration-300"
                          aria-hidden="true"
                        >
                          on sight
                        </span>
                      </span>
                      <span className="pointer-events-none absolute inset-0 animate-[shine_2.8s_ease-in-out_infinite] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.35),transparent)] [mask-image:linear-gradient(#000,transparent_60%)]" />
                    </span>
                    .
                  </p>
                </div>
              </div>

              {/* Bottom metrics */}
              <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
                <div className="rounded-lg border p-3">
                  <p className="text-xs text-muted-foreground">
                    Strategic Focus
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    Prioritize what matters
                  </p>
                </div>
                <div className="rounded-lg border p-3">
                  <p className="text-xs text-muted-foreground">
                    Goal Transparency
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    Everyone sees the why
                  </p>
                </div>
                <div className="rounded-lg border p-3">
                  <p className="text-xs text-muted-foreground">Clarity</p>
                  <p className="text-sm font-medium text-foreground">
                    See what matters
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Shimmer keyframe */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(120%);
          }
        }
      `}</style>
    </div>
  );
}
