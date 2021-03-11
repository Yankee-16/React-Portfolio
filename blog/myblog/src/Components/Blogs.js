import React, { Component } from "react";
import BlogItem from "./BlogItem";
import axios from "axios";

// Material-ui imports
import { Button, ButtonGroup } from "@material-ui/core";

export class Blogs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      allPosts: [],
      step: 6,
      first: 0,
      last: 0,
      prev: -1,
      next: -1,
      length: 0,
    };
  }

  componentDidMount() {
    let url = window.location.href;

    axios.defaults.withCredentials = true;
    axios
      .get(url + "api/all/")
      .then((res) => {
        const posts = res.data;
        const now = posts.slice(0, this.state.step);
        const last = this.state.step;
        const length = posts.length;
        let next = Math.min(length, last + 1);
        if (next === length) {
          next = -1;
        }
        this.setState({
          allPosts: posts,
          posts: now,
          last: last,
          length: length,
          next: next,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  next = () => {
    console.log("To next");
    let first = this.state.next;
    let last = Math.min(this.state.length, this.state.last + this.state.step);
    let prev = this.state.first;
    let next = last === this.state.length ? -1 : last + 1;
    let posts = this.state.allPosts.slice(first - 1, last);
    this.setState({ first, last, prev, next, posts });
  };

  previous = () => {
    let first = this.state.prev;
    let last = this.state.first - 1;
    let next = this.state.first;
    let prev = first <= 0 ? -1 : first - this.state.step;
    console.log(first, last, prev, next);
    let posts = this.state.allPosts.slice(first, last);
    this.setState({ first, last, prev, next, posts });
  };

  render() {
    return (
      <div>
        <div className="body">
          <div className="container">
            <ul className="blog-list m-10 shadow pl-0.5 pr-0.5">
              {this.state.posts.map((post) => {
                return (
                  <li
                    className="mt-2 mb-0.5 shadow-sm rounded hover:bg-gray-100"
                    key={post.id}>
                    <BlogItem post={post} />
                  </li>
                );
              })}
              {/* <li className="mt-3 mb-0.5 shadow-sm rounded hover:bg-gray-100">
                <BlogItem />
              </li>
              <li className="mt-3 mb-0.5 shadow-sm rounded hover:bg-gray-100">
                <BlogItem />
              </li>
              <li className="mt-3 mb-0.5 shadow-sm rounded hover:bg-gray-100">
                <BlogItem />
              </li>
              <li className="mt-3 mb-0.5 shadow-sm rounded hover:bg-gray-100">
                <BlogItem />
              </li>
              <li className="mt-3 mb-0.5 shadow-sm rounded hover:bg-gray-100">
                <BlogItem />
              </li>
              <li className="mt-3 mb-0.5 shadow-sm rounded hover:bg-gray-100">
                <BlogItem />
              </li> */}
            </ul>
            <ButtonGroup variant="contained" color="primary" size="large">
              {this.state.prev !== -1 && (
                <Button
                  style={{
                    minHeight: "70px",
                    minWidth: "320px",
                    maxHeight: "60px",
                    maxWidth: "320px",
                  }}
                  onClick={this.previous}>
                  Previous
                </Button>
              )}
              {this.state.prev === -1 && (
                <Button
                  disabled
                  style={{
                    minHeight: "70px",
                    minWidth: "320px",
                    maxHeight: "60px",
                    maxWidth: "320px",
                  }}>
                  Previous
                </Button>
              )}
              {this.state.next !== -1 && (
                <Button
                  style={{
                    minHeight: "70px",
                    minWidth: "320px",
                    maxHeight: "60px",
                    maxWidth: "320px",
                  }}
                  onClick={this.next}>
                  Next
                </Button>
              )}
              {this.state.next === -1 && (
                <Button
                  disabled
                  style={{
                    minHeight: "70px",
                    minWidth: "320px",
                    maxHeight: "60px",
                    maxWidth: "320px",
                  }}>
                  Next
                </Button>
              )}
            </ButtonGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default Blogs;
