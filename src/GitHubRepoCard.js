import React from 'react';
import moment from 'moment';

export default function GitHubRepoCard(props) {
  let { name, description, archived, created_at } = props.repo;
  let relativeCreatedAt = moment(created_at).fromNow();

  return (
    <div className="repo-card">
      <p>{name}</p>
      <p>{description}</p>
      <p>{archived ? 'Archived' : 'Active'}</p>
      <p>{relativeCreatedAt}</p>
    </div>
  );
}