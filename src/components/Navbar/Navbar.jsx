import { Typography, Stack, useMediaQuery } from "@mui/material";
import { Link, useOutletContext } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const { handleMobileMenu } = useOutletContext();
  const isMobile = useMediaQuery("(max-width:800px)");

  return (
    <Stack
      component={"header"}
      p={{ xs: 2, md: 3 }}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        {isMobile && (
          <MenuIcon onClick={() => handleMobileMenu((prev) => !prev)} />
        )}

        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Typography variant="h1" component={"h1"}>
            Bot AI
          </Typography>
        </Link>
      </Stack>
    </Stack>
  );
}
