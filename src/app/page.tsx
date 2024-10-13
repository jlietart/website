"use client";

import Header from "@/components/Header";
import Cards from "@/components/Cards";
import Hero from "@/components/Hero";
import CodeAudit from "@/components/CodeAudit";
import CodeMigration from "@/components/CodeMigration";
import FullstackDeveloper from "@/components/FullstackDevelopper";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <div className="flex flex-col items-center justify-center w-full">
        <Hero />
        <Cards />
        <div className="w-full">
          <CodeAudit />
          <CodeMigration />
          <FullstackDeveloper />
        </div>
      </div>
    </div>
  );
}
