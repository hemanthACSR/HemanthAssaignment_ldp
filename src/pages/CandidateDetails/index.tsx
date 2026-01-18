import { Box, Stack, Paper } from "@mui/material";
import Sidebar from "../../organisms/Sidebar";
import CourtSearchTable from "../../organisms/CourtSearchTable";
import InfoAccordion from "../../organisms/InfoAccordion";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";
import { useNavigate } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

export default function CandidateDetails() {
  const navigate = useNavigate();

  return (
    <Box display="flex" minHeight="100vh" padding={3}>
      <Box width={260}>
        <Sidebar />
      </Box>

      <Box flex={1} marginLeft={3}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          marginBottom={3}
        >
          
          <Stack direction="row" alignItems="center" spacing={1}>
            <ArrowBackOutlinedIcon />
            <Text variant="h1">John Smith</Text>
          </Stack>

         
          <Stack direction="row" spacing={2}>
            <Button
              label="Pre-Adverse Action"
              onClick={() => navigate("/pre-adverse-action")}
              variant="outlined"
            />
            <Button label="Engage" />
          </Stack>
        </Stack>

        
          <Stack spacing={2}>
            <InfoAccordion title="Candidate Information" />
            <InfoAccordion title="Report Information" />

          <Paper>
            <Text variant="h2">Court Searches</Text>
            <CourtSearchTable />
          </Paper>
          </Stack>
        
      </Box>
    </Box>
  );
}
