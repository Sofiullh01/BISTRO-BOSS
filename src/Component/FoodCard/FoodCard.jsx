import PropTypes from  'prop-types'
const FoodCard = ({items}) => {
  const {name, image,price,recipe} = items || {};
  const handleAddtoCart = food =>{
    console.log(food)
  }
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl rounded-none h-full">
        <figure>

          <img
            className="w-full h-64 object-cover"
            id="imageCard"
            src={image}
            alt="Shoes"
          />
          
        </figure>
        <p className='bg-black text-white right-3 top-5  absolute px-4 font-medium py-1'>${price}</p>
        <div className="card-body justify-center items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions ">
            <button onClick={()=>handleAddtoCart(items)}
             className="btn text-[#BB8506] border-b-4 border-[#BB8506] border-t-0 border-r-0 border-l-0 hover:bg-black font-medium duration-1000">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
FoodCard.propTypes = {
  items: PropTypes.object,
}
export default FoodCard;
