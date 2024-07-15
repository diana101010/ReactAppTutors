import Paper from './Paper';
import Sidebar from './Sidebar';
import schoolImage from '..mmm'
function App() {
  return (
    <main>
      {' '}
      <Sidebar />
    </main>
    <Paper>
        <img src ={schoolImage} alt='schoolImage'></img>
    </Paper>
  );
}
export default App;
