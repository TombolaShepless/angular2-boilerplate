# Boilerplate for Angular 2 using Webpack 2

## Commands
- `npm run dev`
- `npm run build`
- `npm run test` (Not Implemented)

## TODOs
- Unit Test Implementation
- Support multiple platforms (e.g. NativeScript)
- Tree Shaking (Rob Wormald is making progress on this but there are blockers, notably TS config "Cannot compile modules into 'es2015' when targeting 'ES5' or lower.")
- Integrate Offline Compiler (when stable/workable)

## Tree Shaking
Tried the following approach:

- TS (module: "commonjs", target: "es2015") ---> Babel (with es2015 presets)

The above approaches failed because Angular RC.1 only comes with commonjs modules and type defintion files, meaning we cannot get our hands on the "true" ES6 output to find *harmony unused* blocks which tree shaking depends on. Going to investigate other workaround solutions (possibly using closure compiler) as I really want this - Angular is far too big right now!
