import { createContext, ReactNode, useState } from "react";
import { GithubProfile} from "../interface/githubDataProfile";

const GithubContext = createContext( {});

interface Props {
  children: ReactNode;
}
export function GithubContextProvider({ children }: Props) {
    const [githubContext, setGithubContext] = useState<GithubProfile>();
    const [contextError, setContextError] = useState<boolean>();
    return (
        <GithubContext.Provider value={{ githubContext, setGithubContext,contextError,setContextError}}>
          {children}
        </GithubContext.Provider>
      );
   
  }
  
  export default GithubContext;