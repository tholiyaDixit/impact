import { TextField } from "@mui/material";
import React from "react";
import "./ForgotPassword.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CloseIcon from "../../images/svg/closeIcon.svg";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="ForgotPasswordPopup">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          {/* <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        /> */}
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            padding={"6px 17px"}
          >
            Reset password
            <button
              className="closeBtn"
              onClick={() => {
                navigate("/", { state: { popup: "login" } });
              }}
            >
              <img src={CloseIcon} alt="" width={"20px"} />
            </button>
          </Typography>
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              Enter your email address and we will send you a link to reset your
              password.
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
            <div style={{ marginTop: "33px" }}>
              <TextField
                id="standard-helperText"
                label="Enter Your Email"
                defaultValue="Default Value"
                // helperText="Some important text"
                variant="standard"
              />
              <button
                className="sendMail"
                onClick={() => {
                  console.log("click");
                }}
              >
                Send Mail
              </button>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ForgotPassword;
