import React, { Component } from 'react'
import {getUser , getPosts} from './GitHubApi';
import Author from './Author.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Avatar from './Avatar'

class Animal extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        loaded: false,
        posts: {}
      };
    }

    componentDidMount = async () => {
      this.setState({loaded:false});
      const subName = this.props.match.params.animals;
      const posts = await getPosts(subName);
      this.setState({posts, loaded: true});
    }

    componentDidUpdate = async (previousProps) => {
      const subName = this.props.match.params.animals;
      if (previousProps.match.params.animals !== subName) {
        const posts = await getPosts(subName);
        this.setState({posts, loaded:true});
      }
    }

    render()
    {
      return(
        <div>
        <h1>{this.props.match.params.animals}</h1>
        {this.state.loaded && this.state.posts.data.children.map((post) => {
             return (<div className="post-card" key={post.data.id}>
                <Avatar name={post.data.title} src={post.data.thumbnail}></Avatar>
                <br/>
                 <a href={post.data.url} target="_blank">Title: {post.data.title}</a>
                <br/>
                 <Link to={`/author/${post.data.author}`}>Author: {post.data.author}</Link>
                 <p>Upvotes: {post.data.ups.toLocaleString()}</p>

               </div>);
           })}

        </div>
      );
    }


}

export default Animal
