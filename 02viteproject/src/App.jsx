import Greet from "./Greet"
function App() {
  let username="Shivansh";
  let surname="Pandey"

    /*<--variables ko js me dalne ke liye curly brackets {} ka use karenge--> aur {} ke andar kewal evaluated expressions hi jata hai*/


  return (
    <>
     <h1>Hii ! {username} {surname}</h1>
     <Greet/>
    </>
  );
}
export default App
// Chahe Create-react-app ho ya vite jb bhi hum folder aur uske andar ka function banayege to hamesha pahla letter Capital hoga

//Niche export default karna hoga 

//Aur render karne ke liye import karna hoga