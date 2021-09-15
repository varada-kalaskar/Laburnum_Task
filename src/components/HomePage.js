import FoodCarousel from "./FoodCarousel";

const HomePage = () => {
    return ( 
    <div className="homepage">
        <h2 style={{color:'#fff',marginBottom:'2.5vh'}}>My Favourite Foods</h2>
        <FoodCarousel/>
    </div> 
    );
}
 
export default HomePage;