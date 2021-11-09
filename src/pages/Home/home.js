import { Link } from "react-router-dom";
import Button from "../../components/Button/Button"

const Home = () => {

  return (
    <>
      <h1>Página Inicial</h1>
      <Link to='/login'>
        <Button buttonText='Continuar'></Button>
      </Link>
    </>
  )
}

export default Home