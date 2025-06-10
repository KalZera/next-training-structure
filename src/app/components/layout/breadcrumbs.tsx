"use client";

import React, { ReactNode } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

export function Breadcrumbs({
  homeElement,
  separator,
  capitalizeLinks,
}: TBreadCrumbProps) {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  //rude implementation
  if (pathNames[0] === "product") {
    pathNames.pop();
  }

  return (
    <div className="breadcrumbs">
      <ul className="flex gap-3">
        <Link href="/home">
          <li>{homeElement}</li>
        </Link>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join("/")}`;
          const itemClasses = paths === href ? "active" : "";
          const itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;
          return (
            <React.Fragment key={index}>
              <li key={index} className={itemClasses}>
                {index === pathNames.length - 1 && (
                  <Link href={href}>{itemLink}</Link>
                )}
                {index !== pathNames.length - 1 && (
                  <Link href={href}>{itemLink}</Link>
                )}
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}
