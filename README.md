# InDecisionReactTutorial
yarn init
yarn global add live-server
npm install -g live-server
yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
live-server --v
live-server public
babel src/app.js --out-file=public/scripts/app.js --presets="env,react" 


