## Instalare - rulare - imagine Docker
```bash
```

## Instalare locala
```bash
# clone proiect repository
# cd proiect
npm install
```

## Build - local
```bash
npm run build
```

## Rulare
```bash
npm run start
# or
node dist/index.js
``` 

### Vezi in browser:
`http://localhost:3333`
### Vezi in terminal:
```bash
curl 'http://localhost:3333'
```

## Development
```bash
npm run start:dev
```

## Build - Docker
```bash
# cd proiect dir
# sudo service docker start
docker build . -t eugen.dinu/proiect-fiab-testare
```

## Listeaza imaginile Docker create
```bash
docker images
```

## Ruleaza imaginea Docker (-d)
```bash
docker run --name proiect -p 3333:3333 -d eugen.dinu/proiect-fiab-testare
```
## Inspecteaza procesele Docker
```bash
docker ps
```
### Listeaza output-ul aplicatiei
```bash
docker logs proiect
```
### Verifica functionalitatea
```
curl localhost:3333
```
### Intra in container
```bash
docker exec -it proiect /bin/bash
# exit
```

### Opreste imaginea
```bash
docker stop proiect
```