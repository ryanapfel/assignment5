const API_URL = 'https://api.github.com';

export async function fetchMembers() {
  let response = await fetch(`${API_URL}/orgs/facebook/members`);
  return response.json();
}

export async function fetchRepos() {
  let response = await fetch(`${API_URL}/orgs/facebook/repos`);
  return response.json();
}

export async function getPosts(subName) {
  let response = await fetch(`https://www.reddit.com/r/${subName}.json`);
  return  response.json();
}


export async function getUser(userName) {
  let response = await fetch(`https://www.reddit.com/user/${userName}.json`);
  return  response.json();
}
