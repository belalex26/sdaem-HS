import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector} from '../../hook';

import { fetchNews } from '../../redux/slices/news';
import New from '../../components/new/new';
import MainLayout from '../../components/main-layout/main-layout'
import { Link } from 'react-router-dom';



const News = () => {

  const dispatch = useAppDispatch()
  const news = useAppSelector(state => state.news.news)
  const isLoaded = useAppSelector(state => state.news.loading)
  const [newsArr, setNewsArr] = useState([])

  useEffect(() => {
    dispatch(fetchNews())
  }, [])

  console.log(typeof news)

  if (!isLoaded) {
    return <MainLayout>
      <p>Loading ...</p>
    </MainLayout>
  }
  
  return (
    <MainLayout>
    <div className="news">
      <ul className="news__list">
        {news.map(item =>
          <li key={item.id}>
              <img src={item.img} alt="фото новости" />
              <h3>{item.title}</h3>
              <p>{item.preview}</p>
              <div>
                <p>{item.date}</p>
                <Link to={`news/:${item.id}`}>читать</Link>
              </div>
          </li>
        )}
      </ul>
    </div>
    </MainLayout>
  );
}

export default News;