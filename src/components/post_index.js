import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {fetchPosts} from '../actions/index';
class PostIndex extends Component{
  componentWillMount(){
    this.props.fetchPosts();
  }
  
  renderPost(){
    return this.props.posts.map((posts)=> {
      return (
        <Link to={`/posts/${posts.id}`} key={posts.id}>
        <li className="list-group-item" >
        <span className="pull-xs-right"> {posts.categories}</span>
        <strong>{posts.title}</strong>
      </li>
    </Link>);
    });
  }
  render(){
    return (<div>
    <div className="text-xs-right">
      <Link to="/posts/new" className="btn btn-primary">Add a post</Link>
    </div>
    <h3>Posts</h3>
    <ul className="list-group">
      {this.renderPost()}
    </ul>
    </div>);
  }
}
function mapStateToProps(state){
  return {posts:state.posts.all}
}
export default connect(mapStateToProps,{fetchPosts})(PostIndex);
