import React from 'react';
import AOS from 'aos';
AOS.init();



const hero = () => {
	return(
		<div className="container">
			<div className="row">
				<div className="col-md-12 text-center">
	                <h2>My Resume</h2>
	                <div className="space-border"></div>
	            </div>
			</div>
			<div className="row gh-5">

				<div className="col-lg-6"
                    data-aos="fade-up"
                        data-aos-once="true"
                    >
                    <div className="p-4">
                        <h3 className="s_border">Experiences</h3>
                        <ul className="d_timeline">
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2024 March - Now</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">SENIOR &amp; /LEAD DESIGNER</span>
                                	<span className="d_company">Link Plus</span>
                                	Working as a Senior/ Lead designer at Link plus since one 
                                    year where I am actively involved in managing products for
                                    different stores, store related design and design for the 
                                    website while actively working as a front end designer as
                                    well. 
                                    <span className="leadership_mentorship">Leadership and Mentorship Team Guidance:</span>
Projects Leads, Delegate Tasks.      Guide and mentor Junior designers
        Hiring and Team Building: Interviewing, recruiting and       new talent
Strategic PlanningDesign Strategy: Align designs with business need and its
             requirement while following guideline to assure it’s             consistency.      Cross functional Collaboration: Bride gap between design
              Products, Developer & Marketing teams.
ManagementTimeline Management: Ensure project delivered on time.
Communication ManagementPresent and articulate design to stakeholders directly or indirectly involved in the design process
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">April-Dec 2023</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">GRAPHIC  & UI/UX DESIGNER</span>
                                	<span className="d_company">Web Tuned Studio</span>
                                	Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2020  Dec- 2022 May</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">UI/UX INTERN</span>
                                	<span className="d_company">Etheric Tales</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2020 Dec - 2022 May</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Book Cover Designer</span>
                                	<span className="d_company">Etheric Tales</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-6" 
                    data-aos="fade-up"
                        data-aos-once="true"
                    >
                    <div className="p-4">
                        <h3 className="s_border">Education</h3>
                        <ul className="d_timeline">
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2018 - 2023</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Bachelor</span>
                                	<span className="d_company">Tribhubhan University</span>
                                    <span className="d_company">Sagarmatha College of Science & Technology</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2015-2017</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Plus Two (+2)</span>
                                	<span className="d_company">DAV College</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2015</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">SLC</span>
                                	<span className="d_company">Gyanodaya Secondary School</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="spacer-double"></div>
			</div>
		</div>
	);
}

export default hero;