import { Paper, Typography } from "@mui/material";

interface Props {
  message: string;
}

export default function WarningBanner({ message }: Props) {
  return (
    <Paper
      elevation={0}
      style={{
        backgroundColor: "#FEE2E2",
        border: "1px solid #FCA5A5",
      }}
    >
      <Typography variant="body2">{message}</Typography>
    </Paper>
  );
}
