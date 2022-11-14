type AppProps = {
  data: any // eslint-disable-line 
}
type Character = {
  image: string,
  id: string
}
function App(props: AppProps) {

  const { data } = props;
  const { results } = data;
 
  return (
    <>
      <ul>
      {results.map(({image, id}:Character) => 
      <li key={id}> 
        <img src={image} alt="pic-character" width="50px" />
      </li>
      )}
      </ul>
    </>
  );
}

export default App;
