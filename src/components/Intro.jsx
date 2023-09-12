import profileImg from "../assets/profile.jpg";

const Intro = () => {
  return (
    <div className="min-h-screen flex">
      <div className="flex-1 p-4 flex items-center justify-center">
        <div className="bg-red-700">
          <img
            className="w-full h-full object-cover max-h-[600px] max-w-[500px] transform translate-x-8 translate-y-8"
            src={profileImg}
          />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div>
          <h1 className="text-7xl font-semibold text-slate-800">
            I'm Adel Boulaouad.
            <br /> A machine learning engineer.
          </h1>
          <span className="w-20 h-3 bg-red-700 block mt-8"></span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
