import { Paper, Stack, Typography } from "@mui/material";
import React ,{useContext} from "react";
import { GithubProfile, GithubContextType } from "../interface/githubDataProfile";
import GithubContext from "../context/githubContext";

export const PaperInformation = () => {
    const { githubContext, setGithubContext } = useContext(GithubContext) as GithubContextType;
   
    if(githubContext==undefined){return(<></>);}
 


  return(
    <Paper elevation={3}>
      <Stack
        spacing={3}
        direction="row"
        sx={{justifyContent:'space-evenly', margin:'20px'}}
      >
        <Stack>
          <Typography variant="h5" >Respos</Typography>
          <Typography variant="h6">{githubContext.public_repos}</Typography>
        </Stack>
        <Stack>
          <Typography variant="h5">Follower</Typography>
          <Typography variant="h6">{githubContext.followers}</Typography>
        </Stack>
        <Stack>
          <Typography variant="h5">Following</Typography>
          <Typography variant="h6">{githubContext.following}</Typography>
        </Stack>
      </Stack>
    </Paper>
  )
};