import PropTypes from 'prop-types';
function SkillsItem({data})
{
    SkillsItem.propTypes = {
        data: PropTypes.shape({
          title: PropTypes.string.isRequired,
          list: PropTypes.arrayOf(PropTypes.string).isRequired
        }).isRequired
    };

    return (
        <>
            <div className="col-sm-12 col-md-6">
                <div className="subheading">{data.title}</div>
                <ul className="ulNoBullet ulNoIndent">
                    {
                        data.list.map(function(skillsListItem, index){
                            return(
                                    <li key={"skillsListItem" + index}>{skillsListItem}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    );
}

export default SkillsItem