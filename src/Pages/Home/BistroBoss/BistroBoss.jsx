import BistroBossImg from "../../../assets/home/chef-service.jpg";

const BistroBoss = () => {
  return (
    <div className="relative my-10">
      <img src={BistroBossImg} alt="" />
      <div className="absolute bottom-14 bg-white w-[850px] py-12 right-36 px-32 text-center">
        <h3 className="text-4xl font-semibold">Bistro Boss</h3>
        <p className="text-base font-medium text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default BistroBoss;
