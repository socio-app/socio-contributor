function Logo(props) {
  return (
    <div className="App-logo">
      <img
        src={process.env.PUBLIC_URL + '/sociologokecil.png'}
        alt="Socio Contributor"
        className="socioLogo"
      />
      <h2>CONTRIBUTOR</h2>
    </div>
  )
}

export default Logo
