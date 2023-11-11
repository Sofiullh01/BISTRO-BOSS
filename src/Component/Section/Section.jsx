import PropTypes from 'prop-types'

const Section = ({heading,subHeading,text}) => {
    return (
        <div className='text-center md:w-4/12 mx-auto my-8'>
            <p className='text-[#D99904] font-medium pb-2'>{subHeading}</p>
            <h3 className='text-4xl border-y-2 '>{heading}</h3>
            <p>{text}</p>
        </div>
    );
};

Section.propTypes ={
    heading: PropTypes.string,
    subHeading: PropTypes.string,
    text: PropTypes.string,
}
export default Section;