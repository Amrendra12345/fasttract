import Image from "next/image"
import Link from "next/link"

export default function Custom404() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6">
                    <div className="card card-body text-center">
                        <Link href={'/'} className="navbar-brand">
                            <Image src="/img/logo.png" width="209" height="56" alt="Fast Track Visa" /> </Link>
                            <h1 className="mt-2 h3"> Error, Something went wrong please try again  </h1>

                        <p>
                            <Link href={'/'} className="btn btn-dark">Click Here</Link>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    
    )
  }