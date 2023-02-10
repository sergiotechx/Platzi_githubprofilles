import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useContext, useState, useCallback } from "react";
import { GithubProfile, GithubContextType, ContextErrorType,UserNotFound } from "../interface/githubDataProfile";
import GithubContext from "../context/githubContext";
import { getGithubUser } from '../services/users';



export const Search = () => {

  const { githubContext, setGithubContext } = useContext(GithubContext) as GithubContextType;
  const { contextError, setContextError } = useContext(GithubContext) as ContextErrorType;
  const [valueInput, setValueInput] = useState('');


  const onSearchValueChange =
    (event: any) => {
      const inputValue = event.target.value;
      setValueInput(inputValue);

    }


  const handleSubmit = async () => {

    let githubDataResult: GithubProfile = await getGithubUser(valueInput) as GithubProfile;

    if (Object.keys(githubDataResult).length === 0) {
      setGithubContext(UserNotFound);
      setContextError(true);
    }
    else {
      setGithubContext(githubDataResult);
      setContextError(false);
      
    }
  };



  return (

    <Stack
      direction='row'
      sx={{
        marginTop: '30px',
        width: '80%'
      }}

    >
      <TextField
        id="outlined-basic"
        label="GitHub User"
        placeholder="Octocat"
        variant="outlined"
        size="small"
        sx={{
          width: '90%',
        }}
        onChange={onSearchValueChange}
      />

      <IconButton
        onClick={handleSubmit}
        size="small"
        sx={{
          left: '-45px'
        }} >
        <SearchIcon />
      </IconButton>
    </Stack>

  );
}
