import React from "react";

export default function Contents() {
  return (
    <div>
      <div class="container px-4 py-5" id="featured-3">
        <h2 class="pb-2 border-bottom">Kategori</h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="feature col">
            <div class="feature-icon bg-primary bg-gradient">
              <svg class="bi" width="1em" height="1em">
                <use />
              </svg>
            </div>
            <h2>Basic Programming</h2>
            <p>
              Baca tutorial dasar-dasar pemograman menggunakan c, c++, c#, Java,
              Javascript dan masih banyak lagi
            </p>
            <a href="#" class="icon-link">
              Call to action
              <svg class="bi" width="1em" height="1em">
                <use />
              </svg>
            </a>
          </div>
          <div class="feature col">
            <div class="feature-icon bg-primary bg-gradient">
              <svg class="bi" width="1em" height="1em">
                <use />
              </svg>
            </div>
            <h2>Web Programming</h2>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href="#" class="icon-link">
              Call to action
              <svg class="bi" width="1em" height="1em">
                <use />
              </svg>
            </a>
          </div>
          <div class="feature col">
            <div class="feature-icon bg-primary bg-gradient">
              <svg class="bi" width="1em" height="1em">
                <use />
              </svg>
            </div>
            <h2>Lainnya</h2>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href="#" class="icon-link">
              Call to action
              <svg class="bi" width="1em" height="1em">
                <use />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
