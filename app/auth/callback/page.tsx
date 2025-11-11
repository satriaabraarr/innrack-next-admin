import { Suspense } from "react";
import AuthCallbackClient from "./auth-callback-client";
import { Skeleton } from "@/components/ui/skeleton";

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={<Skeleton />}>
      <AuthCallbackClient />
    </Suspense>
  );
}
