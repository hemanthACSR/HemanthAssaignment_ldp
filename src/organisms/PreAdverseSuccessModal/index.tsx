import { Dialog, DialogContent, Box } from "@mui/material";
import Text from "../../atoms/Text";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function PreAdverseSuccessModal({ open, onClose }: Props) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: "696px",
          height: "424px",
          borderRadius: "12px",
        },
      }}
    >
      <DialogContent
        sx={{
          padding: 0,
          height: "100%",
        }}
      >
        <Box
          width="100%"
          paddingTop="320px"
          textAlign="center"
        >
          <Text variant="h2">
            Pre-Adverse Action notice successfully sent
          </Text>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
