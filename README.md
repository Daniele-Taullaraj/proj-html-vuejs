TEAM 2 = Samudra Ekanayake,Damiano Russo,Daniele Taullaraj

TRACCIA = iAcademy

SPARTIZIONE COMPONENTI LAYOUT :

HEADER    Samudra Ekanayake => AppHeader, AppCard
MAIN      Damiano Russo => SectionTextImg, Carousel, Behavior, CardContainer, BestTutor
FOOTER    Daniele Taullaraj => PageFooter [PricingPlansSection, ClientsSection, LinksFooterSection]

GENERAL: 
-Utilizzati per creare il progetto : HTML5, CSS(+BOOTSTRAP), JAVASCRIPT, VUE.JS, VITE.JS
-Le immagini sono contenute in una cartella 'img' all'interno della cartella 'assets'
-I dati utilizzati nella web-page sono contenuti all'interno di un file 'store.js' contenuto nella cartella 'data'


MAIN

-SectionTextImg:
1. con l'utilizzo di bootstrap andiamo a creare prima un contenitore generico, dove al suo interno costruiremo due righe.

2.dividiamo la prima riga in due colonne, una di testo una per l'immagine, usiamo principalmente le classi di bootstrap per dare lo stile al layout.

3. la struttura della seconda riga è pressochè identica, ma al suo interno vengono posizionati 2 caunter.

4.per generare i 2 counter inseriamo nel data dei valori di min e max (per ogni counter). in seguito sviluppiamo un metodo per ogni counter dove indichiamo che se il valore del counter è < al valore del counter max allora avremo un incremento finchè non raggiungerà il volore prefissato nella variabile.

5.aggiungiamo un evento di mauseover sul contenitore della sezione in cui sono presenti i 2 counter, in seguito sviluppiamo una funzione per far partire i caunter all'over.

6.inseriamo un data con un valore False, se il suo valore è diverso da quello indicato richiama le funzioni per far partire i 2 counter.


-Carousel Component:
1.Visualizzazione delle Slide: Ogni slide contiene un'immagine, un testo e due sottotesti. Le slide si alternano automaticamente ogni 3 secondi.

2.Navigazione Manuale: è possibile navigare manualmente tra le slide utilizzando i bottoni indicatori situati nella parte inferiore del carosello. Il bottone attivo è evidenziato con uno stile particolare.

3.Effetto Parallax: Il contenitore del carosello ha un effetto parallax che migliora l'estetica visiva dell'applicazione.

4.Data Properties: currentIndex: tiene traccia dell'indice della slide attualmente visualizzata. timer: memorizza l'ID dell'intervallo per lo scorrimento automatico. slides: contiene l'elenco delle slide da visualizzare, importate dallo store.

5.Methods: goToSlide(index): cambia la slide corrente all'indice specificato.

nextSlide(): avanza alla slide successiva, ritornando alla prima slide se l'ultima è già visualizzata.
startAutoScroll(): avvia lo scorrimento automatico delle slide ogni 3 secondi.
stopAutoScroll(): interrompe lo scorrimento automatico.


Tab Component behavior:
1.Navigazione tra Schede: Gli utenti possono navigare tra diverse schede, ognuna delle quali mostra contenuti differenti. La scheda attiva è evidenziata con uno stile particolare che cambia all'hover.

2.Visualizzazione del Contenuto: Ogni scheda contiene un titolo, un testo descrittivo, una lista di elementi e un'immagine. Il contenuto cambia dinamicamente in base alla scheda selezionata.

3.Data Properties: tabs: contiene l'elenco delle schede da visualizzare, importate dallo store. Ogni scheda ha un titolo, un contenuto, una lista di elementi e un'immagine.

4.Template: La struttura del template include una colonna con un elenco di schede e una colonna con il contenuto delle schede. Le schede sono generate dinamicamente utilizzando v-for, e la scheda attiva è evidenziata con uno stile particolare. Il contenuto delle schede cambia dinamicamente in base alla scheda selezionata, utilizzando v-show per mostrare la scheda attiva.


CardContainer:
1. Navigazione tra Card: Gli utenti possono navigare tra diversi gruppi di card. I gruppi di card cambiano automaticamente ogni pochi secondi.

2.Visualizzazione del Contenuto: Ogni card contiene un'immagine, un titolo, un nome, un contenuto e icone aggiuntive. Le card sono visualizzate in gruppi di tre per pagina.

3.Navigazione con Pallini: Pallini di navigazione consentono di passare rapidamente a un gruppo specifico di card.


Data Properties:
1.cards: contiene l'elenco delle card da visualizzare, importate dallo store. startIndex: indice di partenza per il gruppo di card da visualizzare. cardsPerPage: numero di card da visualizzare per pagina. timer: timer per il cambio automatico delle card.

C2.omputed Properties: displayedCards: restituisce le card attualmente visibili in base all'indice di partenza e al numero di card per pagina.

totalDots: calcola il numero totale di gruppi di card per i pallini di navigazione. 3. Methods: prevPage: va al gruppo di card precedente. nextPage: va al gruppo di card successivo. goToPage: va a un gruppo di card specifico cliccando sul pallino. startAutoScroll: inizia il timer per il cambio automatico delle card.


FOOTER

-PricingPlansSection
1.creato un div padre a cui è stato assegnato l'immagine di background,al suo interno inseriamo un titolo, uno span ed un div contenente le tabelle

2.allineate sulla stessa riga le 2 tabelle con un display flex, a quella a sinistra diamo una width del 25% ed il restante 75% per la tabella di destra

3.per mantenere le righe delle 2 tabelle sullo stesso piano diamo un'altezza fissa al th iniziale


-ClientsSection
1.creato un div con una larghezza massima di 1400px (per fare in modo che su schermi più grandi il contenuto principale non si spacchi)

2.al suo interno abbiamo delle immagini richiamate dallo 'store.clients' inserite all'interno di tag 'a' ,con il @mouseover gestiamo l'apparizione della stessa immagine con un opacità più chiara,facciamo ciò cambiando il valore della classe 'isActive'

3.le immagini scorrono verso sinistra grazie all'animazione chiamata 'slide' e per fare in modo che l'immagine che scompare a sinistra ricompaia a destra le immagini sono state richiamate 2 volte,solo che la seconda parte è stata resa invisibile grazie al 'overflow-hidden' contenuto nel padre


-LinksFooterSection
1.creato un div padre a cui è stato assegnato l'immagine di background ed al suo interno un'altro div con una max-width di 1400px che conterrà il contenuto della sezione

2.suddivisa la row in più colonne inserisco i vari link

3.suddivisa la sezione orizzontalmente con un 'hr' e nella parte inferiore andiamo ad inserire le icone dei social 


+++++++++++++
All'interno dell'App.vue dove andiamo ad inserire tutti i components è stato creato un button che compare dopo i 90vh (l'altezza dell'header),
che ha la funzione di riportare l'utente all'inizio della pagine al suo click.
Per rendere il button funzionante nel mounted è stato inserito un ascoltatore di eventi (scroll) al window " window.addEventListener('scroll', this.checkVisibilityButton);" ,ad ogni cambiamento dello scroll viene svolta la funzione 'checkVisibilityButton()' che mi cambia la visibilità del button quando si supera o meno i 90vh
 
