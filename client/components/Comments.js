import React from 'react';

class Comments extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      newComment: { author: '', text: '' }
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeComment = this.removeComment.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addComment(
      this.props.params.id, 
      this.state.newComment.author, 
      this.state.newComment.text
    );
    this.setState({newComment: { author: '', text: '' }});
  }

  handleChange({target}){
    this.setState((prevState, props) => {
      let newState = Object.assign({}, prevState);
      newState.newComment[target.name] = target.value;
      return newState;
    });
  }

  removeComment(commentIndex){
    this.props.removeComment(this.props.params.id, commentIndex);
  }

  renderComment(comment, i){
    return (
      <div key={i} className="comment">
        <strong>{comment.user}</strong>
        {comment.text}
        <button className="remove-comment" onClick={() => this.removeComment(i)}>&times;</button>
      </div>
    );
  }

  render(){
    const comments = this.props.postComments;

    return (
      <div className="comments">
        {comments.map(this.renderComment, this)}
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" name="author" placeholder="author" 
            value={this.state.newComment.author} onChange={this.handleChange}></input>
          <input type="text" name="text" placeholder="comment" 
            value={this.state.newComment.text} onChange={this.handleChange}></input>
          <input type="submit" hidden></input>
        </form>
      </div>
    )
  }
};

export default Comments;