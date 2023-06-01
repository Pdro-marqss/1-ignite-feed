import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post(props) {

    console.log(props)
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/Pdro-marqss.png" />
                    <div className={styles.authorInfo}>
                        <strong>Pedro Marques</strong>
                        <span>Software Enginer</span>
                    </div>
                </div>

                <time title='11 de Maio as 08h:13m' dateTime='2022-05-11 08:13:30'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋🏼</p>

                <p>Acabei de subir um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat.</p>

                <p>👉🏼{' '}<a href=''>Pdro-marqss/doctorCare</a></p>

                <p>
                    <a href=''>#novoprojeto</a>{' '}
                    <a href=''>#nlw</a>{' '}
                    <a href=''>#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentário' />

                <footer>
                    <button type='submite'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}