import { Box, Button } from "@mui/material";
import React from "react";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MainScreen = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  return (
    <Box className="space-y-4 mt-3">
      <Card>
        <Card.Header>Applications</Card.Header>
        <Card.Body>
          <Card.Title className="font-bold text-[#5e0001]">
            Student Access ID Card
          </Card.Title>
          <Card.Text className="text-[12px]">
            Elevate your workplace security and streamline access management
            with the sophisticated Student ID Card. Enjoy exclusive privileges,
            seamless entry to designated areas, and enhanced convenience for
            your daily tasks.
          </Card.Text>
          <Box className="space-x-2">
            {user?.data?.idCardStatus == 1 ? (
              <Button
                variant="contained"
                disableElevation
                disabled
                sx={{
                  background: "#5e0001",
                  fontSize: "10px",
                }}>
                Successfully Applied
              </Button>
            ) : (
              <Link to="id_application">
                <Button
                  variant="contained"
                  disableElevation
                  sx={{ background: "#5e0001", fontSize: "10px" }}>
                  Apply Here
                </Button>
              </Link>
            )}
            {user?.data?.Approved === 1 && (
              <Link to="id_application">
                <Button
                  variant="contained"
                  disableElevation
                  sx={{ background: "#5e0001", fontSize: "10px" }}>
                  View ID Card
                </Button>
              </Link>
            )}
          </Box>
        </Card.Body>
      </Card>
    </Box>
  );
};

export default MainScreen;
