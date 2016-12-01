import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component{
  render(){
    const { id } = this.props.params;
    const i = this.props.posts.findIndex(
      (post) => post.code === id
    );
    const currentPost = this.props.posts[i];

    return (
      <div className="single-photo">
        <Photo i={i} post={currentPost} {...this.props}/>
        <Comments postComments={this.props.comments[id]} {...this.props}/>
      </div>
    )
  }
};

export default Single;