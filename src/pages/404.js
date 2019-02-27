import React from "react";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <div className="ctr-404">
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <span className="emoji" role="img" aria-label="crying face emoji">
      😢
    </span>
  </div>
);

export default NotFoundPage;
