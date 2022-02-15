# Project Setup

## NPM Setup:
`npm init`

## Typescript Setup:
`tsc --init`

tsconfig.json:
```json
{
  "compilerOptions": {
      "target": "es6",   
      "module": "commonjs",
      "outDir": "./dist",
      "strict": true,
      "esModuleInterop": true,
      "experimentalDecorators": true,
      "emitDecoratorMetadata": true
  }
}
```

package.json
```json
"main": "./src/index.ts",
"scripts": {
    "dev": "ts-node-dev --respawn --pretty --transpile-only src/index.ts",
    "build": "tsc",
    "start": "node ./dist/index.js"
},
```

Dependências:  
`npm install typescript`  
`npm instal -D @types/node ts-node ts-node-dev`

Express, CORS, dotent e helmet:  
`npm install express cors dotenv helmet`  
`npm -D install @types/express @types/cors`
