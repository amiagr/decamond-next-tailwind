"use client"

import React, {useEffect, useState} from "react";
import { useRouter } from "next/navigation";

export default function Welcome() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      return;
    }
    setUser(JSON.parse(storedUser));
  }, [router]);

  return (
    <div className="p-2 text-gray-400 bg-white dark:bg-gray-900 sm:px-5 sm:py-2">
      <h1>Welcome to the Dashboard</h1>
      <p>👋 Hi {user?.name.first} {user?.name.last}</p>
    </div>
  );
}
