import ReactDOM from 'react-dom/client'
import App from './App';

const root = document.getElementById('root') as HTMLElement;

const data = {...window.__PRELOAD_STATE__};

document.getElementById('__PRELOAD_STATE__')?.remove();

ReactDOM.hydrateRoot(root, <App data={data} />);

