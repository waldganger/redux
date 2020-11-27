import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.posts !== prevProps.posts) {
  //     console.log("ses vraie");
  //     console.log(this.props.post);

  //     prevProps.posts.unshift(this.props.posts);
  //   }
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map((post) => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return <div>{postItems}</div>;
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  post: PropTypes.object,
};

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
