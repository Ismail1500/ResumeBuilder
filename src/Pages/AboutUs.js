import { Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import { Box } from "@mui/system";
import Header from "../Components/Header/Header";
import Picture from "../Images/About.jpeg";
import "../Styles/About.css";

export default function ButtonMUI() {
  return (
    <>
      <Header />
      <Stack p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px " }}>
        <h2 className="template-header-title">Resume Builder</h2>
        <Stack
          className="midContainer"
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt="20px"
        >
          <Typography
            sx={{
              fontSize: {
                xs: "13px",
                sm: "15px",
                md: "17px",
                lg: "19px",
              },
              paddingRight: {
                xs: "15px",
                sm: "18px",
                lg: "25px",
              },
              textAlign: "justify",
            }}
          >
          A good resume can get you an edge over your competitors.This website simplifies the task of creating the resume for individuals. This website conatains basically four templates. The templates are designed in such a way that user can include maximum quality information keeping the resume length short to make a lasting impression.          
          User can also create account to save progress and multiple versions and also download their resume as PDF.Each resume template is divided into four section i.e. personal info, work experience, education and key skills so the the recurtier can get maximum information about the user in an short and simple way.
          
          our resume have four pages i.e Home page,Resume templates, My Resume and About Us. The header part contains the navigation from one page to another.
          
          we have the delete option ,download option and edit option to make our templates dynamic and user friendly. User can also switch from one page to another in any indiviual template from back and next button.

          we have also tested our components by unit and integration testing.

          </Typography>
          <Stack>
            <img className="Image" src={Picture} alt="My Resumes" />
          </Stack>
        </Stack>
        <Box mt="25px">
          <Typography
            sx={{
              fontSize: {
                xs: "22px",
                sm: "25px",
                md: "27px",
                lg: "30px",
              },
              fontWeight: "400",
              color: "dark",
            }}
          >
            Share with your friends
          </Typography>
          <Box className="icons">
            <LinkedInIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="primary"
            />
            <FacebookOutlinedIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="primary"
            />
            <WhatsAppIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="success"
            />
            <TwitterIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="info"
            />
            <EmailIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="error"
            />
          </Box>
        </Box>
      </Stack>
    </>
  );
}
