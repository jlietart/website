import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Zap, Bug, TrendingUp, DollarSign, Users, Laptop } from "lucide-react";
import { motion } from "framer-motion";
import { AuditItem } from "@/app/types";

interface AuditTableProps {
  auditData: AuditItem[];
}

const iconComponents = {
  Zap,
  Bug,
  TrendingUp,
  DollarSign,
  Users,
  Laptop,
};

const AuditTable: React.FC<AuditTableProps> = ({ auditData }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-b border-gray-700">
          <TableHead className="w-1/3 text-xl font-bold text-center py-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Problem
            </span>
          </TableHead>
          <TableHead className="w-1/3 text-xl font-bold text-center py-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Solution
            </span>
          </TableHead>
          <TableHead className="w-1/3 text-xl font-bold text-center py-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Impact
            </span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {auditData.map((item, index) => (
          <motion.tr
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: (i) => ({
                opacity: 1,
                y: 0,
                transition: {
                  delay: i * 0.1,
                  duration: 0.5,
                },
              }),
            }}
            className="border-b border-gray-700 hover:bg-gray-800 transition-colors duration-300"
          >
            <TableCell className="font-medium text-gray-300 text-lg py-6 px-4">
              {React.createElement(
                iconComponents[item.icon as keyof typeof iconComponents],
                {
                  className: "inline mr-2",
                }
              )}
              {item.problem}
            </TableCell>
            <TableCell className="text-gray-300 text-lg py-6 px-4">
              {item.solution}
            </TableCell>
            <TableCell className="text-gray-300 text-lg py-6 px-4">
              {item.impact}
            </TableCell>
          </motion.tr>
        ))}
      </TableBody>
    </Table>
  );
};

export default AuditTable;
