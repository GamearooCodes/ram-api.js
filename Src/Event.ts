
import EventEmitter from 'events'


let Events = new EventEmitter();

const packageName = "ram-api.js";

import * as currentVersion from "../package.json"

import * as fetch from 'npm-registry-fetch'
import { DemoEndpoints } from './Demo';



var test = setInterval(async() => {
    if(await checkForUpdates()) {
      if(currentVersion.version.includes("-dev") || currentVersion.version.includes("-beta")) {
        // does nothing if its -dev or -beta as they will trigger the checkers
        // left this blank for future checkers for the dev & beta tags
      } else {
        function isLatestInfo(obj: any): obj is { "dist-tags": { latest: string } } {
          return obj && obj["dist-tags"] && typeof obj["dist-tags"].latest === "string";
        }

        let latestVersion
        
        const latestInfo: unknown = await fetch.json(`/${packageName}`);
        if (isLatestInfo(latestInfo)) {
           latestVersion = latestInfo["dist-tags"].latest;
        } else {
          // Handle the case where latestInfo doesn't have the expected structure.
        }
      
      Events.emit("package-update", {name: 'ram-api.js', currentVersion: currentVersion.version, tag: "stable", latestVersion, toUpdate: `npm i ram-api.js@latest or yarn add ram-api.js@${latestVersion}`})
      }

      if((await apiVersion()).outdated) {

        let data = await apiVersion();

        if(!(await apiVersion()).supported) {
          Events.emit("ram-api-update", {outdated: data.outdated,
            supported: data.supported,
            version: data.version,
            latest: data.latest})
        }

      }

    }
}, 60000)


Events.on('stop-update-check', (data) => {
  clearInterval(test)
})

Events.on('start-update-check', (data) => {
  Events.emit("stop-update-check")
  test = setInterval(async() => {
    if(await checkForUpdates()) {
      if(currentVersion.version.includes("-dev") || currentVersion.version.includes("-beta")) {
        // does nothing if its -dev or -beta as they will trigger the checkers
        // left this blank for future checkers for the dev & beta tags
      } else {

      
        Events.emit("package-update", {name: 'ram-api.js', currentVersion, tag: "stable", toUpdate: "npm i ram-api.js@latest"})
      }
      if((await apiVersion()).outdated) {

        let data = await apiVersion();

        if(!(await apiVersion()).supported) {
          Events.emit("ram-api-update", {outdated: data.outdated,
            supported: data.supported,
            version: data.version,
            latest: data.latest})
        }

      }
    }
}, 60000)
})

async function apiVersion(): Promise<{
  outdated: Boolean,
  supported: Boolean,
  version: string,
  latest: string

}> {
  let data2 = {outdated: false, supported: false, version: "", latest: ""};
  new DemoEndpoints(60000, 0).versionInfoAsync("v13").then(data => {
 
    data2 =  {
      outdated: data.outdated,
      supported: data.supported,
      version: data.version,
      latest: data.latest
    };

  });

  return {
    outdated: data2.outdated,
    supported: data2.supported,
    version: data2.version,
    latest: data2.latest
  };
}


async function checkForUpdates() {
    try {
      
        function isLatestInfo(obj: any): obj is { "dist-tags": { latest: string } } {
          return obj && obj["dist-tags"] && typeof obj["dist-tags"].latest === "string";
        }

        let latestVersion
        
        const latestInfo: unknown = await fetch.json(`/${packageName}`);
        if (isLatestInfo(latestInfo)) {
           latestVersion = latestInfo["dist-tags"].latest;
        } else {
          // Handle the case where latestInfo doesn't have the expected structure.
        }
        
  
      if (latestVersion !== currentVersion.version) {
       return true;
        
      } else {
        return false
      }
    } catch (error) {
     
    }
  }

  export {Events}