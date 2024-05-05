import SkillsItem from "./SkillsItem";
function Skills()
{
    const skillsInfo =  [
        {
            title: 'Languages',
            list:['C#','CSS', 'HTML', 'JavaScript', 'MS SQL', 'MySQL', 'PHP', 'VB']
        },
        {
            title: 'Frameworks',
            list:['ASP .Net', 'ASP .Net Core', 'Bootstrap', 'jQuery']
        },
        {
            title: 'Tools',
            list:['Acoustic Campaign', 'AWS', 'Email on Acid', 'GIT', 'Microsoft SQL Management Studio', 'MySQL Workbench', 'Visual Studio', 'Visual Studio Code', 'Wordpress']
        }
    ];

    return (
        <>
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
                <div className="my-auto">
                    <h2 className="mb-5">Skills</h2>
                    <div className="row">
                        {
                            skillsInfo.map(function(data, index)
                            {
                                return(
                                    <SkillsItem key={"skillsItem" + index} data={data} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skills