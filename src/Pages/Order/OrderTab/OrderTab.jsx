import PropTypes from  'prop-types'
import FoodCard from '../../../Component/FoodCard/FoodCard';

const OrderTab = ({item}) => {
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-4 mb-16 mt-8">
          {
            item.map(items =><FoodCard
            items={items}
               key={items._id}></FoodCard>)
          }
          </div>
        </div>
    );
};
OrderTab.propTypes = {
    item: PropTypes.object,
}
export default OrderTab;