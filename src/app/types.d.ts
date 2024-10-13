type IconType = keyof typeof iconComponents;

export interface AuditItem {
  icon: IconType;
  problem: string;
  solution: string;
  impact: string;
  title: string;
}
