import React from "react";
import { Search } from "lucide-react";
import Section from "./Section";
import AuditAccordion from "./AuditAccordion";
import AuditTable from "./AuditTable";
import auditData from "../data/codeAuditData.json";

const CodeAudit = () => {
  return (
    <Section id="code-audit" title="Code Audit" Icon={Search}>
      <div className="bg-gray-900 rounded-lg p-6 shadow-lg overflow-x-auto border border-gray-700">
        <div className="hidden md:block">
          <AuditTable auditData={auditData} />
        </div>
        <div className="md:hidden">
          <AuditAccordion auditData={auditData} />
        </div>
      </div>
    </Section>
  );
};

export default CodeAudit;
