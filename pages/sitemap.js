
import Link from 'next/link';
// import Router from 'next/router';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Head from 'next/head'
class Sitemap extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            apistatus: '',
        };

    }

    static async getInitialProps(context) {
        const country_ext = context.locale
        
        const res = await fetch(`https://cms.fasttrackvisa.com/api/homelisting`);
        if (res.status === 200) {
            const sitemap = await res.json()
            const apistatus = res.status;
            return {
                sitemap, apistatus,country_ext
            }
        }
        else {
            return {
                apistatus
            }
        }
        const resd = await fetch(`https://cms.fasttrackvisa.com/api/${country_ext}/homelisting`);
        //console.log(resd)
        if (resd.status === 200) {
            const denymicsitemap = await resd.json()
            const apistatus = resd.status;
            return {
                denymicsitemap, apistatus
            }
        }
        else {
            return {
                apistatus
            }
        }
    }


    componentDidMount() {
        // if (this.props.country_elist === -1) {
        //     Router.push('/en-in');
        // }
        this.setState({
            sitemap: this.props.sitemap
        });
        window.addEventListener('scroll', () => {
            let activeClass = 'hsticky';
            if (window.scrollY === 0) {
                activeClass = 'top';
            }
            this.setState({ activeClass });
        });

    }



    render() {
       // console.log(this.props.denymicsitemap)
        return (
           
            <>
            <Head>
                <title>Sitemap | Fast Track Visa   </title>
                <meta name="description" content={``} />
                <link rel="canonical" href={`https://fasttrackvisa.com/${this.props.country_ext}/sitemap`}/>
            </Head>
                <div className="Home-page">
                    {/* <header className={'App-header' + ` ${this.state.activeClass}`}>
                        <Nav ce_name={''} lob_name="home_page" meta_title={'Apply Global eVisa | Tourist &amp; Business eVisa Online Services | Fast Track Visa'} meta_desc={'Apply for e-visa, tourist &amp; business visa globally online Through Fast Track Visa. We ensure fewer chances of rejection, world-class security, 24/7 customer support &amp; a speedy process.'} meta_keyword="" meta_img="/img/logo.png" meta_url={'sitemap'}> </Nav>
                    </header> */}

                    <div className="checkout_banner">
                        <Container>
                            <h1>Sitemap</h1></Container>
                    </div>
                     <Container>
                        <ol className="breadcrumb pl-0 bg-white">
                            <li className="breadcrumb-item"><Link href={'/'}> Home </Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Sitemap</li>
                        </ol>
                        <div className="desi-work-container sitemap-page">
                            <ul>
                                {this.props.sitemap.homelist.map((homelist, k) =>
                                    <li key={k}>
                                        <Link href={'/' + homelist.urllink}> {homelist.title} </Link>
                                    </li>
                                )}
                            </ul>                            
                        </div>
                    </Container>
                </div>
            </>
        );
    }
}
export default Sitemap;