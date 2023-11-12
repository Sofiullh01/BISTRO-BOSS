import Section from "../../../Component/Section/Section";
import ShouldCard from "./ShouldCard";
import cardImg from '../../../assets/home/slide1.jpg'
import cardImg2 from '../../../assets/home/slide2.jpg'
import cardImg3 from '../../../assets/home/slide3.jpg'
const ShouldTry = () => {
    return (
        <div className="my-20">
            <Section
            subHeading={'---Should Try---'}
            heading={'CHEF RECOMMENDS'}
            ></Section>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-6">
                <ShouldCard
                image={cardImg}
                title={'Caeser Salad'}
                text={'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'}
                ></ShouldCard>
                <ShouldCard
                image={cardImg2}
                title={'Caeser Pizza'}
                text={'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'}
                ></ShouldCard>
                <ShouldCard
                image={cardImg3}
                title={'Caeser Pizza'}
                text={'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'}
                ></ShouldCard>
            </div>
        </div>
    );
};

export default ShouldTry;