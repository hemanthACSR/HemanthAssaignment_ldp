import { useState } from "react";
import PreAdverseSuccessModal from "../../organisms/PreAdverseSuccessModal";
import { useNavigate } from "react-router-dom";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

import {
  Box,
  Stack,
  Paper,
  Divider,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";

import Sidebar from "../../organisms/Sidebar";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";
import PreAdversePreviewModal from "../../organisms/PreAdversePreviewModal";

export default function PreAdverseActionNotice() {
  const [openPreview, setOpenPreview] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [days, setDays] = useState<number>(7);
  const navigate = useNavigate();
  const handleSuccessClose = () => {
    navigate("/candidate-details", { replace: true });
  };

  const [selectedCharges, setSelectedCharges] = useState({
    driving: false,
    assault: false,
    employment: false,
  });

  const isAnyChargeSelected = Object.values(selectedCharges).some(Boolean);

  const selectedChargeLabels: string[] = [];

  if (selectedCharges.driving)
    selectedChargeLabels.push("Driving while license suspended");

  if (selectedCharges.assault)
    selectedChargeLabels.push("Assault Domestic Violence");

  if (selectedCharges.employment)
    selectedChargeLabels.push(
      "Unable to verify employment history at Dunder Mifflin"
    );

  return (
    <>
      <Box display="flex" minHeight="100vh" padding={3}>
        <Box width={260}>
          <Sidebar />
        </Box>

        <Box flex={1} marginLeft={3}>
          <Stack direction="row" alignItems="center" marginBottom={3}>
            <ArrowBackOutlinedIcon/> <Text variant="h1"> Pre-Adverse Action Notice</Text>
          </Stack>
          <Paper>
            <Stack spacing={2}>
              <Text variant="body2">From: Kyle@Checkr.com</Text>
              <Divider />
              <Text variant="body2">To: John.Smith@Checkr.com</Text>
              <Divider />
              <Text variant="body2">
                Subject: Pre-Adverse Action Notice - Checkr-Bpo
              </Text>
              <Divider />
            </Stack>

            <Box marginTop={3}>
              <Text variant="body2">Dear John Smith,</Text>

              <Box marginTop={2}>
                <Text variant="body2">
                  You recently authorized checkr-bpo (“the company”) to obtain consumer reports and/or invistigate consumer reportsabout you from a consumer reporting agency. The Company is considering taking action in whole or in past on information in such report(s) including the following specific items identified in the report prepared by Checkr, Inc.
                </Text>
              </Box>

              <Box marginTop={3}>
                <Text variant="body1">
                  Select the charges for the Pre-Adverse Action
                </Text>

                <Stack marginTop={2}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedCharges.driving}
                        onChange={(e) =>
                          setSelectedCharges({
                            ...selectedCharges,
                            driving: e.target.checked,
                          })
                        }
                      />
                    }
                    label="Driving while license suspended"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedCharges.assault}
                        onChange={(e) =>
                          setSelectedCharges({
                            ...selectedCharges,
                            assault: e.target.checked,
                          })
                        }
                      />
                    }
                    label="Assault Domestic Violence"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedCharges.employment}
                        onChange={(e) =>
                          setSelectedCharges({
                            ...selectedCharges,
                            employment: e.target.checked,
                          })
                        }
                      />
                    }
                    label="Unable to verify employment history at Dunder Mifflin"
                  />
                </Stack>
              </Box>

              <Box marginTop={3}>
                <Text variant="body2">
                  If you wish to dispute the accuracy of the information in the
                  report directly with the consumer reporting agency, you should
                  contact the agency identified above directly.
                </Text>
              </Box>

              <Box marginTop={3}>
                <Text variant="body2">
                  Sincerely,
                  <br />
                  Checkr-bpo
                </Text>
              </Box>
            </Box>

            {/* Footer */}
            <Divider style={{ marginTop: 24 }} />

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              marginTop={3}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <Text variant="body2">Auto send post adverse action</Text>
                <TextField
                  type="number"
                  size="small"
                  value={days}
                  onChange={(e) => {
                    const value = Number(e.target.value);

                    if (value >= 1 && value <= 30) {
                      setDays(value);
                    }
                  }}
                  inputProps={{
                    min: 1,
                    max: 30,
                  }}
                  sx={{ width: 80 }}
                />

                <Text variant="body2">Days</Text>
              </Stack>

              <Button
                label="Preview Notice"
                onClick={() => setOpenPreview(true)}
                disabled={!isAnyChargeSelected}
              />
            </Stack>
          </Paper>
        </Box>
      </Box>

      <PreAdversePreviewModal
        open={openPreview}
        onClose={() => setOpenPreview(false)}
        onSubmit={() => {
          setOpenPreview(false);
          setOpenSuccess(true);
        }}
        selectedCharges={selectedChargeLabels}
        days={days}
      />
      <PreAdverseSuccessModal open={openSuccess} onClose={handleSuccessClose} />
    </>
  );
}
