export type GithubProfile = {
    name: string,
    created_at: string,
    login: string,
    avatar_url: string,
    bio: string,
    public_repos: number,
    followers: number,
    following: number,
    location: string,
    twitter_username: string,
    blog: string,
    company: string,
}
export type GithubContextType = {
    githubContext: GithubProfile;
    setGithubContext: (value: GithubProfile) => void;
};
export type ContextErrorType = {
    contextError: boolean;
    setContextError: (value: boolean) => void;
};

export const UserNotFound:GithubProfile ={
    name: "Dinosaur Doe 🦖",
    created_at: "0001-01-25T18:44:36Z",
    login:"DinosaurDoe" ,
    avatar_url: "string",
    bio: "An amazing dino",
    public_repos: 1,
    followers: 1,
    following: 9000,
    location: "Pangea",
    twitter_username: "@DinosaurDoe",
    blog: "https://DinosaurDoe.dino",
    company: "Pangea Corp",
}

