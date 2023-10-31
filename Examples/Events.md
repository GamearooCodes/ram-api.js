<div align="center">
  <br />
  <p>
    <a href="https://api.rambot.xyz"><img src="https://gamearoo.top/ram/ramapijs.png" width="546" alt="ram-api.js" /></a>
  </p>
  <br />
  <p>
    <a href="https://discord.gg/q3ycRjBG9q"><img src="https://img.shields.io/discord/1068088656377692170?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/ram-api.js"><img src="https://img.shields.io/npm/v/ram-api.js.svg" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/ram-api.js"><img src="https://img.shields.io/npm/dt/ram-api.js.svg?maxAge=3600" alt="npm downloads" /></a>
    <a href="https://github.com/Gamearoos-development/ram-api.js/actions"><img src="https://github.com/Gamearoos-development/ram-api.js/actions/workflows/text.yml/badge.svg" alt="Tests status" /></a>
    
  </p>
  <a href="https://nodei.co/npm/ram-api.js/"><img src="https://nodei.co/npm/ram-api.js.png?downloads=true&downloadRank=true&stars=true"></a>
</div>

[Back to readme](../README.md)

> Events Example

```javascript
import * as ramapi from "ram-api.js"; // typescript
const ramapi = require("ram-api.js"); // javascript

const apiEvent = ramapi.Events;
// listion
apiEvent.on("package-update", (data) => {
  console.log(data);
});

apiEvent.on("ram-api-update", (data) => {
  console.log(data);
});

//emit to change settings or stop event loops

apiEvent.emit("stop-update-check"); // will stop the update checker that binds to package-update & ram-api-update

apiEvent.emit("start-update-check"); // will start the update checker that binds to package-update & ram-api-update will stop first if already running to avoid duplicates
```

> Listenable Events

package-update
ram-api-update

> Emit Events

stop-update-check

start-update-check
