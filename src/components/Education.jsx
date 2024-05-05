import EducationItem from "./EducationItem";
function Education()
{
    const educationInfo =  [
        {
            schoolname: 'Pace University',
            degree:'Bachelor of Science',
            major: 'Computer Science',
            minor: 'Internet Technology',
            graddate: 'January 2008'
        }
    ];

return (
    <>
        <section className="resume-section p-3 p-lg-5 d-flex flex-column " id="education">
            <div className="my-auto">
                <h2 className="mb-5">Education</h2>
                {
                    educationInfo.map(function(data, index)
                    {
                        return(
                            <EducationItem key={"educationItem" + index} data={data} />
                        )
                    })          
                }
            </div>
      </section>
    </>
);
}

export default Education