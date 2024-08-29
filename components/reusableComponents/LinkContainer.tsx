"use client";
import React from "react";
import Link from "next/link";

interface LinkContainerProps {
  href: string;
  linkName: string;
  className?: string;
}

const LinkContainer: React.FC<LinkContainerProps> = ({
  href,
  linkName,
  className,
}) => {
  return (
    <Link href={href} className={className}>
      {linkName}
    </Link>
  );
};

export default LinkContainer;
