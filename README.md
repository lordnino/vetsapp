## Environment
Ionic:

   Ionic CLI          : 5.4.13 (/home/lordnino/.nvm/versions/node/v10.17.0/lib/node_modules/ionic)
   Ionic Framework    : ionic-angular 3.9.2
   @ionic/app-scripts : 3.2.4

Cordova:

   Cordova CLI       : 8.1.2 (cordova-lib@8.1.1)
   Cordova Platforms : android 6.4.0
   Cordova Plugins   : cordova-plugin-ionic 2.0.4, cordova-plugin-ionic-keyboard 2.1.3, cordova-plugin-ionic-webview 1.2.1, (and 17 
other plugins)

Utility:

   cordova-res : not installed
   native-run  : not installed

System:

   Android SDK Tools : 26.1.1 (/home/lordnino/Android/Sdk)
   NodeJS            : v10.17.0 (/home/lordnino/.nvm/versions/node/v10.17.0/bin/node)
   npm               : 6.11.3
   OS                : Linux 5.0


## Documentation
https://bit.ly/ion2fullapp-elite-version-documentation

##Config
You need to replace all values from src/environment/environment.ts with your own values.

# Workflow
##To run your app in the browser (great for initial development):
- Install all the npm dependencies
`npm install`

- Serve the app in your browser
`ionic serve`

##To run on iOS:
- Add cordova platform
`ionic cordova platform add ios` or `cordova platform add ios`

** *NOTE:* ** If you add the platform using the ionic command, then you may experience that nothing is happening for a while (you will just see 'Running command' in your terminal). In the other hand if you add the platform directly with cordova you will be getting verbose updates on what's doing in the background


- Run it (on your device if connected or in the emulator)
`ionic cordova run ios --prod`

** *NOTE:* ** We include the `--prod` flag to force Angular Ahead of Time compilation for the app


##To run on Android:
- Add cordova platform
`ionic cordova platform add android` or `cordova platform add android`

** *NOTE:* ** If you add the platform using the ionic command, then you may experience that nothing is happening for a while (you will just see 'Running command' in your terminal). In the other hand if you add the platform directly with cordova you will be getting verbose updates on what's doing in the background


- Run it (on your device if connected or in the emulator)
`ionic cordova run android --prod`

** *NOTE:* ** We include the `--prod` flag to force Angular Ahead of Time compilation for the app

##Review ionic CHANGELOG when updating ionic-angular version
https://github.com/driftyco/ionic/blob/master/CHANGELOG.md

# Configs
## Cordova (uses config.xml)
### [Mass saving platforms on an existing project](http://cordova.apache.org/docs/en/latest/platform_plugin_versioning_ref/index.html#mass-saving-platforms-on-an-existing-project)
`cordova platform save`
Use it when you have a pre-existing project and you want to save all the currently added platforms in your project.

## Ionic (uses package.json)
### [Clean and install](https://www.raymondcamden.com/2015/04/20/ionic-adds-a-new-state-feature/)
`ionic state reset`
This will remove everything then bring back what you have specified in the package.json file.

### [Store current state](https://www.raymondcamden.com/2015/04/20/ionic-adds-a-new-state-feature/)
`ionic state save`
To store the current platforms and plugins to the package.json

### [Restore current state](https://www.raymondcamden.com/2015/04/20/ionic-adds-a-new-state-feature/)
`ionic state restore`
This will add in the appropriate plugins and platforms from the package.json
