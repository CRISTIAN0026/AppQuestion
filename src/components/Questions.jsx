import React, { useEffect, useState } from "react";
import {Grid, Box, Typography} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import Question from "./Question";
import axios from "axios";
import Results from "./Results";

/**
 * Questions Component
 * A React component for displaying a set of trivia questions fetched from an API.
 * @returns {JSX.Element} - React component for rendering trivia questions.
 */

export default function Questions(){
    const [questions, setQuestions] = useState([]);
    const [response, setResponse] = useState([]);
    const [state, setState] = useState(0);
    const [count, setCount] = useState(0);
    const url = "https://opentdb.com/api.php?amount=12&difficulty=hard&type=boolean";

/**
   * Fetch Trivia Questions
   * Fetches trivia questions from the specified API and updates the state.
   * @param {string} url - The URL for fetching trivia questions.
   */

    const fetchCharacters = (url) => {
        axios.get(url)
            .then((data) => {
            setQuestions(data.data.results);
                }).catch(error =>{
                    console.log(error)
            })
    };

    useEffect(() => {
        fetchCharacters(url)
    }, []);


    return(
        <Grid>
            {state <= questions?.length-1 && <Question category={questions[state].category} 
            setCount={setCount} count={count} question={questions[state].question} correct={questions[state].correct_answer} setState={setState} state={state} long={questions.length -1} setResponse={setResponse}/>
            }
            {
                questions.length === 0 && <Box sx={{margin:"250px"}}> 
                <CircularProgress style={{fontSize:"150px"}}/> 
                <Typography variant="h4">Loading</Typography>
                <Typography variant="h7">Please if the page does not load, reload the page, our API is having problems.</Typography>
                </Box>
            }
            {
                state > questions.length-1 && questions.length >0 ? <Results response={response} count={count} long={questions.length } />:null
            }
        </Grid>
    )
}
