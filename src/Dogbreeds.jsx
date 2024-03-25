import Breedsection from "./DogBreeds/Breedsection";
import Dogbreedspage from "./HeaderBackground/Dogbreedspage";
import "./DogBreeds/Dogbreeds.css";
const Dogbreeds = () => {
  return (
    <div className="dogbreedbox">
      <Dogbreedspage />
      <Breedsection />
    </div>
  );
};
export default Dogbreeds;
