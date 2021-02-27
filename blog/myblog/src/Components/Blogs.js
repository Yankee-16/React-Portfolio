import React, { Component } from "react";
import BlogItem from "./BlogItem";
import axios from "axios";

export class Blogs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    let url = window.location.href;

    axios.defaults.withCredentials = true;
    axios
      .get(url + "api/all/")
      .then((res) => {
        const posts = res.data;
        this.setState({ posts });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="body">
          <div className="container">
            <ul className="blog-list m-10 shadow pl-0.5 pr-0.5">
              {this.state.posts.map((post) => {
                return (
                  <li
                    className="mt-3 mb-0.5 shadow-sm rounded hover:bg-gray-100"
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
          </div>
        </div>
      </div>
    );
  }
}

export default Blogs;
