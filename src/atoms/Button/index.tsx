import { Button as MuiButton } from "@mui/material";

interface Props {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "contained" | "outlined";
}

export default function Button({
  label,
  onClick,
  disabled,
  variant = "contained", 
}: Props) {
  return (
    <MuiButton
      variant={variant}
      color="primary"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </MuiButton>
  );
}
