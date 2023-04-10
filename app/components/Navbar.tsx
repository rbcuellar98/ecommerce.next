"use client";

import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Navbar({ user }: Session) {
  return (
    <nav className="flex justify-between items-center py-8">
      <h1>Couture</h1>
      <ul className="flex items-center gap-12">
        {/* If the user is not sign in */}
        {!user && (
          <li className="bg-teal-600 text-white py-2 px-4 rounded-md">
            <button onClick={() => signIn()}> Sign in </button>
          </li>
        )}
        {/* If the user is sign in */}
        {user && (
          <div>
            <li>
              <Image
                src={user?.image as string}
                alt={user.name as string}
                width={48}
                height={48}
                className="rounded-full"
              />
            </li>
            <li>Dashboard</li>
          </div>
        )}
      </ul>
    </nav>
  );
}
