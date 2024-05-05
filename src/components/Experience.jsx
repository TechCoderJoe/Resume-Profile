import ExperienceItem from './ExperienceItem';
function Experience()
{
    const experienceInfo =  [
        {
            companyname: 'Acorda Therapeutics, Inc',
            jobtitle:'Manager - Digital and Innovation Development',
            jobdesc: 'Joseph consistently demonstrated leadership in managing and optimizing technical systems. He established best practices for software development, implemented cost-saving measures in the AWS cloud environment, and spearheaded the transition to improved code management tools. His software development skills were utilized to create various backend systems, applications, and compliant websites. Furthermore, he ensured regulatory compliance for marketing materials and built a highly available web server cluster. This experience highlights his well-rounded technical expertise and ability to deliver impactful solutions.',
            servicedate: 'February 2010 - Present',
            programlanguages: ['C#', 'CSS', 'HTML', 'JavaScript', 'MS SQL', 'MySQL', 'PHP', 'VB' ],
            frameworks: ['ASP .Net', 'ASP .Net Core', 'Bootstrap', 'jQuery']
        },
        {
            companyname: 'Chase Media Group - Yorktown E-Publishing',
            jobtitle:'Junior Developer',
            jobdesc: 'Joseph significantly improved operational efficiency and departmental productivity for the classified department. He implemented an automated system for uploading weekly advertisements, streamlining workflows, and ensuring consistency. Additionally, he developed a robust web application management platform, leading to a marked improvement in advertisement handling and overall departmental effectiveness.',
            servicedate: 'April 2008 - November 2009',
            programlanguages: ['C#', 'CSS', 'HTML', 'JavaScript', 'MS SQL', 'PHP', 'VB'],
            frameworks: ['ASP .Net']
        }
    ];

    return (
        <>
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
                <div className="my-auto">
                    <h2 className="mb-5">Experience</h2>
                    {
                        experienceInfo.map(function(data, index)
                        {
                            return(
                                <ExperienceItem key={"experienceItem" + index} data={data} />
                            )
                        })
                    }

                    
                </div>
            </section>
        </>
    );
}

export default Experience