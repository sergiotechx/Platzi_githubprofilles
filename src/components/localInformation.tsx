import React,{useContext} from "react";
import { Grid, Stack, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';
import { GithubProfile, GithubContextType } from "../interface/githubDataProfile";
import GithubContext from "../context/githubContext";

export const LocationInformation = () => {
    const { githubContext, setGithubContext } = useContext(GithubContext) as GithubContextType;
   
    if(githubContext==undefined){return(<></>);}
   

  return(
    <Grid
      container
      spacing={2}
      sx={{marginTop:'15px'}} 
    >
      <Grid item xs={6 }>
        <Stack direction="row" spacing={2}>
          <LocationOnIcon/>
          <Typography>{githubContext.location}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6 }>
        <Stack direction="row" spacing={2}>
          <TwitterIcon/>
          {githubContext.twitter_username !== null
            ? <Typography>{githubContext.twitter_username}</Typography>
            : <Typography>Not Available</Typography>
          }
        </Stack>
      </Grid>
      <Grid item xs={6 }>
        <Stack direction="row" spacing={2}>
          <LanguageIcon/>
          {githubContext.blog !== null
            ? <a target="_blank" href={githubContext.blog}><Typography>{githubContext.blog}</Typography></a>
            : <Typography>Not Available</Typography>
          }
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <BusinessIcon />
          {githubContext.company !== null
            ? <Typography>{githubContext.company}</Typography>
            : <Typography>Not Available</Typography>
          }
        </Stack>
      </Grid>
    </Grid>
  )
}