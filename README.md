# **IT2810 - Prosjekt 3 Smileys**

## Introduksjon
Prosjektet baserer seg på mattilsynets [smilefjesdatabase](https://data.norge.no/data/mattilsynet/smilefjestilsyn-p%C3%A5-serveringssteder), som inneholder alle restaurantinspeksjoner gjort av mattilsynet siden simlefjesordningens oppstart i 2016. Applikasjonen vår, som er en prototype i henhold til oppgavebeskrivelsen, gjør det mulig å søke gjennom denne databasen og få vist resultatet av søket i liste- og kartform. I tillegg er det mulig for brukerne av applikasjonen å gi deres egne vurderinger av restaurantene, fra 1-5 stjerner. 

[Link](http://it2810-02.idi.ntnu.no/prosjekt3/) til applikasjonen.
## Teknologi


### React
Sytemet er bygget på React, og bruker både ES5 og ES6 med både klasser og funksjonelle komponenter. Vi brukte npx create-react-app for å komme i gang med prosjektet.

### Redux

### Express - REST API
Backend av prosjektet er implementert ved hjelp av Express. Express er et Node.js web rammeverk. For at klienten og serveren skal kunne kommuniserer med hverandre har vi valgt å bruke REST APIs, og når de brukes sammen får vi en RESTful server. I Express settes det opp routes for å kunne bruke slike RESTful APIs. REST i seg selv er en protokoll som tar i bruk HTTP metoder for å kunne utføre CRUD operasjoner. CRUD operasjoner er create, read, update og delete operasjoner. 

### MongoDB
Gruppen tar i bruk MongoDB som er installert på den virtuelle maskinen. For å kunne hente nødvendig data må det gjøres spørringer til databasen. Disse inkluderer også pagination spørringer. (nødvendig?)

## Tredjeparts komponenter
#### Leaflet
For kartet brukes biblioteket [leaflet](https://leafletjs.com/), mens kart data blir hentet fra [Open street Map](https://www.openstreetmap.org/). Tredjepartkomponenten [react-leaflet](https://react-leaflet.js.org/) brukes til å  gjøre leaflet til en react komponent. For gruppering av markers, brukes [react-leaflet-markercluser](https://www.npmjs.com/package/react-leaflet-markercluster)
For å mappe restaurantadresser (geocoding), har vi brukt apiet fra [nominatim](https://nominatim.org)

#### Mongoose
Mongoose er en library for MongoDB og Nodejs som gjør det enklere å kunne jobbe med MongoDB. Vi har brukt mongoose for å definere Schemas, noe som hjelper med å definere spesifikke strukturer med forhandsdefinerte data types for dokumenter som hentes og gis til MongoDB. I dette prosjektet brukes det også Validation gjennom mongoose for å kunne validere data typer. Mongoose gjør det også generelt mye enklere å kunne holde Schemas konsistent når det gjøres operasjoner på databasen (MongoDB). 

## React komponentstruktur
*  App
*  Searchbar
*  ReactSelectComponent
*  Map
*  React-Leaflet-Component
*  List
*  ListRow

### Hierarki diagram
![Diagram](/uploads/f395e1197c0c68d0785cf00e45631c80/Diagram.PNG)

## Forhåndskrav
For å kjøre prosjektet lokalt, trengs Node.js og NPM. NPM følger med når en laster ned [Node.js](https://nodejs.org/en/download/)

##### Installering
*   Først må prosjektet klones. Tast følgende i terminalen for å klone prosjektet: `git clone https://gitlab.stud.idi.ntnu.no/IT2810-H19/teams/team-2/project-3.git`
*   Gå deretter inn i den klonede mappen ved å skrive følgende i terminalen: `cd project-3`
*   Installer nødvendige filer:
    * I den klonede mappen tast følgende: `npm install`
    * Gå deretter inn i client mappen og tast: `npm install`
    * Gå deretter inn i backend mappen og tast: `npm install`
    * Tilslutt tast følgende kommando i terminalen, uavhengig av hvilken mappe du befinner deg i: `npm install -g nodemon concurrently` 
*   Gå tilslutt i den første klonede mappen, project-3 og tast: npm start

Husk du må være koblet til NTNU nett: enten være på campus eller bruke vpn. 


## Innhold og funksjonalitet


## Testing


## Inspirasjon og kilder
Backend koden er inspirert og delvis hentet fra: Carnes, Beau: Learn the MERN stack by building an exercise tracker — MERN Tutorial. Fra: https://medium.com/@beaucarnes/learn-the-mern-stack-by-building-an-exercise-tracker-mern-tutorial-59c13c1237a1. [15.10.2019]


## Git-konvensjoner

### Branches
*   master: oppdateres ved deployment
*   dev: utviklings-branch. Denne oppdateres jevnlig, hver gang en feature er ferdig
*   feat/feature-name: en branch som brukes for å lage forbedret funksjonalitet av en feature



