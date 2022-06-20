import React from "react";

export default function Hero() {
  return (
    <div>
      <div className="px-4 pt-5 my-5 text-center  hero">
        <h1 className="display-4 fw-bold">Selamat Datang Di NAKAMA</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            NAKAMA merupakan platfrom yang membantu anda untuk mencari materi
            serta video pembelajaran yang terbaik.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button
              type="button"
              className="btn btn-info btn-lg px-4 me-sm-3 text-white"
            >
              Mulai Belajar{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
