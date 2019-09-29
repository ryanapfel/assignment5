import React from 'react';
import MemberImage from './MemberImage';
import GitHubRepoCard from './GitHubRepoCard';
import Loading from './Loading';
import { fetchMembers, fetchRepos } from './GitHubApi';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      repos: [],
      loading: false
    };
  }
  fetchMembers = async () => {
    this.setState({ loading: true });
    let members = await fetchMembers();
    this.setState({ members, repos: [], loading: false });
  }
  fetchRepos = async () => {
    this.setState({ loading: true });
    let repos = await fetchRepos();
    this.setState({ members: [], repos, loading: false });
  }
  render() {
    return (
      <div>
        <h1>GitHub Organization: facebook</h1>
        <nav>
          <a href="#" onClick={this.fetchRepos}>Repos</a>
          <a href="#" onClick={this.fetchMembers}>Members</a>
        </nav>
        {this.state.loading ? <Loading /> : (
          <>
            <div className="members">
              {this.state.members.map((member) => {
                return <MemberImage member={member} key={member.id} />
              })}
            </div>
            <div className="repos">
              {this.state.repos.map((repo) => {
                return <GitHubRepoCard repo={repo} key={repo.id} />
              })}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;
