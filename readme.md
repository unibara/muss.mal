# muss.mal 🚽 
###### die Webapp, die dir die nächsten öffentlichen Toiletten in der Nähe zeigt!

## Motivation + Idee

Dieses Projekt ist sehr stark an den Instagramkanal @got2go inspiriert, der eine Liste mit öffentlichen Toiletten um New York City teilt. Diese ist aber **nur über Google Maps einsichtbar** und hat leider nur Daten für eine Stadt. Das soll dieses Projekt ändern. Ziel ist also eine Webapp, die mittels den offenen Daten von OpenStreetMaps die nähesten Toiletten in einer Liste anzeigen und nach den nötigen Kriterien filtern kann!

## Roadmap
- [x] OSM-Daten fetchen (-> Overpass-API)
    - [ ] Nodes in der Nähe vom Standort anzeigen
        - [ ] Abfragen des Standorts per API
        - [ ] Einbinden in die Abfragebox (vom Standort aus die vier Viewboxpunkte berechnen)
        - [ ] Refresh
- [ ] Gewonnene Daten darstellen
    - [x] Koordinaten (Längen-, Breitengrad)
    - [ ] von der ID der Nodes aus Straßenangaben abfragen 
    - [ ] Tags (barrierefrei? unisextoilette? frauentoilette? männertoilette? kostenfrei?)
- [ ] Barrierefreiheit sicherstellen (Textreader)

- [ ] Filtermöglichkeit der Nodes nach Barrierefreiheit, Kosten usw.
- [ ] Projektlogo
- [x] PWA

## Credits 
Vielen Dank an
- die OpenStreetMap-Community, die die ganzen Geodaten, die dieses Projekt erst möglich machen, frei und offen aufbereiten!
- die Betreiber:innen von [overpass-api.de](overpass-api.de) und [Nominatim](nominatim.org)), ohne dessen Daten dieses Projekt unmöglich ist!
-  die Autor:innen von [Feather Icons](https://github.com/feathericons/feather), welche dankenswerterweise die Piktogramme für diese App stellen!
- die Autor:innen von [chota.css](https://github.com/jenil/chota), die mir durch ihre Arbeit das Design der Seite sehr vereinfacht haben!

## Lizenz
Dieses Projekt ist unter der MIT-Lizenz lizensiert.