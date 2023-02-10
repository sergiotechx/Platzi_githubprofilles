import { Typography, Stack } from "@mui/material";
import React, { useContext,Fragment } from "react";
import GithubContext from "../context/githubContext";
import { GithubProfile, GithubContextType } from "../interface/githubDataProfile";

export const PrincipalInformation = () => {
    
 
     const { githubContext, setGithubContext } = useContext(GithubContext) as GithubContextType;
   
    if(githubContext==undefined){return(<></>);}
    
    let date = new Date(githubContext.created_at);
        
  
     return(
          <Fragment>
          <Stack direction="row" sx={{justifyContent: 'space-between'}} >
            <Typography variant="h4" >{githubContext.name}</Typography>
            <Typography variant="subtitle2" >{ date.toString()}</Typography>
         </Stack>
        <Typography variant="caption">{`@${githubContext.login}`}</Typography>
        </Fragment>
     )
   }
  
  