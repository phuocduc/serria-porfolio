import React from "react";
import { useSelector } from "react-redux";
import "../css/product.css";
import { Container, Row } from "react-bootstrap";
import Navbarr from "../Components/Navbarr";
import Brand from "../Components/Brand";
import Footerr from "../Components/Footerr";
import movies_product_img from "../image/movies_product.JPG";
import googlenew_img from "../image/googlenew_product.JPG";
import convertmoney_product_img from "../image/convertmoney_product.JPG";
import guessgame_product_img from "../image/guessgame_product.JPG";
import ott_product_img from "../image/ott_product.JPG";
import weather_product_img from "../image/weather_product.JPG";
import todolist_product_img from "../image/todolist_product.JPG";
import goldminer_product_img from "../image/goldminer_product.JPG";
import { Button } from "react-bootstrap";

export default function Product() {
  const selector = useSelector(state => state);
  return (
    <Container fluid={true} className="dashboard-page">
      <Row className="brand-navbar">
        <Brand />
        <Navbarr />
      </Row>
      <div>Welcome {selector && selector.email}</div>

      {/* san pham movies*/}

      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="row">
          <div className="col-md-6">
            <div className="work-box">
              <a href={movies_product_img} data-lightbox="gallery-mf">
                <div className="work-img">
                  <img src={movies_product_img} alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Trailer Films</h2>
                    <div className="w-more">
                      <form>
                        <Button
                          value="Live Website"
                          onClick={() =>
                            window.open("https://movies-dnp.netlify.com/")
                          }
                        >
                          Live Website
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* //// google news*/}
          <div className="col-md-6">
            <div className="work-box">
              <a href={googlenew_img} data-lightbox="gallery-mf">
                <div className="work-img">
                  <img src={googlenew_img} alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Google News</h2>
                    <div className="w-more">
                      <form>
                        <Button
                          value="Live Website"
                          onClick={() =>
                            window.open("https://googlenews-dnp.netlify.com/")
                          }
                        >
                          Live Website
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ///// guessgame*/}
          <div className="col-md-6">
            <div className="work-box">
              <a href={guessgame_product_img} data-lightbox="gallery-mf">
                <div className="work-img">
                  <img src={guessgame_product_img} alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Guess Game</h2>
                    <div className="w-more">
                      <form>
                        <Button
                          value="Live Website"
                          onClick={() =>
                            window.open("https://guessgame-dnp.netlify.com/")
                          }
                        >
                          Live Website
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ////// convert money*/}
          <div className="col-md-6">
            <div className="work-box">
              <a href={convertmoney_product_img} data-lightbox="gallery-mf">
                <div className="work-img">
                  <img src={convertmoney_product_img} alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Currency Converter</h2>
                    <div className="w-more">
                      <form>
                        <Button
                          value="Live Website"
                          onClick={() =>
                            window.open("https://convertmoney-dnp.netlify.com/")
                          }
                        >
                          Live Website
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* /// ott*/}
          <div className="col-md-6">
            <div className="work-box">
              <a href={ott_product_img} data-lightbox="gallery-mf">
                <div className="work-img">
                  <img src={ott_product_img} alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Rock-Paper-Scissor Game</h2>
                    <div className="w-more">
                      <form>
                        <Button
                          value="Live Website"
                          onClick={() =>
                            window.open("https://rockpaperscissor-dnp.netlify.com/")
                          }
                        >
                          Live Website
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* //// weather*/}
          <div className="col-md-6">
            <div className="work-box">
              <a href={weather_product_img} data-lightbox="gallery-mf">
                <div className="work-img">
                  <img src={weather_product_img} alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Weather</h2>
                    <div className="w-more">
                      <form>
                        <Button
                          value="Live Website"
                          onClick={() =>
                            window.open("https://weather-dnp.netlify.com/")
                          }
                        >
                          Live Website
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* //// todolist*/}
          <div className="col-md-6">
            <div className="work-box">
              <a href={todolist_product_img} data-lightbox="gallery-mf">
                <div className="work-img">
                  <img src={todolist_product_img} alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">To Do List</h2>
                    <div className="w-more">
                      <form>
                        <Button
                          value="Live Website"
                          onClick={() =>
                            window.open("https://todolist-dnp.netlify.com/")
                          }
                        >
                          Live Website
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ///// goldminer*/}
          <div className="col-md-6">
            <div className="work-box">
              <a href={goldminer_product_img} data-lightbox="gallery-mf">
                <div className="work-img">
                  <img src={goldminer_product_img} alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Catch - Diamond</h2>
                    <div className="w-more">
                      <form>
                        <Button
                          value="Live Website"
                          onClick={() =>
                            window.open("https://gold-miner-dnp.netlify.com/")
                          }
                        >
                          Live Website
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* end san pham */}

      <Footerr />
    </Container>
  );
}
