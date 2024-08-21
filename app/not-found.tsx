'use client'
import Image from "next/image";
import Link from "next/link";
Image
export default function NotFound() {
  return (
    <div className="w-ful min-h-screen flex justify-center items-center flex-col text-center">
      <div className="text-center space-y-4">
        <Image
          src="https://www.svgrepo.com/show/452102/slack.svg"
          alt="AI Logo"
          width={120}
          height={120}
          className="w-28 m-auto"
        />
        <h2 className="text-5xl">Not Found</h2>
        <p>Could not find requested resource</p>
        <div>
          <Link
            href="/"
            className="bg-myColor hover:bg-myColorHover px-5 py-2 my-5 rounded-sm text-lg text-white"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
