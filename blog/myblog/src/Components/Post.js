import React, { Component } from "react";
import axios from "axios";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";

export class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {
        id: "",
        title: "",
        slug: "",
        timestamp: "",
        content: "",
      },
      text: `<style>
        h2 {
            text-align: center;
        }
      </style>
      <h1> This is a heading</h1> 
            <h2> Sample heading  <h2>
             <p style='font-size: 18px; color: gray;'>Lorem ipsum <strong>dolor</strong> sit amet, consectetur adipiscing elit. Integer vitae luctus justo. Quisque viverra ante semper aliquam pretium. Pellentesque ac commodo ex. Integer scelerisque vehicula fringilla. Suspendisse potenti. Phasellus lorem nisl, facilisis vitae molestie non, facilisis nec massa. Curabitur ac fermentum odio. Nulla a lacinia tortor, quis mattis nunc. Etiam pharetra diam in risus elementum sollicitudin. Maecenas ut ante consequat, finibus tellus sit amet, pretium nunc. Praesent condimentum pellentesque sem a sodales. Aliquam pellentesque nec magna at ullamcorper. Nulla eu accumsan quam, quis euismod justo. Sed feugiat venenatis ex vel elementum. Fusce quam est, mollis a libero sit amet, porta convallis erat.  
             Fusce dapibus sed dolor quis feugiat. Nunc gravida diam ullamcorper, accumsan magna sed, imperdiet mauris. Aenean ipsum est, cursus a nisl et, semper porta lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate ex quis gravida luctus. Proin eget tincidunt nibh. Nullam tincidunt feugiat ultricies. Maecenas magna sapien, maximus vitae sapien non, auctor iaculis nisi. Nam condimentum pretium nulla quis ornare. Quisque feugiat lobortis nisi eu dignissim. Nulla vel facilisis purus. Nunc eu diam nec leo pellentesque ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin rhoncus tellus eu dolor tristique, ut tincidunt lorem venenatis.  
             Morbi hendrerit, nulla a euismod dictum, urna nibh accumsan augue, a malesuada lacus sapien in turpis.</p>
             <p style='font-size: 18px; color: gray;'>Fusce in ligula sit amet justo elementum condimentum at et nunc. Ut scelerisque pretium sapien, eu venenatis enim tristique a. Quisque et condimentum metus, ac semper ex. Pellentesque orci magna, rutrum in mauris eget, feugiat gravida magna. Vestibulum eget euismod urna, quis sagittis ex. Etiam in nisl auctor, commodo nulla vel, facilisis dui. Vivamus non ultrices enim, a ornare dui. Fusce malesuada enim sed fringilla aliquam. Vivamus consectetur quis purus in dictum. Curabitur ligula ante, volutpat eget varius id, auctor eget erat. Quisque condimentum erat a ex feugiat commodo. Nullam facilisis sem at eros dictum aliquet. Sed sed diam sed justo maximus auctor sed tempor eros. Donec id felis facilisis, finibus turpis at, pretium arcu. Curabitur nisi lacus, venenatis sit amet metus quis, accumsan vestibulum est. Vivamus eget est dui. Aenean sem nibh, rhoncus quis tortor aliquet, vehicula lobortis mi. Etiam eleifend urna nec justo sollicitudin efficitur. Vestibulum vitae augue massa. Aenean sem nisi, auctor et odio sed, lobortis eleifend purus. Praesent ante velit, viverra vitae erat vitae, euismod sollicitudin sapien. Donec felis sem, pulvinar quis finibus vitae, aliquet sit amet enim. Cras luctus egestas neque, vitae faucibus mi vulputate sit amet. Donec volutpat ex ultricies risus ornare venenatis. Curabitur eget felis orci.</p>
             `,
    };
  }

  componentDidMount() {
    let url = window.location.href;
    let base = window.location.host;

    console.log(url);

    let dir = url.slice(27, url.length);

    dir = "/article/api/" + dir;

    console.log(dir);

    axios.defaults.withCredentials = true;
    axios
      .get(dir)
      .then((res) => {
        const post = res.data;
        this.setState({ post });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <PostHeader post={this.state.post} />
        <PostBody text={this.state.post.content} />
      </div>
    );
  }
}

export default Post;
