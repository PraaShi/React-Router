import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h2>Page Not Found..!!</h2>
      <p>hey this the wrong site so please enter the correct site which is included here.. so kindly return bace to the home page</p>
      <p>Go to the <Link to="/">HomePage</Link>.</p>

    </div>
  )
}

export default NotFound
