import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import CourtSearchRow from "../../molecules/CourtSearchRow";

export default function CourtSearchTable() {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Search</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <CourtSearchRow
            search="SSN Verification"
            status="CLEAR"
            date="2/22/2022"
          />
          <CourtSearchRow
            search="Global Watchlist"
            status="CONSIDER"
            date="7/2/2022"
          />
        </TableBody>
      </Table>
    </Paper>
  );
}
