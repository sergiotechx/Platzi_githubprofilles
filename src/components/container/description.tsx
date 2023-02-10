import React, { useContext } from "react";
import { Stack, Typography } from "@mui/material";
import GithubContext from "../../context/githubContext";
import {  GithubContextType } from "../../interface/githubDataProfile";
import {PaperInformation} from '../paperInformation'
import {LocationInformation} from '../localInformation'

export const Description = () => {
    const { githubContext, setGithubContext } = useContext(GithubContext) as GithubContextType;
   
    if(githubContext==undefined){return(<></>);}
   
  
  return(
    <>
      <Stack sx={{justifyContent: 'center'}}>
        {githubContext.bio !== null 
          ? <Typography variant="body1">{githubContext.bio}</Typography>
          : <Typography variant="body1">Now is a good time to have some biography </Typography>
        }
      </Stack>
      <PaperInformation/>
      <LocationInformation/>

    </>
  )
};