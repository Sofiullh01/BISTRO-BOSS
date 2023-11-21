import PropTypes from 'prop-types';
import './card.css'

const ShouldCard = ({image,title,text}) => {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img className='w-full h-64 object-cover' id='imageCard'
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body justify-center items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{text}</p>
        <div className="card-actions ">
          <button className="btn text-[#BB8506]  hover:bg-black font-medium duration-1000">add to cart</button>
        </div>
      </div>
    </div>
  );
};
ShouldCard.propTypes ={
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
}
export default ShouldCard;
