import { CardMedia, Grid, Stack } from "@mui/material";
import { borderRadius } from "@mui/system";
import React, { useContext } from "react";
import { PrincipalInformation } from "../principalInformation";
import { Description } from "./description";
import { GithubProfile, GithubContextType, ContextErrorType } from "../../interface/githubDataProfile";
import GithubContext from "../../context/githubContext";




const UserCard = () => {
    const { githubContext, setGithubContext } = useContext(GithubContext) as GithubContextType;
    const { contextError, setContextError } = useContext(GithubContext) as ContextErrorType;
    let avatar_url = "../../../public/dinosaur.PNG";
    if (githubContext == undefined) return (<></>);
    if (contextError != true) {
        avatar_url = githubContext.avatar_url;
    }



    return (
        <Grid
            container
            spacing={2}
            sx={{ marginTop: '15px' }}
        >
            <Grid item xs={3}>
                <CardMedia
                    component="img"
                    alt="GitHub User"
                    image={avatar_url}
                    sx={{
                        borderRadius: '50%',
                        marginLeft: '5px'
                    }}
                />
            </Grid>
            <Grid item xs={9}>
                <Stack
                    direction="column"
                    spacing={1}
                    sx={{ margin: '30px' }}
                >
                    <PrincipalInformation />
                    <Description />

                </Stack>
            </Grid>
        </Grid>
    )
}

export default UserCard;