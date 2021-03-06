import React from "react";
import Masuk from "../input";

export default function Blogs({tgl, judul, isi}) {
  return (
    <div>
      <div className="container px-4 py-5" id="featured-3">
        <div className="row g-5 py-5">
          <div className="col-md-8">
            <article className="blog-post">
              <h2 className="blog-post-title">{judul}</h2>
              <p className="blog-post-meta">
                Tanggal Posting {tgl}
              </p>

              <p>
                {isi}
              </p>
              <hr />
              

            </article>

            <nav className="blog-pagination" aria-label="Pagination">
              <a className="btn btn-outline-primary" href="#">
                Older
              </a>
              <a
                className="btn btn-outline-secondary disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Newer
              </a>
            </nav>
          <hr />
          <Masuk />

          </div>


          <div className="col-md-4">
            <div className="position-sticky">
              <div className="p-4 mb-3 bg-light rounded">
                <h4 className="fst-italic">About</h4>
                <p className="mb-0">
                  Customize this section to tell your visitors a little bit
                  about your publication, writers, content, or something else
                  entirely. Totally up to you.
                </p>
              </div>


              <div className="p-4">
                <h4 className="fst-italic">Elsewhere</h4>
                <ol className="list-unstyled">
                  <li>
                    <a href="#">GitHub</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
