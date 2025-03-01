import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-info">
      </header>
    </div>
  );
}

let time = 0;
function animate() {
  const movingWord = document.getElementById('movingWord');
  const amplitude = 20;
  const frequency = 0.3;
  const waveOffset = amplitude * Math.sin(frequency * time);
  movingWord.style.transform = `translateY(${waveOffset}px)`;
  time += 0.1;
  requestAnimationFrame(animate);
}

animate();
export default App;
