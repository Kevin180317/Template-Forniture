import Link from "next/link";
import CounterUp from "@/components/elements/CounterUp";

export default function About() {
  return (
    <>
      {/*Start About One */}
      <section className="about-one">
        <div className="shape1 float-bob-y">
          <img src="assets/img/shape/about-v1-shape1.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            {/*Start About One Img */}
            <div
              className="col-xl-5 wow animated fadeInRight"
              data-wow-delay="0.1s"
            >
              <div className="about-one__img">
                <div className="inner">
                  <img src="assets/img/about/about.webp" alt="" />
                </div>
                <div className="experience-box">
                  <div className="counter-box">
                    <h2 className="count">
                      <CounterUp end={24} />
                    </h2>
                  </div>
                  <div className="text-box">
                    <p>
                      YEARS <br />
                      OF <br />
                      EXPERIENCE
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*End About One Img */}

            {/*Start About One Content */}
            <div
              className="col-xl-7 wow animated fadeInLeft"
              data-wow-delay="0.1s"
            >
              <div className="about-one__content">
                <div className="sec-title">
                  <div className="sub-title">
                    <h5>About Us</h5>
                  </div>
                  <h2>
                    Find the Perfect Furniture <br />
                    for Your Home and Style
                  </h2>
                </div>

                <div className="text-box">
                  <p>
                    Arki presents a minimalist and elegant design. The theme is
                    well-crafted for all modern furniture and interior design
                    websites. With Arki, your website will look even more
                    attractive and impressive.
                  </p>
                </div>

                <div className="about-one__content-progress">
                  <div className="about-one__content-progress-single">
                    <div className="title">
                      <h4>Design</h4>
                    </div>
                    <div className="bar">
                      <div className="bar-inner1 count-bar" data-percent="80%">
                        <div className="count-text">80%</div>
                      </div>
                    </div>
                  </div>

                  <div className="about-one__content-progress-single mb0">
                    <div className="title">
                      <h4>Furniture</h4>
                    </div>
                    <div className="bar">
                      <div className="bar-inner2 count-bar" data-percent="90%">
                        <div className="count-text style2">90%</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="about-one__content-bottom">
                  <div className="about-one__content-bottom-author-box">
                    <div className="btn-box">
                      <Link className="thm-btn" href="">
                        <span className="txt">Discover More</span>
                      </Link>
                    </div>

                    <div className="author-info">
                      <div className="img-box">
                        <img src="assets/img/about/about-v1-img2.jpg" alt="" />
                      </div>
                      <div className="signature-box">
                        <img src="assets/img/about/signature-1.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="text">
                    <h4>
                      Do you have any project in mind? Call us:{" "}
                      <Link href="tel:123456789">+123 456789</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            {/*End About One Content */}
          </div>
        </div>
      </section>
      {/*End About One */}
    </>
  );
}
