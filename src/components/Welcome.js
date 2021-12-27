
export default function Welcome ({openModal}){
    return (
        <>
        <div className="px-4 py-5 my-5 text-center">
            <p className="display-5">
            <span><small className="text-muted">HELLO</small></span><br />
            I'm <span className="fw-bold">Asmaa</span><br />
            a <span className="fw-bold">Web Developer</span>
            </p>
        <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
                I’m a software engineer specializing in .Net technologies. I worked
                4 years in developing enterprise applications for big clients in
                France (e.g Essilor, SNCF).
            </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn__customize" onClick={openModal}>
                Contact me
                </button>
          </div>
        </div>
      </div>
      </>
    )
}