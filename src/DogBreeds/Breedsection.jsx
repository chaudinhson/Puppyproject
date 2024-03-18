import ShowBreedinfo from "./ShowBreedinfo";

const Breedsection = () => {
  return (
    <>
      <div className="breedtitle row">
        <h1 className="col-xl-12">ALL DOGS BREEDS</h1>
        <p>PATRONA PUPPY</p>
      </div>
      <div className="breedsection row">
        <div className="filterbox col-xl-2">
          <div className="searchbox">
            <input type="text" placeholder="Search" />
          </div>
          <div className="filterbox">
            <h2>Filter</h2>
            <h4>Character</h4>
            <ul>
              <li>
                <span>Hypoallergenic</span>
              </li>
              <li>
                <span>Fluffy</span>
              </li>
              <li>
                <span>Smartest</span>
              </li>
              <li>
                <span>Best Guard</span>
              </li>
            </ul>
            <h4>Geography</h4>
            <ul>
              <li>
                <span>Asia</span>
              </li>
              <li>
                <span>America</span>
              </li>
              <li>
                <span>Europe</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="sectionbox col-xl-10">
          <ShowBreedinfo />
        </div>
      </div>
    </>
  );
};
export default Breedsection;
