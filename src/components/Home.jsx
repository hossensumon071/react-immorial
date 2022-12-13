import Hero from './Hero';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="home" style={{backgroundImage: "url('https://images.unsplash.com/photo-1639322534617-51f7e2612f33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60')"}}>
      <Navbar/>
      <Hero/>
    </div>
  );
};

export default Home;