"use client";

import "./index.css";

export default function ContainerUI({
  children,
  extraClasses,
  optional,
}: {
  children: React.ReactNode;
  extraClasses?: string;
  optional?: boolean;
}) {
  return (
    <>
      {optional === true ? (
        <>{children}</>
      ) : (
        <div className={`container ${extraClasses || ""}`}>{children}</div>
      )}
    </>
  );
}
