'use client'
import Image from "next/image";
import Link from "next/link";
Image
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center w-ful">
      <div className="space-y-4 text-center">
        <Image
          src="https://www.svgrepo.com/show/452102/slack.svg"
          alt="AI Logo"
          width={120}
          height={120}
          className="m-auto w-28"
        />
        <h2 className="text-5xl">Not Found</h2>
        <p>Could not find requested resource</p>
        <div>
          <Link
            href="/"
            className="px-5 py-2 my-5 text-lg text-white rounded-sm bg-myColor hover:bg-myColorHover"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
