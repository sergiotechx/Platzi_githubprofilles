import { GithubApiURL } from '../constants/constantdef'
import { GithubProfile } from '../interface/githubDataProfile'

export const getGithubUser = async (user: string) => {
  const response = await fetch(`${GithubApiURL}${user}`, {
    method: 'GET'
  });

  const data = (await response.json());
  const formatedData:GithubProfile = {} as GithubProfile;
  if (data.message == undefined) {
      formatedData.name = data.name
      formatedData.created_at = data.created_at
      formatedData.login = data.login
      formatedData.avatar_url = data.avatar_url
      formatedData.bio = data.bio
      formatedData.public_repos = data.public_repos
      formatedData.followers = data.followers
      formatedData.following = data.following
      formatedData.location = data.location
      formatedData.twitter_username = data.twitter_username
      formatedData.blog = data.blog
      formatedData.company = data.company
   }
  return formatedData;
}