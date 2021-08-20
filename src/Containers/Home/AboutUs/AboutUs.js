import React from 'react';
import image from '../../../assets/images/about.jpg';
import './AboutUs.scss';

const AboutUs = () => {
    return (
        <div className="aboutUsSection">
            <div className="container">
                <h2 className="title">About Us</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="aboutImage">
                            <img src={image} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="aboutContent">
                            <p className="aboutTitle lead">
                                Hello! I'm Sujon. I'm a food and event photographer based in Dhaka.
                                I take photographs with creativity, concept and passion. We are work
                                in a Team.
                            </p>
                            <p>
                                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                                auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                                venenatis vestibulum. Morbi leo risus, porta ac consectetur ac,
                                vestibulum at eros. Maecenas faucibus mollis interdum. Cras justo
                                odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus
                                eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac
                                consectetur ac, vestibulum at eros. Donec sed odio dui.
                            </p>
                            <p>
                                Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo
                                cursus magna, vel scelerisque nisl consectetur et. Cum sociis
                                natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus. Maecenas faucibus mollis interdum. Nullam id dolor id
                                nibh ultricies vehicula.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
