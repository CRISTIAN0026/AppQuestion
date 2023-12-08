import React, { useState } from "react";
import { Typography, Button, Box, Paper } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom";

/**
 * Results Component
 * A React component for displaying the quiz results, including the score and responses.
 * @param {Object} props - Component properties.
 * @param {Array} props.response - An array of response objects containing question details.
 * @param {number} props.count - The count of correct answers.
 * @param {number} props.long - The total number of questions.
 * @returns {JSX.Element} - React component for rendering the quiz results.
 */

export default function Results({ response, count, long }) {
  const [openAccordion, setOpenAccordion] = useState(null);
  const navigate = useNavigate();

/**
   * Navigate to Another Page
   * Navigates to the home page when the "PLAY AGAIN?" button is clicked.
   */

  const navigateToHome = () => {
    navigate("/");
  };

  /**
   * Handle Accordion Change
   * Updates the state to expand or collapse the accordion panel.
   * @param {number} panel - The index of the accordion panel.
   */

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setOpenAccordion(isExpanded ? panel : null);
  };

  return (
    <Paper elevation={3} style={{ backgroundColor: "beige" }}>
      <Typography variant="h4" fontWeight="bold">
        You Scored
      </Typography>
      <Typography
        variant="h4"
        fontWeight="bold"
        style={{ margin: "0px 0px 20px 0px" }}
      >
        {count + "/" + long}
        {count <= 2 && "😱"}
        {count >= 3 && count <= 7 && "🫠"}
        {count >= 8 && "🤩"}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "0px 0px 20px 0px",
        }}
      >
        <Button variant="contained" fontWeight="bold" onClick={navigateToHome}>
          PLAY AGAIN?
        </Button>
      </Box>
      {response.map((item, index) => (
        <Accordion
          key={index}
          style={{
            maxWidth: "600px",
            backgroundColor: `${
              item.correct === item.response ? "#47EA60" : "#FF4747"
            }`,
          }}
          expanded={openAccordion === index}
          onChange={handleAccordionChange(index)}
        >
          <AccordionSummary
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            <Box style={{ display: "flex", alignItems: "center" }}>
              {openAccordion === index ? (
                <RemoveIcon style={{ marginRight: "8px" }} />
              ) : (
                <AddIcon style={{ marginRight: "8px" }} />
              )}
            </Box>
            <Typography>
              {item.question}
              {item.correct === item.response ? "🥳" : "🥲"}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Correct answer: {item.correct}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "20px 0px 0px 0px",
        }}
      >
        <Button variant="contained" fontWeight="bold" onClick={navigateToHome}>
          PLAY AGAIN?
        </Button>
      </Box>
    </Paper>
  );
}
