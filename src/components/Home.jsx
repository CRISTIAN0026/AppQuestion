import React from "react";
import { Typography, Button, Paper } from "@mui/material";
import { useNavigate } from 'react-router-dom';

/**
 * Home Component
 * A React component for the home page of the Trivia Challenge application.
 * @returns {JSX.Element} - React component for rendering the home page.
 */

export default function Home(){
    const history = useNavigate()

    return(
        <Paper elevation={3} style={{maxWidth:"600px", backgroundColor:"beige", borderRadius:"10px"}}>
            <Typography variant="h4" fontWeight="bold" margin="50px 150px 0px 150px">Welcome to the Trivia Challenge!👋🤗</Typography>
            <Typography variant="h6" margin="50px" style={{margin:"100px 200px 0px 200px"}}>You will presented with 10 True or False questions.🚀</Typography>
            <Typography variant="h6" margin="50px" style={{margin:"100px"}}>Can you score 100%?🤔</Typography>
            <Button variant="contained" style={{margin:"25px", fontSize:"20px"}} onClick={()=>history('/questions')}>BEGIN</Button>
        </Paper>
    )
}