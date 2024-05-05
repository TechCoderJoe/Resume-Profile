import PropTypes from 'prop-types';
function ExperienceItem({data})
{
    ExperienceItem.propTypes = {
        data: PropTypes.shape({
          jobtitle: PropTypes.string.isRequired,
          companyname: PropTypes.string.isRequired,
          servicedate: PropTypes.string.isRequired,
          jobdesc: PropTypes.string.isRequired,
          programlanguages: PropTypes.arrayOf(PropTypes.string),
          frameworks: PropTypes.arrayOf(PropTypes.string)
        }).isRequired
    };

    return (
        <>
            <div className="resume-item  mb-5">
                <div className="mr-auto d-flex flex-column flex-md-row justify-content-between" >
                    <div>
                        <h3 className="mb-0">{data.jobtitle}</h3>
                        <div className="subheading">{data.companyname}</div>
                    </div>
                    <div className="resume-date text-md-end">
                        <span className="text-primary">{data.servicedate}</span>
                    </div>
                </div>
                <div className="mr-auto">
                    <p className="mt-3">{data.jobdesc}</p>
                    {
                        data.programlanguages.length > 0 ? 
                        (
                            <>
                                <div className="subheading">Programing Languages:</div>
                                <p>{data.programlanguages.map((item, index) => ((index ? ', ': '') + item ))}</p>
                            </>
                        ) : (null)
                    }

                    {
                        data.frameworks.length > 0 ? 
                        (
                            <>
                                <div className="subheading">Frameworks:</div>
                                <p>{data.frameworks.map((item, index) => ((index ? ', ': '') + item ))}</p>
                            </>
                        ) : (null)
                    }
                </div>
            </div>
        </>
    );
}

export default ExperienceItem