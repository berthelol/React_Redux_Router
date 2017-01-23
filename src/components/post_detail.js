import React, {Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {fetchOnePost,deletepost} from '../actions/index';
class PostDetail extends Component {
  componentWillMount(){
    this.props.fetchOnePost(this.props.params.id);
  }
  static contextTypes = {
    router: PropTypes.object
  };
  deletepost(){
    this.props.deletepost(this.props.params.id).then(()=>{
        this.context.router.push('/');
    });
  }
  render(){
    if(this.props.post){
      return(
        <div>
          <h2>{this.props.post.title}</h2>
          <p>{this.props.post.categories}</p>
          <br></br>
          <p>{this.props.post.content}</p>
          <Link to="/" className="btn btn-primary">Home</Link>
          <button className="btn btn-danger" onClick={this.deletepost.bind(this)}>Delete this Post</button>
        </div>
      );
    }else {
      return <div>Loading...</div>;
    }

  }
}
function mapStateToProps(state){
  return {post:state.posts.post};
}
export default connect(mapStateToProps,{fetchOnePost,deletepost})(PostDetail);
