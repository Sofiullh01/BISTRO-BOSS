import PropTypes from 'prop-types'

const MenuItems = ({items}) => {
    const{name,image,price,recipe} = items || {};
    return (
        <div className='text-gray-500 flex space-x-4'>
            <img style={{borderRadius: '0 250px 250px 250px'}} className='w-[120px] ' src={image} alt="" />
            <div>
                <h3 className='uppercase text-black'>{name}----------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'> ${price}</p>
        </div>
    );
};

MenuItems.propTypes ={
    items: PropTypes.object,
}
export default MenuItems;