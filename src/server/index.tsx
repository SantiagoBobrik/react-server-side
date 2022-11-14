import ReactDOM from 'react-dom/server';
import express, {Request, Response} from 'express';
import path from 'path';
import App from '../client/App';
import axios from 'axios'
import fs from 'fs'

const app = express();

app.use('/public', express.static(path.join(__dirname, '..', '..', 'public')));

const HTML = fs.readFileSync(path.join('public/index.html'), 'utf-8');

app.get('/', async (req :Request, res: Response):Promise<void> => {
  
  const { data } = await axios.get('https://rickandmortyapi.com/api/character');
  
  const component = ReactDOM.renderToString(<App data={data} />);

  const script = ReactDOM.renderToString(<script id='__PRELOAD_STATE__' dangerouslySetInnerHTML={{__html: `window.__PRELOAD_STATE__= ${JSON.stringify(data)};`}}/>)
  
  const page = HTML
    .replace('__REACT_COMPONENT__', component)
    .replace('__PRELOAD_STATE__',script );

  res.send(page);
});

app.listen(3000, () => {  
  console.log('server started: http://localhost:3000');
});
