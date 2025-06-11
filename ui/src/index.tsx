import {createRoot} from 'react-dom/client';
import {App} from '@/Components/App/App';
// import 'semantic-ui-css/semantic.min.css';
import './assets/css/semantic.css';
import './assets/css/main.css';


// const container = document. getElementById('root')!; // TODO подумать над переносом в root
const root = createRoot(document.body);

root.render(<App/>);
