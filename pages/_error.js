import Image from "next/image"

function Error({ statusCode }) {
    return (
        <>
            {statusCode
                ?
                <div className="error">
                    <div className="container mt-5 mb-5">
                        <div className="row justify-content-center">
                            <div className="col-12 col-sm-8 col-md-6">
                                <div className="card card-body text-center">
                                    <a href={'/'} className="navbar-brand">
                                        <Image src="/img/logo.png" width="209" height="56" alt="Fast Track Visa" /> </a>
                                        <h1 className="mt-2 h3">{statusCode} Error, Something went wrong please try again  </h1>

                                    <p>
                                        <a href={'/'} className="btn btn-dark">Click Here</a>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                : <div className="error">
                    <div className="container mt-5 mb-5">
                        <div className="row justify-content-center">
                            <div className="col-12 col-sm-8 col-md-6">
                                <div className="card card-body text-center">
                                    <a href={'/'} className="navbar-brand">
                                        <Image src="/img/logo.png" width="209" height="56" alt="Fast Track Visa" /> </a>
                                        <h1 className="mt-2 h3"> Something went wrong please try again  </h1>

                                    <p>
                                        <a href={'/'} className="btn btn-dark">Click Here</a>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>}

        </>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error