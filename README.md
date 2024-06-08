# R82 Weather

Weather te permite obtener información meteorológica actualizada para cualquier ubicación.
Utiliza la API de OpenWeatherMap para obtener los datos del clima y muestra información como la temperatura, la humedad y una descripción del clima actual.

## Características

- Búsqueda de clima por ciudad
- Visualización de la temperatura actual, humedad y descripción del clima
- Interfaz de usuario amigable y responsiva
- Manejo de errores en caso de que la API no responda o la ciudad no sea encontrada

## Tecnologías Utilizadas

- React
- TypeScript
- Tailwind CSS para los componentes de la interfaz de usuario
- Axios para las solicitudes HTTP
- OpenWeatherMap API

## Requisitos Previos

- Node.js
- npm o yarn

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
