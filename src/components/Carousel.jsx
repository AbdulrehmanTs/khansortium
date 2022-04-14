import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "./carousel.css";
import background from "../assets/blog/blog2/thumbnaill.jpg";
import background1 from "../../src/assets/blog/blog2/khansortium_blog.jpg";
import background2 from "../../src/assets/blog/blog3/cricketballslide.webp";
import Blogs from "./newsroom/contents";
class Carousel1 extends Component {
  render() {
    return (
      <Carousel>
        <div
          className="Grid2Card Grid2CardTwo"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${background2})`,
          }}
        >
          <span className="Grid2CardBadge">Blog</span>
          <Link to={`/blogs/${Blogs[0].title}`}></Link>
          <div className="cardTwoContent" style={{ pointerEvents: "none" }}>
            <h1>{Blogs[0].title}</h1>
          </div>

          <i className="fa fa-long-arrow-alt-right"> </i>
        </div>
        <div
          className="Grid2Card Grid2CardTwo fluid"
          style={{ backgroundImage: `url(${background})` }}
        >
          <span className="Grid2CardBadge">Blog</span>
          <Link to="/blog/khansortium1"></Link>
          <div className="cardTwoContent" style={{ pointerEvents: "none" }}>
            <h1>Exploring the Illinois housing market in 2021</h1>
          </div>

          <i className="fa fa-long-arrow-alt-right"> </i>
        </div>

        <div
          className="Grid2Card Grid2CardTwo"
          style={{ backgroundImage: `url(${background1})` }}
        >
          <span className="Grid2CardBadge">Blog</span>
          <Link to="/blog/khansortium"></Link>
          <div className="cardTwoContent" style={{ pointerEvents: "none" }}>
            <h1>Khansortium is spreading its wings across Chicagoland</h1>
          </div>

          <i className="fa fa-long-arrow-alt-right"> </i>
        </div>
      </Carousel>
    );
  }
}
export default Carousel1;
