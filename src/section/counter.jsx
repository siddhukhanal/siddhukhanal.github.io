import React from 'react';
import { Parallax } from "react-parallax";
import CountUp from "react-countup";
import AOS from 'aos';
AOS.init();

const image1 ="./img/background/3.jpg";

const Mblockquote = () => {
    return(
        <div className="section bg-top bg-bottom py-0">
          <Parallax className="py-5" bgImage={image1} strength={300}>  
          <div className="py-5 position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="de_count text-center">
                                <h3 className="timer"
                                  data-aos="fade"
                              data-aos-delay="0"
                              data-aos-duration="1000"
                              data-aos-easing="ease"
                              data-aos-once="true"
                                  >
                                    <CountUp
                                      start={0}
                                      end={4}
                                      duration={3}
                                      useEasing={true}
                                      separator=","
                                    />
                                </h3>
                                <span>Years of Experience</span>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="de_count text-center">
                                <h3 className="timer"
                                  data-aos="fade"
                              data-aos-delay="200"
                              data-aos-duration="1000"
                              data-aos-easing="ease"
                              data-aos-once="true"
                                  ><CountUp
                                      start={0}
                                      end={315}
                                      duration={10}
                                      useEasing={true}
                                      separator=","
                                    /></h3>
                                <span>Projects Done</span>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="de_count text-center">
                                <h3 className="timer"
                                  data-aos="fade"
                              data-aos-delay="400"
                              data-aos-duration="1000"
                              data-aos-easing="ease"
                              data-aos-once="true"
                                  ><CountUp
                                      start={0}
                                      end={30}
                                      duration={10}
                                      useEasing={true}
                                      separator=","
                                    /></h3>
                                <span>Companies I've worked with</span>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="de_count text-center">
                                <h3 className="timer"
                                  data-aos="fade"
                              data-aos-delay="600"
                              data-aos-duration="1000"
                              data-aos-easing="ease"
                              data-aos-once="true"
                                  ><CountUp
                                      start={0}
                                      end={12}
                                      duration={10}
                                      useEasing={true}
                                      separator=","
                                    /></h3>
                                <span>Clients</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
        </div>
    );
}

export default Mblockquote;