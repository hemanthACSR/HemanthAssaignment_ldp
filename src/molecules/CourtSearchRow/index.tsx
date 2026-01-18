import { TableRow, TableCell, Chip, Link } from "@mui/material";

interface Props {
  search: string;
  status: "CLEAR" | "CONSIDER";
  date: string;
}

export default function CourtSearchRow({ search, status, date }: Props) {
  return (
    <TableRow>
      <TableCell>
        <Link underline="hover">{search}</Link>
      </TableCell>
      <TableCell>
        <Chip
          label={status}
          color={status === "CLEAR" ? "success" : "warning"}
          variant="outlined"
        />
      </TableCell>
      <TableCell>{date}</TableCell>
    </TableRow>
  );
}
