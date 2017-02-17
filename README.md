# Smart Flanders website

Current status: speeltuin om vertrouwd te graken met github, HTML en Jekyll

Jekyll is een statische site generator. Daarmee kan je werk uitsparen: je moet immers niet op iedere pagina opnieuw de header en footer ontwikkelen, en de links tussen de pagina's worden automatisch gegenereerd.
Verder wordt ook de CSS uitgebreid met SASS.
Vanaf je iets verandert op github, zal github de site opnieuw genereren en online plaatsen. Voorlopig is dat op https://smartflanders.github.io

## Op uw eigen machine runnen

Als je een stapje verder wilt gaan dan in de browser iedere file te wijzigen, kan je ook de functionaliteiten van git gebruiken. Daar heb je uiteraard git voor nodig dan. Volg de tutorial op https://help.github.com/

Eenmaal je vertrouwd bent met hoe github op jouw machine werkt moet je Jekyll installeren, de statische site generator. Deze kan je hier vinden: https://jekyllrb.com/

## Veel gebruikte bestanden en mappen

 * Plaats uw images in `assets/`
 * De content van de home pagina zit in index.html
 * Als je een post wil schrijven, moet die in `_posts` geplaatst worden. Volg het voorbeeld dat er al instaat, of de tutorial hier: https://jekyllrb.com/docs/posts/
 * Als je een nieuwe pagina wilt aanmaken, volg dat het voorbeeld van `about.html`. Je kan ook dit in plaats van HTML in Markdown schrijven. Maak dan een file aan met de extensie .md in plaats van .html. Je zal wel dezelfde jekyll "frontmatter" nodig hebben (iets tussen `---` aan het begin van de pagina).
 * Als je wil prutsen aan het theme, is `_layouts` en `_includes` goeie startpunten. De CSS bevindt zich dan weer in `assets/`


