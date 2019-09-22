<div align="center">

  <p>
    <a href="https://www.npmjs.com/package/amethyse-api"><img src="https://img.shields.io/npm/v/amethyse-api.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/amethyse-api"><img src="https://img.shields.io/npm/dt/amethyse-api.svg?maxAge=3600" alt="NPM downloads" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/amethyse-api/"><img src="https://nodei.co/npm/amethyse-api.png?downloads=true&stars=true" alt="npm installnfo" /></a>
  </p>
</div>
	
## Description
Module non-officiel pour l'api du bot Améthyse

## Installation
```
npm i amethyse-api
```

## Endpoint

 - url = Image url
 - pixelize (entre 1 et 50, default: 8)
 - posterize (entre 1 et 100, defaut : 5 )
 - blur (entre 1 et 30, defaut : 5)


|Nom|Params|
|--|--|
|circle|url|
|rejected|url|
|approved|url|
|glitch|url|
|distort|url|
|sepia|url|
|contrast|url|
|greyscale|url|
|invert|url|
|pixelize|url, pixelize|
|blur|url, blur|
|posterize|url, posterize|
|beautiful|url|
|afusion => avatar-fusion|url|
|wanted|url|
|3000years|url|
|rip |url|


## Utilisation
```
npm i amethyse-api
```

**Connexion :**
```js
    const ameClient = require("amethyse-api")
    const ameApi = new ameClient("token")
```
**Endpoint :**
```js
    let image = ameApi.generate("endpoint", {
	    "url" : "image url"
    })
    console.log(image)
```
*Returns*
```
<Buffer ... >
```
**Endpoint  Exemple:**
```js
    let image = ameApi.generate("glitch", {
	    "url" : "https://cdn.discordapp.com/avatars/450352584302002186/c0ff7e943ab89560503b8e99591ff888.png?size=2048"
    })
    console.log(image)
```
*Returns*
```
<Buffer ... >
```
