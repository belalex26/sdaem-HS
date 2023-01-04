import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector} from '../../hook';

import { fetchNews } from '../../redux/slices/news';
import New from '../../components/new/new';
import MainLayout from '../../components/main-layout/main-layout'



const News = () => {

  const dispatch = useAppDispatch()
  const news = useAppSelector(state => state.news.news)
  const isLoaded = useAppSelector(state => state.news.loading)
  const [newsArr, setNewsArr] = useState([])

  useEffect(() => {
    dispatch(fetchNews())
  }, [])

  console.log(news)

  if (!isLoaded) {
    return <MainLayout>
      <p>Loading ...</p>
    </MainLayout>
  }
  
  return (
    <MainLayout>
    <div className="news">
      <ul className="news__list">
        <p>Успешно</p>

      </ul>
    </div>
    </MainLayout>

  );
}

export default News;