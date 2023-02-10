import React, { useEffect, useContext, useState } from "react";
import { Container, IconButton } from "@mui/material";
import { Search } from "../search"
import UserCard from "./userCard"
import { getGithubUser } from "../../services/users";
import { GithubProfile, GithubContextType, ContextErrorType } from '../../interface/githubDataProfile'
import GithubContext from "../../context/githubContext"


export const GithubProfileCard = () => {
    const { githubContext, setGithubContext } = useContext(GithubContext) as GithubContextType;
    const { contextError, setContextError } = useContext(GithubContext) as ContextErrorType;


    const gettinUser =
        async (user: string) => {
            let githubDataResult: GithubProfile = await getGithubUser(user) as GithubProfile;

            if (Object.keys(githubDataResult).length === 0) {
                setContextError(true);
            }
            else {
                setGithubContext(githubDataResult);
                setContextError(false);
            }
        };


    useEffect(() => {
        gettinUser("octocat");

    }, [])



    return (
        <>
            <Container sx={{
                background: 'whitesmoke',
                width: '80vw',
                height: '500px',
                borderRadius: '16px',
                marginTop: '40px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',

            }} >

                <Search />
                <UserCard />
            </Container>

            {contextError ?
                alert("usuario no econtrado") :
                null
            }

        </>

    );
}