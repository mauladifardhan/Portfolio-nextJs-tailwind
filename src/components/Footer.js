import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <layout className="px-32 py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build With <span className="text-primary text-2xl px-1"> &#9825;</span>by&nbsp;
          <Link href="https://instagram.com/thingsuix" target="_blank" className="underline underline-offset-2">
            ThingsUIX
          </Link>
        </div>
        <Link href="https://instagram.com/mauladifardhan" target="_blank">
          Say Hello
        </Link>
      </layout>
    </footer>
  );
};

export default Footer;
