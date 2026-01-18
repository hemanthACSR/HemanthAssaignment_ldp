import { Typography } from "@mui/material";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant?: "h1" | "body1" | "body2"|"h2";
  color?:string;
}

export default function Text({ children, variant = "body1" }: Props) {
  return <Typography variant={variant}>{children}</Typography>;
}
