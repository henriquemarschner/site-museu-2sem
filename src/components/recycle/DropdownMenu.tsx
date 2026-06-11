"use client";

import { IoMdArrowDropdown } from "react-icons/io";
import { useState, ReactNode } from "react";
import Link from "next/link";

type DropdownMenuProps = {
  label: string;
  items: Array<{
    key: string | number;
    content: ReactNode;
    href?: string;
    onClick?: () => void;
  }>;
};

export default function DropdownMenu({ label, items }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  return (
    <li
      className="border-b-2 border-white hover:border-b-2 hover:border-blue-950 cursor-pointer"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="relative flex items-center">
        <span className="font-semibold text-blue-950">{label}</span>
        <IoMdArrowDropdown className="w-4 h-4 pt-0.5" />
        {open && (
          <div className="absolute top-6 left-0 w-full text-center shadow-lg bg-white z-10">
            <ul className="font-semibold text-blue-950">
              {items.map((item) => (
                <li
                  key={item.key}
                  className="py-1 hover:bg-gray-100"
                  onClick={item.onClick}
                >
                  {item.href ? (
                    item.href.startsWith("/") ? (
                      <Link
                        href={item.href}
                        className="block w-full h-full px-2 py-1"
                      >
                        {item.content}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="block w-full h-full px-2 py-1"
                        target={
                          item.href.startsWith("#") ? undefined : "_blank"
                        }
                        rel={
                          item.href.startsWith("#")
                            ? undefined
                            : "noopener noreferrer"
                        }
                      >
                        {item.content}
                      </a>
                    )
                  ) : (
                    item.content
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </li>
  );
}
