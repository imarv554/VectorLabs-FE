"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center p-4">
      <h1 className="text-9xl font-bold mb-4">404</h1>
      <h2 className="text-4xl font-semibold mb-4">Oops! Page Not Found</h2>
      <p className="text-lg mb-8">
        You will be redirected to the homepage in 5 seconds.
      </p>
    </div>
  );
};

export default ErrorPage;
