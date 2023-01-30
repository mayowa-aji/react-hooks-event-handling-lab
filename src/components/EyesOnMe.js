// Code EyesOnMe Component Here
function EyesOnMe () {
  function handleBlur(event) {
    console.log('Good!')

  }
  function handleFocus(event) {
    console.log('Hey! Eyes on me!')

  }
  return (
    <button
    onFocus={handleFocus}
    onBlur={handleBlur}
    >Eyes on me</button>
  )
}

export default EyesOnMe;
