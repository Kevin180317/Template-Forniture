import Link from "next/link";

export default function Projects() {
  return (
    <>
      {/*Start Project One */}
      <section className="project-one">
        <div className="auto-container">
          <div className="sec-title text-center">
            <div className="sub-title">
              <h5>OUR RECENT PROJECT</h5>
            </div>
            <h2>
              Last Furniture Projects We Designed <br />
              Check Our Work
            </h2>
          </div>
          <div className="row">
            {/*Start Project One Single */}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="project-one__single">
                <div className="project-one__single-img">
                  <img src="assets/img/project/1.webp" loading="lazy" alt="" />
                  <div className="overlay-btn">
                    {/* <Link
                      className="img-popup"
                      href="assets/img/project/-v1-img1.webp" loading="lazy"
                    >
                      <span className="icon-search-interface-symbol"></span>
                    </Link> */}
                    <Link href="">
                      <span className="icon-link"></span>
                    </Link>
                  </div>

                  <div className="overlay-text">
                    <p>San Francisco</p>
                    <h2>
                      <Link href="/project-details">Modern Sofa Set</Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            {/*End Project One Single */}

            {/*Start Project One Single */}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown"
              data-wow-delay=".3s"
            >
              <div className="project-one__single">
                <div className="project-one__single-img">
                  <img src="assets/img/project/2.webp" loading="lazy" alt="" />
                  <div className="overlay-btn">
                    {/* <Link
                      className="img-popup"
                      href="assets/img/project/-v1-img2.webp" loading="lazy"
                    >
                      <span className="icon-search-interface-symbol"></span>
                    </Link> */}
                    <Link href="">
                      <span className="icon-link"></span>
                    </Link>
                  </div>

                  <div className="overlay-text">
                    <p>San Francisco</p>
                    <h2>
                      <Link href="/project-details">Luxury Dining Table</Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            {/*End Project One Single */}

            {/*Start Project One Single */}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="project-one__single">
                <div className="project-one__single-img">
                  <img src="assets/img/project/3.webp" loading="lazy" alt="" />
                  <div className="overlay-btn">
                    {/* <Link
                      className="img-popup"
                      href="assets/img/project/-v1-img3.webp" loading="lazy"
                    >
                      <span className="icon-search-interface-symbol"></span>
                    </Link> */}
                    <Link href="">
                      <span className="icon-link"></span>
                    </Link>
                  </div>

                  <div className="overlay-text">
                    <p>San Francisco</p>
                    <h2>
                      <Link href="/project-details">Elegant Bedroom Set</Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            {/*End Project One Single */}

            {/*Start Project One Single */}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown"
              data-wow-delay=".3s"
            >
              <div className="project-one__single">
                <div className="project-one__single-img">
                  <img src="assets/img/project/4.webp" loading="lazy" alt="" />
                  <div className="overlay-btn">
                    {/* <Link
                      className="img-popup"
                      href="assets/img/project/-v1-img4.webp" loading="lazy"
                    >
                      <span className="icon-search-interface-symbol"></span>
                    </Link> */}
                    <Link href="">
                      <span className="icon-link"></span>
                    </Link>
                  </div>

                  <div className="overlay-text">
                    <p>San Francisco</p>
                    <h2>
                      <Link href="/project-details">Office Furniture Set</Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            {/*End Project One Single */}
          </div>
        </div>
      </section>
      {/*End Project One */}
    </>
  );
}
