import { useDispatch, useSelector } from 'react-redux'
import '../../styles/reset.scss'
import css from './App.module.scss'
// Redux
import { changeActiveHandler } from '../../store/actions/change'

export default function App() {
  const dispatch = useDispatch()
  const active = useSelector((state) => state.change.active)

  const changeActive = () => {
    dispatch(changeActiveHandler(!active))
  }

  return (
    <div className={css.app}>
      <div className={css.title}>REACT BOILERPLATE</div>
      <button onClick={changeActive} className={css.button}>
        Активировать блок
      </button>
      {active && <div className={css.block}>Active</div>}
    </div>
  )
}
