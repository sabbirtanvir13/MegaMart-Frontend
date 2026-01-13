import { Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";

const SocialLink = ({ text = "Continue with Google" }) => {
  return (
    <Button
      fullWidth
      variant="outlined"
      startIcon={<FcGoogle />}
      sx={{
        py: 1.3,
        textTransform: "none",
        borderRadius: "10px",
      }}
    >
      {text}
    </Button>
  );
};

export default SocialLink;
