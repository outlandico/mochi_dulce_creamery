
import './css/styling.css'; // Import your CSS file

// Import your image files
import myImage from './images/pina.png';
import frescaFlavor from './images/fresca.png';
import myLogo from './images/mochi_dulce_creamery_logo.png';

function Home() {
  // Render content
  return (
    <div className="container">
      <nav className="menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#loyalty">Loyalty</a></li>
        </ul>
      </nav>
      <img src={myImage} alt="My Image" className="img-size" />
      <img src={frescaFlavor} alt="Fresca Flavor" className="img-size" />
      <img src={myLogo} alt="My Logo" className="logo-size" />
    </div>
  );
}

export default Home;
