import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2F6FED",
    },
    background: {
      default: "#E5E5E5",
      paper: "#FFFFFF",
    },
    success: {
      main: "#2E7D32",
    },
    warning: {
      main: "#ED6C02",
    },
    text: {
      primary: "#111827",
      secondary: "#6B7280",
    },
  },

  typography: {
    fontFamily: "Inter, Arial, sans-serif",

    h1: {
      fontSize: "20px",
      fontWeight: 600,
    },

    h2: {
      fontSize: "16px",
      fontWeight: 600,
    },

    body1: {
      fontSize: "14px",
    },

    body2: {
      fontSize: "13px",
      color: "#6B7280",
    },
  },

  shape: {
    borderRadius: 10,
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "16px",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontSize: "12px",
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        head: {
          fontSize: "12px",
          fontWeight: 600,
          color: "#6B7280",
        },
      },
    },
  },
});

export default theme;
