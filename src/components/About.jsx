import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub  } from '@fortawesome/free-brands-svg-icons'

function About()
{
    const socialIcons = [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/jdilonardo/",
            icon: faLinkedinIn
        },
        {
            name: "GitHub",
            url: "https://github.com/TechCoderJoe",
            icon: faGithub
        }
    ];
    
    return (
        <>
            <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
                <div className="my-auto">
                    <h1 className="mb-0">Joseph L. <span className="text-primary">DiLonardo</span></h1>
                    <div className="subheading mb-5">
                        <a href="mailto:jdilonardo@outlook.com">jdilonardo@outlook.com</a>
                    </div>
                    <div className="mb-5">
                        <p className="lead">Joseph is a passionate and results-oriented technology professional with over 16 years of experience in software development, web systems management, and digital innovation.</p>
                        <p className='lead'>Throughout his career, he has consistently demonstrated a strong ability to lead and manage projects, optimize and maintain infrastructure, develop secure and compliant applications, foster collaboration and innovation, and embrace new technologies. He is eager to leverage his well-rounded skillset and experience to contribute to a dynamic and challenging role where he can continue to learn, grow, and deliver impactful results. </p>
                        <p className='lead'>Beyond technical expertise, Joseph brings a well-rounded personality that fosters a healthy work-life balance. Active participation in his children&apos;s sport teams demonstrates strong teamwork and communication skills. His passion for strategic video games and board games, which are enjoyed with friends, highlights his ability to socialize and build relationships. This translates to promoting a positive and collaborative work atmosphere. Furthermore, his dedication to keeping up with evolving technology highlights a commitment to lifelong learning, a key asset in the ever-changing tech industry.</p>
                    </div>
                    <div className={"social-icons " + (socialIcons.length == 0 ? "display: none":"")} >
                        {
                            socialIcons.map(function(data, index)
                            {
                                return(
                                        <a key={"socialIconItem" + index} href={data.url} aria-label={data.name}><FontAwesomeIcon icon={data.icon} /></a>
                                )
                            })
                        }              
                    </div>
                </div>
            </section>
        </>
    );
}

export default About