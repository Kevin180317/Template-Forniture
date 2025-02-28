"use client";
import Link from "next/link";
import { useState } from "react";

export default function Pricing() {
  return (
    <>
      {/*Start Service One */}
      <section className="service-one">
        <div
          className="service-one__shape2"
          style={{
            backgroundImage: "url(assets/img/shape/service-v1-shape2.png)",
          }}
        ></div>
        <div className="container">
          <div className="sec-title text-center">
            <div className="sub-title">
              <h5>OUR SERVICE</h5>
            </div>
            <h2>Our Furniture Services</h2>
          </div>
          <div className="row">
            {/*Start Service One Single */}
            <div
              className="col-xl-6 col-lg-6 wow animated fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-one__single">
                <div className="shape1">
                  <img src="assets/img/shape/service-v1-shape1.png" alt="" />
                </div>
                <div className="service-one__single-inner">
                  <div className="count-text">01</div>
                  <div className="icon-box">
                    <span className="icon-construction"></span>
                  </div>
                  <div className="content-box">
                    <h2>
                      <Link href="">Custom Furniture</Link>
                    </h2>
                    <p>
                      Through a unique combination of craftsmanship and design
                      expertise, we deliver world-class custom furniture.
                    </p>
                    <div className="btn-box">
                      <Link href="">EXPLORE SERVICE</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End Service One Single */}

            {/*Start Service One Single */}
            <div
              className="col-xl-6 col-lg-6 wow animated fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="service-one__single">
                <div className="shape1">
                  <img src="assets/img/shape/service-v1-shape1.png" alt="" />
                </div>
                <div className="service-one__single-inner">
                  <div className="count-text">02</div>
                  <div className="icon-box">
                    <span className="icon-construction-machine"></span>
                  </div>
                  <div className="content-box">
                    <h2>
                      <Link href="">Office Furniture</Link>
                    </h2>
                    <p>
                      Through a unique combination of craftsmanship and design
                      expertise, we deliver world-class office furniture.
                    </p>
                    <div className="btn-box">
                      <Link href="">EXPLORE SERVICE</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End Service One Single */}

            {/*Start Service One Single */}
            <div
              className="col-xl-6 col-lg-6 wow animated fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-one__single">
                <div className="shape1">
                  <img src="assets/img/shape/service-v1-shape1.png" alt="" />
                </div>
                <div className="service-one__single-inner">
                  <div className="count-text">03</div>
                  <div className="icon-box">
                    <span className="icon-check-list"></span>
                  </div>
                  <div className="content-box">
                    <h2>
                      <Link href="">Bedroom Furniture</Link>
                    </h2>
                    <p>
                      Through a unique combination of craftsmanship and design
                      expertise, we deliver world-class bedroom furniture.
                    </p>
                    <div className="btn-box">
                      <Link href="">EXPLORE SERVICE</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End Service One Single */}

            {/*Start Service One Single */}
            <div
              className="col-xl-6 col-lg-6 wow animated fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="service-one__single">
                <div className="shape1">
                  <img src="assets/img/shape/service-v1-shape1.png" alt="" />
                </div>
                <div className="service-one__single-inner">
                  <div className="count-text">04</div>
                  <div className="icon-box">
                    <span className="icon-interior-design"></span>
                  </div>
                  <div className="content-box">
                    <h2>
                      <Link href="">Dining Furniture</Link>
                    </h2>
                    <p>
                      Through a unique combination of craftsmanship and design
                      expertise, we deliver world-class dining furniture.
                    </p>
                    <div className="btn-box">
                      <Link href="">EXPLORE SERVICE</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End Service One Single */}
          </div>
        </div>
      </section>
      {/*End Service One */}
    </>
  );
}
