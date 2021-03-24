import Logo from '../components/Logo'
import InputMissionForm from '../components/InputMissionForm'
import { useDispatch, useSelector } from 'react-redux'
import { postMission } from '../store/actions'

function InputMissionPage() {
  const dispatch = useDispatch()
  const mission = useSelector((state) => state.mission)

  const uploadMission = () => {
    dispatch(postMission(mission))
  }

  return (
    <div className="App-body">
      <div className="container col-xl-6">
        <Logo />
        <InputMissionForm submitHandler={uploadMission} />
      </div>
      <div className="body-background-image"></div>
    </div>
  )
}

export default InputMissionPage
