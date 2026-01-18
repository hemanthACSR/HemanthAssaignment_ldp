import { Box, Typography } from "@mui/material";

interface Props {
  label: string;
}

export default function AttachmentItem({ label }: Props) {
  return (
    <Box>
      <Typography variant="body2"> {label}</Typography>
    </Box>
  );
}
