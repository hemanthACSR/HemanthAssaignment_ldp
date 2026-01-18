import {
  Paper,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";

import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import WysiwygOutlinedIcon from '@mui/icons-material/WysiwygOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const menuItems = [
  {
    label: "Home",
    icon: <GridViewOutlinedIcon/>,
  },
  {
    label: "Candidates",
    icon: <PeopleAltOutlinedIcon />,
  },
  {
    label: "Adverse Actions",
    icon: <GavelOutlinedIcon />,
  },
  {
    label: "Logs",
    icon: <DescriptionOutlinedIcon />,
  },
  {
    label: "Analytics",
    icon: <BarChartOutlinedIcon />,
  },
  {
    label: "Account",
    icon: <ManageAccountsOutlinedIcon />,
  },
  {
    label: "Screenings",
    icon: <WysiwygOutlinedIcon />,
  },
];

export default function Sidebar() {
  return (
    <Paper
      elevation={1}
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      
      <Box>
        <Typography variant="h2" gutterBottom>
          RECRUIT
        </Typography>

        <List>
          {menuItems.map(({ label, icon }) => {
            const selected = label === "Candidates";

            return (
              <ListItemButton key={label} selected={selected}>
                <ListItemIcon
                  style={{
                    color: selected ? "#2F6FED" : undefined,
                    minWidth: 36,
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            );
          })}
        </List>
      </Box>

      
      <Box marginTop="auto">
        <Typography variant="body2">James Rodriguez</Typography>
        <Typography variant="body2">James.co</Typography>
        <LogoutOutlinedIcon/>
      </Box>
    </Paper>
  );
}
