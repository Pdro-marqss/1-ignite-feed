//components
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
//styles
import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque impedit totam eius quae facere harum quod ducimus? Nemo, officiis vero hic id nostrum placeat officia vitae incidunt consequatur maxime distinctio?"
          />
          <Post
            author="Pedro Marques"
            content="Toma aqui meus Post super legal e util pra comunidade judaica do leste !"
          />
        </main>
      </div>
    </div>
  )
}

