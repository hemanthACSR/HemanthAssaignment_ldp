import { ListItemButton, ListItemText } from "@mui/material";

interface Props {
  label: string;
}

export default function SidebarItem({ label }: Props) {
  return (
    <ListItemButton>
      <ListItemText primary={label} />
    </ListItemButton>
  );
}
