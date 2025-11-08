import { useState, useEffect } from 'react'
import './App.css'

function App() {

  // lista partecipanti di prova
  const partecipanti = [
    { nome: 'Marco', cognome: 'Rossi' },
    { nome: 'Giulia', cognome: 'Ferrari' },
    { nome: 'Luca', cognome: 'Russo' },
    { nome: 'Sara', cognome: 'Bianchi' },
    { nome: 'Matteo', cognome: 'Romano' },
    { nome: 'Elena', cognome: 'Gallo' },
    { nome: 'Davide', cognome: 'Costa' },
    { nome: 'Chiara', cognome: 'Fontana' },
    { nome: 'Alessandro', cognome: 'Conti' },
    { nome: 'Laura', cognome: 'Esposito' }
  ]

  // variabile di stato che conterrà la ricerca dell'utente
  const [search, setSearch] = useState("");

  // variabile di stato che conterrà la lista dei partecipanti che soddisfano la ricerca
  // inizialmente conterrà la lista completa dei partecipanti
  const [utenti, setUtenti] = useState(partecipanti);

  // Funzione che si attiva ad ogni battitura (onChange)
  const handleAggiorna = (event) => {
    // Prendo il nuovo valore dall'input
    const nuovoValore = event.target.value;

    // Aggiorno il valore della variabile di stato ricerca
    setSearch(nuovoValore);

  };

  // funzione che filtra i partecipanti in base al campo di ricerca
  const filtra = () => {
    const filtraUtenti = () => {
      return partecipanti.filter(utente => {
        // estraggo il campo nome e cognome e li converto in caratteri minuscoli
        const nome = utente.nome.toLowerCase();
        const cognome = utente.cognome.toLocaleLowerCase();
        // converto il campo ricerca in caratteri minuscoli
        const ricerca = search.toLocaleLowerCase();
        // se il campo di ricerca è contenuto nel nome o nel cognome, restituisco l'utente
        return nome.includes(ricerca) || cognome.includes(ricerca);
      })
    }
    // Aggiorno la variabile di stato che contiene la lista degli utenti corrispondenti al filtro
    setUtenti(filtraUtenti);
  }

  // Ogni volta che il campo di ricerca verrà modificato, richiamo la funzione filtra
  useEffect(() => {
    filtra();
  }, [search])


  return (
    <>
      <h3>PARTECIPANTI</h3>
      <input
        type="text"
        placeholder='Cerca utente'
        onChange={handleAggiorna}
      />
      <ul>
        {utenti.map(utente => (
          <li>
            {utente.cognome + " " + utente.nome}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
