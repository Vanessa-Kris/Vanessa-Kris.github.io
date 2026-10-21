import { Box, Typography, Divider } from "@mui/material";
import { useThemeColors } from "../hooks/useThemeColors";

export default function Intro() {
  const colors = useThemeColors();

  return (
    <Box
      sx={{
        m: { md: 15, xs: 1 },
        color: colors.textSecondary,
        pt: 4,
        px: { xs: 1.5 },
      }}
    >
      <Typography
        variant="h1"
        sx={{ my: { md: 3, xs: 3 }, color: colors.textPrimary, fontSize: { md: "85px", xs: "48px" }, }}
      >
        UI/UX Designer & Developer
        <Divider
          flexItem
          sx={{
            bgcolor: colors.divider,
            width: { md: "20%", xs: "40%" },
            my: 2,
          }}
        />
      </Typography>

      <Typography sx={{ pt: 2, fontSize: { xs: "16px", md: "23px" } }}>
        Finding the balance between beauty and functionality. Enjoying the
        chaos of designing/creating and the satisfaction of bringing it to life. Committed
        to open source and free communication.
      </Typography>

      <Typography
        sx={{
          mt: { md: 12, xs: 8 },
          fontFamily: "'Dancing Script', cursive",
          fontWeight: 700,
          color: "primary.main",
          fontSize: { md: "77px", xs: "48px" },
          lineHeight: 1.2,
        }}
      >
        Vanessa Chris. Igwe
      </Typography>
    </Box>
  );
}
