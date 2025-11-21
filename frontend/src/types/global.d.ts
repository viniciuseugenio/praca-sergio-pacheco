import type { LucideProps } from "lucide-react";

export type LucideIcon = React.ForwardRefExoticComponent<
  Omit<LucideProps, "omit">
>;
