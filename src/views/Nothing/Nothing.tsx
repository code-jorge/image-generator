import { Link } from 'react-router-dom';
import css from './Nothing.module.css';

const Nothing = ()=> {

  return (
    <main className={css.main}>
      <div className={css.error}>
        <code className={css.errorText}>
          These are not the droids you are looking for
          <br />
          <Link className={css.link} to='/'>
            Try again
          </Link>
        </code>
      </div> 
    </main>
  )
}

export default Nothing