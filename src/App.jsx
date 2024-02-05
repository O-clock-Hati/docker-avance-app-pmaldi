import './App.css'
function App() {
  const promo = import.meta.env.VITE_PROMO
  const env = import.meta.env.VITE_ENV

  return (
    <>
      <div>
<img src='https://oclock.io/wp-content/uploads/2023/11/logo-noir-blanc-rouge-768x768_centre-rond720px.png' alt="React Logo" width="200" />
      </div>
      {( promo ? <h1>Bonjour {promo} !</h1> : <h1>Bonjour !</h1>)}
      {(env === 'prod' ? <h2>Vous êtes actuellement en mode production</h2> : <h2>Vous êtes actuellement en mode développement</h2>)}
    </>
  )
}

export default App
