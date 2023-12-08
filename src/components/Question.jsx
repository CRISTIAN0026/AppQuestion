import React from "react";
import {Paper, Typography, Box, Button } from "@mui/material";

/**
 * Question Component
 * A React component for displaying a quiz question.
 * @param {Object} props - Component properties.
 * @param {string} props.category - The category of the question.
 * @param {string} props.question - The text of the question.
 * @param {function} props.setState - A function to update the state of the parent component.
 * @param {number} props.state - The current state of the question.
 * @param {number} props.long - The total number of questions.
 * @param {function} props.setResponse - A function to update the response state in the parent component.
 * @param {string} props.correct - The correct answer to the question.
 * @param {function} props.setCount - A function to update the count of correct answers in the parent component.
 * @param {number} props.count - The current count of correct answers.
 * @returns {JSX.Element} - React component for rendering a quiz question.
 */

export default function Question({ category, question, setState,  state, long, setResponse, correct, setCount, count }){
 /**
   * Save Response Object
   * Updates the response state in the parent component with a new response object.
   * @param {Object} newObject - The response object to be added.
   */

    const saveObject = (newObject) => {
        setResponse((prevResponse) => [...prevResponse, newObject]);
      };

    const handleOnClick= (value)=>{
        if(value === correct){
            setCount(count+=1)
        }
        const newObject = { id: state, response: value, correct:correct, question:question };
        saveObject(newObject);
        setState(state+=1)
    }


    return(
        <Paper elevation={3} style={{maxWidth:"600px", backgroundColor:"beige", border:"1px solid beige", borderRadius:"10px", margin:"0px"}}>
            <Typography variant="h4" margin="50px" fontWeight="bold">{category}</Typography>
            <Box sx={{
                border:"1px solid black",
                borderRadius:"10px",
                margin:"20px",
                backgroundColor:"#FAFAFA"
            }}>{
                <Typography variant="h6" margin="100px 100px 100px 100px">{question}</Typography>
                }</Box>
                <Typography fontWeight="bold" margin="50px 0px 0px 0px">{state}/{long+1}</Typography>
                <Box sx={{margin:"45px", display:"flex", flexDirection:"column"}}>
                <Button style={{maxWidth:"100px", margin:"0px 0px 20px 0px"}} variant="contained" 
                    color="success" value="True" onClick={(e) => handleOnClick(e.target.value)}>True</Button>
                <Button style={{maxWidth:"100px", }} variant="contained" color="error" value="False" onClick={(e) => handleOnClick(e.target.value)}>False</Button>
                </Box>
        </Paper>
    )
}