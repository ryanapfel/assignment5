import React, { Component } from 'react'
import {getUser , getPosts} from './GitHubApi';


class Author extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        loaded: false,
        posts: {}
      };
    }

    componentDidMount = async () => {
      this.setState({loaded:false});
      const subName = this.props.match.params.author;
      console.log(subName);
      const posts = await getUser(subName);
      this.setState({posts, loaded: true});
    }

    componentDidUpdate = async (previousProps) => {
      const subName = this.props.match.params.author;
      if (previousProps.match.params.author !== subName) {
        const posts = await getUser(subName);
        this.setState({posts, loaded:true});
      }
    }

    render()
    {
      return(
        <div>
        <h1>User Name: {this.props.match.params.author}</h1>
        {this.state.loaded && this.state.posts.data.children.map((post) => {
             return (<div className="post-card" key={post.data.id}>
                 <a href={post.data.url} target="_blank">{post.data.title}</a>
                 <p>{post.data.author}</p>
                 <p>{post.data.ups.toLocaleString()}</p>
                 <img src={post.data.thumbnail_width && post.data.thumbnail}/>
               </div>);
           })}

        </div>
      );
    }


}

export default Author
