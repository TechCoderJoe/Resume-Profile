import PropTypes from 'prop-types';
function EducationItem({data})
{
    EducationItem.propTypes = {
        data: PropTypes.shape({
          schoolname: PropTypes.string.isRequired,
          degree: PropTypes.string.isRequired,
          graddate: PropTypes.string.isRequired,
          major: PropTypes.string.isRequired,
          minor: PropTypes.string
        }).isRequired
    };
    

    return (
        <>
            <div className="mr-auto resume-item">
                <div className="mr-auto d-flex flex-column flex-md-row justify-content-between" >
                    <div>
                        <h3 className="mb-0">{data.schoolname}</h3>
                        <div className="subheading">{data.degree}</div>
                    </div>
                    <div className="resume-date text-md-end">
                        <span className="text-primary">{data.graddate}</span>
                    </div>
                </div>
                <div className="mr-auto">
                    <div className="mt-3">
                        Major: {data.major}
                        { data.minor ? (<><br />Minor: {data.minor}</>) : (null)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default EducationItem