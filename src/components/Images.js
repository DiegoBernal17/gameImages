import Cab from '../assets/images/animals/caballo.png';
import Cer from '../assets/images/animals/cerdo.png';
import Gal from '../assets/images/animals/gallo.png';
import Gat from '../assets/images/animals/gato.png';
import Lob from '../assets/images/animals/lobo.png';
import Mos from '../assets/images/animals/mosca.png';
import Ove from '../assets/images/animals/oveja.png';
import Per from '../assets/images/animals/perro.png';
import Vac from '../assets/images/animals/vaca.png';
import Bien from '../assets/images/answers/bienhecho.jpg';
import Mal from '../assets/images/answers/malhecho.jpg';
import CabSound from '../assets/sounds/caballo.mp3';
import CerSound from '../assets/sounds/cerdo.mp3';
import GalSound from '../assets/sounds/gallo.mp3';
import GatSound from '../assets/sounds/gato.mp3';
import LobSound from '../assets/sounds/lobo.mp3';
import MosSound from '../assets/sounds/mosca.mp3';
import OveSound from '../assets/sounds/oveja.mp3';
import PerSound from '../assets/sounds/perro.mp3';
import VacSound from '../assets/sounds/vaca.mp3';

const Caballo = {
  name: "Caballo",
  image: Cab,
  sound: CabSound
}
const Cerdo = {
  name: "Cerdo",
  image: Cer,
  sound: CerSound
}
const Gallo = {
  name: "Gallo",
  image: Gal,
  sound: GalSound
}
const Gato = {
  name: "Gato",
  image: Gat,
  sound: GatSound
}
const Lobo = {
  name: "Lobo",
  image: Lob,
  sound: LobSound
}
const Mosca = {
  name: "Mosca",
  image: Mos,
  sound: MosSound
}
const Oveja = {
  name: "Oveja",
  image: Ove,
  sound: OveSound
}
const Perro = {
  name: "Perro",
  image: Per,
  sound: PerSound
}
const Vaca = {
  name: "Vaca",
  image: Vac,
  sound: VacSound
}
const BienHecho = {
  name: "Bien hecho",
  image: Bien,
  text: "¡Respuesta correcta!"
}
const MalHecho = {
  name: "Mal hecho",
  image: Mal,
  text: "Te haz equivocado :("
}

const AllAnimals = [Caballo, Cerdo, Gallo, Gato, Lobo, Mosca, Oveja, Perro, Vaca];

const RandomAnimals = () => {
  let animals = AllAnimals.sort(() => Math.random() - 0.5);
  return animals
}

export default { AllAnimals };
export { Caballo, Cerdo, Gallo, Gato, Lobo, Mosca, Oveja, Perro, Vaca, BienHecho, MalHecho, RandomAnimals };