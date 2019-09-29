import React from 'react';

export default function MemberImage(props) {
  let { avatar_url, login } = props.member;
  return <img src={avatar_url} width="150" title={login} alt={login} />
}