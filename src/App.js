import repair from './image/repair.png';
import spares from './image/spares.png';
import sales from './image/sales.png';

function App() {
  return (
    <div>
      <div class="logo-details">
        <h2>REPAIRS</h2>
        <img src={repair} height="50em" width="50em" />
        <h5>K long established</h5>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <a href="">More</a>
      </div>
      <div class="logo-details">
        <h2>Spares</h2>
        <img src={spares} height="50em" width="50em" />
        <h5>K long established</h5>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <a href="">More</a>
      </div>
      <div class="logo-details">
        <h2>sales</h2>
        <img src={sales} height="50em" width="50em" />
        <h5>K long established</h5>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <a href="">More</a>
      </div>
    </div>
  );
}

export default App;