import React from "react";
import ReactHtmlParser from "react-html-parser";

export default function PostBody(props) {
  const myStyle = {
    textAlign: "left",
  };
  return (
    <div>
      <div className="body" style={myStyle}>
        <div className="container shadow pl-3 pr-3 pt-5 pb-5 mt-3 mb-3 mr-auto ml-auto">
          <div>{ReactHtmlParser(props.text)}</div>
        </div>

        <div className="container">
          <div id="disqus_thread"></div>
          <script>
            {
              /**
               *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
               *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
              /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
              (function () {
                // DON'T EDIT BELOW THIS LINE
                var d = document,
                  s = d.createElement("script");
                s.src = "https://imran-blog.disqus.com/embed.js";
                s.setAttribute("data-timestamp", +new Date());
                (d.head || d.body).appendChild(s);
              })()
            }
          </script>
          <noscript>
            Please enable JavaScript to view the{" "}
            <a href="https://disqus.com/?ref_noscript">
              comments powered by Disqus.
            </a>
          </noscript>
        </div>
      </div>
    </div>
  );
}
