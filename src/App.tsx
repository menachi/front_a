import { FC, useEffect, useState } from 'react';
import ListGroup from './ListGroup';
import axios from 'axios';

interface Post {
  title: string,
  content: string,
  owner: string,
  _id: string
}

const App: FC = () => {
  const [items, setItems] = useState<string[]>([]);
  console.log('render');

  useEffect(() => {
    console.log('useEffect');
    axios.get<Post[]>('http://localhost:3000/posts').then((response) => {
      console.log(response.data);
      setItems(response.data.map((post) => post.title));
    });
  }, [])

  return (
    <>
      <ListGroup title='Posts List' items={items} onDelete={() => { }} />
    </>
  )
}

export default App
