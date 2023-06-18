import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import "./creator.scss";

const Creators = () => {
  return (
    <div className="creator-container">
      <div className="creator-wrapper">
        <div className="bg-gradient"></div>
        <div className="creator-title">
          Get iNSPIRE WITH OUR TOP
          <br />
          CREATORS ON THE PLATFORM
        </div>
        <div className="slider-container">
          <Splide
            options={{
              gap: "23px",
              arrows: false,
              perPage: 3,
              breakpoints: {
                640: {
                  perPage: 1,
                },
              },
              pagination: true,
            }}
          >
            <SplideSlide className="per-slide">
              <div className="image"></div>
              <div className="title">Jaweria</div>
              <div className="details">
                <div className="earnings">
                  <div className="amount">$23,943,422</div>
                  <div className="desc">Total Earning</div>
                </div>
                <div className="line"></div>
                <div className="followers">
                  <div className="amount">5M</div>
                  <div className="desc">Followers</div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="per-slide">
              <div className="image"></div>
              <div className="title">Jaweria</div>
              <div className="details">
                <div className="earnings">
                  <div className="amount">$23,943,422</div>
                  <div className="desc">Total Earning</div>
                </div>
                <div className="line"></div>
                <div className="followers">
                  <div className="amount">5M</div>
                  <div className="desc">Followers</div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="per-slide">
              <div className="image"></div>
              <div className="title">Jaweria</div>
              <div className="details">
                <div className="earnings">
                  <div className="amount">$23,943,422</div>
                  <div className="desc">Total Earning</div>
                </div>
                <div className="line"></div>
                <div className="followers">
                  <div className="amount">5M</div>
                  <div className="desc">Followers</div>
                </div>
              </div>
            </SplideSlide>

            <SplideSlide className="per-slide">
              <div className="image"></div>
              <div className="title">Jaweria</div>
              <div className="details">
                <div className="earnings">
                  <div className="amount">$23,943,422</div>
                  <div className="desc">Total Earning</div>
                </div>
                <div className="line"></div>
                <div className="followers">
                  <div className="amount">5M</div>
                  <div className="desc">Followers</div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="per-slide">
              <div className="image"></div>
              <div className="title">Jaweria</div>
              <div className="details">
                <div className="earnings">
                  <div className="amount">$23,943,422</div>
                  <div className="desc">Total Earning</div>
                </div>
                <div className="line"></div>
                <div className="followers">
                  <div className="amount">5M</div>
                  <div className="desc">Followers</div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="per-slide">
              <div className="image"></div>
              <div className="title">Jaweria</div>
              <div className="details">
                <div className="earnings">
                  <div className="amount">$23,943,422</div>
                  <div className="desc">Total Earning</div>
                </div>
                <div className="line"></div>
                <div className="followers">
                  <div className="amount">5M</div>
                  <div className="desc">Followers</div>
                </div>
              </div>
            </SplideSlide>

            <SplideSlide className="per-slide">
              <div className="image"></div>
              <div className="title">Jaweria</div>
              <div className="details">
                <div className="earnings">
                  <div className="amount">$23,943,422</div>
                  <div className="desc">Total Earning</div>
                </div>
                <div className="line"></div>
                <div className="followers">
                  <div className="amount">5M</div>
                  <div className="desc">Followers</div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="per-slide">
              <div className="image"></div>
              <div className="title">Jaweria</div>
              <div className="details">
                <div className="earnings">
                  <div className="amount">$23,943,422</div>
                  <div className="desc">Total Earning</div>
                </div>
                <div className="line"></div>
                <div className="followers">
                  <div className="amount">5M</div>
                  <div className="desc">Followers</div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="per-slide">
              <div className="image"></div>
              <div className="title">Jaweria</div>
              <div className="details">
                <div className="earnings">
                  <div className="amount">$23,943,422</div>
                  <div className="desc">Total Earning</div>
                </div>
                <div className="line"></div>
                <div className="followers">
                  <div className="amount">5M</div>
                  <div className="desc">Followers</div>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Creators;
