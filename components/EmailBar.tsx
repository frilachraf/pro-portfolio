import Link from "next/link";
import React from "react";

const EmailBar: React.FC = () => {
    return (
        <div
  style={{
    fontFamily: "monospace",
    letterSpacing: "0.05em",
    zIndex: 1000,
  }}
  className="fixed top-[50vh] -translate-y-[100%] -translate-x-10 rotate-90 "
>
  <Link href="mailto:your.email@example.com" className="">
    frilachraf.dev@gmail.com
  </Link>
</div>
    );
};

export default EmailBar;