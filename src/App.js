import React from 'react';
import MemberImage from './MemberImage';
import GitHubRepoCard from './GitHubRepoCard';
import Loading from './Loading';
import { fetchMembers, fetchRepos , getPosts} from './GitHubApi';
import  PageNotFound from './PageNotFound';
import Animal from './Animals.js'
import Author from './Author.js';

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    const animals = ['Cats','Chickens','Cows','Dogs','Pigs']
    super(props);
    this.state = {
      members: [],
      repos: [],
      loading: false,
      animalLinks : animals
    };
  }
  fetchMembers = async () => {
    this.setState({ loading: true });
    let members = await fetchMembers();
    this.setState({ members, repos: [], loading: false });
  }



  render() {
    return (
      <div>

        <Router>

          <h1>GitHub Organization: facebook</h1>
          <nav>
            <ul>
            <li><Link to='/'>Home</Link></li>
            {this.state.animalLinks.map((anim) => {
                let link = `/animals/${anim}`;
                 return <li key={anim}><Link to={link.toLowerCase()}>{anim}</Link></li>
               })}
           </ul>
         </nav>

         <Switch>
            <Route path='/' exact={true}></Route>
            <Route path='/animals/:animals' component={Animal}></Route>
            <Route path='/author/:author' component={Author}></Route>
            <Route component={PageNotFound}></Route>
        </Switch>


        </Router>

        </div>

    );
  }
}

export default App;
