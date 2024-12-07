"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

function Page() {
  const success = useSelector((state) => state.auth.user.ok);
  const router = useRouter();

  useEffect(() => {
    if (!success) {
      router.push("/"); // Agar success false bo'lsa, asosiy sahifaga o'tadi
    }
  }, [success, router]); // success yoki router o'zgarishiga bog'liq

  return <div>Dashboard</div>;
}

export default Page;
