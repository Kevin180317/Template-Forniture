import Link from "next/link";

export default function Footer1() {
  return (
    <>
      {/*Start Footer One */}
      <footer className="footer-one">
        <div className="shape1">
          <img
            className="float-bob-y"
            src="assets/img/shape/footer-v1-shape1.png"
            alt=""
          />
        </div>
        {/*Start Footer Main */}
        <div className="footer-main">
          <div className="container">
            <div className="row">
              {/*Start Single Footer Widget */}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".1s"
              >
                <div className="single-footer-widget footer-widget__about">
                  <div className="logo-box">
                    <Link href="/">
                      <img src="/logo.png" alt="LOGO"   style={{
    height: "50px",        // Ajusta la altura del logo
    width: "auto",         // Mantiene la proporción original
    marginLeft: "20px",    // Espaciado desde el borde izquierdo
    marginRight: "20px",   // Espaciado desde el borde derecho
    display: "block",      // Elimina el espacio extra debajo de la imagen
    objectFit: "contain",  // Asegura que la imagen se ajuste bien sin distorsionarse
  }} />
                    </Link>
                  </div>

                  <div className="footer-widget__about-inner">
                    <div className="text-box">
                      <p>
                        Blvrd Federico Benítez López 170, San Antonio, 22114
                        Tijuana, B.C.{" "}
                      </p>
                    </div>
                    <div className="number-box">
                      <Link href="tel:123456789">+1 343 5335 3545</Link>
                    </div>
                    <div className="footer-social-link">
                      <Link href="#">tw</Link>
                      <Link href="#">in</Link>
                      <Link href="#">db</Link>
                      <Link href="#">ig</Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Footer Widget */}

              {/*Start Single Footer Widget */}
              <div
                className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="single-footer-widget footer-widget__links">
                  <div className="title">
                    <h2>Navigation</h2>
                  </div>

                  <div className="footer-widget__links-box">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/">About Us</Link>
                      </li>
                      <li>
                        <Link href="/">Services</Link>
                      </li>
                      <li>
                        <Link href="/">Contact Us</Link>
                      </li>
                      <li>
                        <Link href="/">Our Blog</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*End Single Footer Widget */}

              {/*Start Single Footer Widget */}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="single-footer-widget footer-widget__links quick-link">
                  <div className="title">
                    <h2>Quick Link</h2>
                  </div>

                  <div className="footer-widget__links-box">
                    <ul>
                      <li>
                        <Link href="/">Help</Link>
                      </li>
                      <li>
                        <Link href="/">Support</Link>
                      </li>
                      <li>
                        <Link href="/">Clients</Link>
                      </li>
                      <li>
                        <Link href="/">Shop</Link>
                      </li>
                      <li>
                        <Link href="/">Portfolio</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*End Single Footer Widget */}

              {/*End Single Footer Widget */}
            </div>
          </div>
        </div>
        {/*End Footer Main */}

        {/*Start Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom__inner">
              <div className="footer-bottom__text text-center">
                <p>
                  Copyright © 2025 profurniture by{" "}
                  <Link href="">profurniture.</Link>
                  All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*End Footer Bottom */}
      </footer>
      {/*End Footer One */}
    </>
  );
}
