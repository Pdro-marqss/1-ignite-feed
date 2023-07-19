//components
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
//styles
import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Pdro-marqss.png',
      name: 'Pedro Marques',
      role: 'Software Enginer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋🏼' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare ⛑' },
      { type: 'link', content: 'Pdro-marqss/doctorcare' },
    ],
    publishedAt: new Date('2023-06-01 15:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋🏼' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare ⛑' },
      { type: 'link', content: 'Pdro-marqss/doctorcare' },
    ],
    publishedAt: new Date('2023-05-30 21:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

