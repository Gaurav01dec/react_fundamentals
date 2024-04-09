import reactIMG from "../assets/react-core-concepts.png"

const titles = ["Fundamental", "Crucial", "Core"]  

function generateRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    return (<header>
      <img src={reactIMG} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {titles[generateRandomNumber(2)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>)
  }