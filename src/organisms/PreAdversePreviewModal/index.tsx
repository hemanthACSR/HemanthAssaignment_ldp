import {
  Dialog,
  DialogContent,
  DialogActions,
  Box,
  Divider,
  Stack,
} from "@mui/material";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
  selectedCharges: string[];
  days: number; 
}

export default function PreAdversePreviewModal({
  open,
  onClose,
  onSubmit,
  selectedCharges,
  days,
}: Props) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent>
        <Text variant="h1">Pre-Adverse Action Notice</Text>

        <Divider style={{ margin: "16px 0" }} />
        <Stack spacing={2}>
              <Text variant="body2">From: Kyle@Checkr.com</Text>
              
              <Text variant="body2">To: John.Smith@Checkr.com</Text>
              
              <Text variant="body2">
                Subject: Pre-Adverse Action Notice - Checkr-Bpo
              </Text>
        </Stack>

        {/* Warning box */}
        <Box
          padding={1}
          marginTop={2}
          borderRadius={1}
          bgcolor="#FEECEC"
          border="1px solid #FCA5A5"
        >

          <Text variant="body2" >
            • Please carefully review the list of charges and your contact
            information.
            <br/>
            • The post-adverse action notice will be sent
            automatically after {days} days.
          </Text>
        </Box>

        <Box marginTop={3}>
          <Text variant="body2">Dear John Smith,</Text>
        </Box>

        <Box marginTop={2}>
          <Text variant="body2">
            You recently authorized checkr-bpo (“the company”) to obtain consumer reports and/or invistigate consumer reportsabout you from a consumer reporting agency. The Company is considering taking action in whole or in past on information in such report(s) including the following specific items identified in the report prepared by Checkr, Inc.
          </Text>
        </Box>

        
        <Box marginTop={2}>
          {selectedCharges.map((charge) => (
            <Text key={charge} variant="body2">
              • {charge}
            </Text>
          ))}
        </Box>

        <Box marginTop={2}>
          <Text variant="body2">
            Sincerely,
            <br />
            Checkr-bpo
          </Text>
        </Box>

        <Box marginTop={3}>
          <Text variant="h2">Attachments</Text>
          <Text variant="body2">Summary of your rights under the FCRA</Text>
          <Text variant="body2">Copy of background report</Text>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button label="Submit Notice" onClick={onSubmit} />
      </DialogActions>
    </Dialog>
  );
}
