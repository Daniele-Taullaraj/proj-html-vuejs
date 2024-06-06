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
 
