const NumberKm = parseInt( prompt('Inserisci numero di Km che vuoi percorrere') );
const Age = parseInt( prompt('Inserisci la tua età') );
const CostoBiglietto= NumberKm * 0.21;
const ScontoMinorenni= CostoBiglietto * (20 / 100);
const ScontoOver65= CostoBiglietto * (40 / 100);

let PrezzoFinale;

if ( isNaN(NumberKm) || isNaN(Age) ) {
    PrezzoFinale = "C'è un errore nella scrittura dei dati";
} else if (Age <= 18 ){
    PrezzoFinale = CostoBiglietto - ScontoMinorenni;
    PrezzoFinale = PrezzoFinale.toFixed(2);
} else if (Age >= 65 ){
        PrezzoFinale = CostoBiglietto - ScontoOver65;
        PrezzoFinale = PrezzoFinale.toFixed(2);
} else {
    PrezzoFinale= CostoBiglietto;
}

document.getElementById('prezzo_finale').innerHTML += PrezzoFinale + "Euro" ;

