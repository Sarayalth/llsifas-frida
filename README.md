llsifas-frida
-------

installation steps:
- build the script with `npm run build`
- change `ServerEndpoint` and/or `RsaPublicKey` in `libfrda.config.so`
- copy both files into your apk lib folder (`arm64-v8a` for 64bit, `armeabi-v7a` for 32bit)
- download latest frida-gadget for your platform and cpu
- move the frida-gadge .so into the lib folder and rename it as `libfrda.so`

to-do:
- iOS?


`npm run build` builds the script  
`npm run watch` builds the script in watchmode, so everytime you save it will rebuild  

`index.ts` contains the frida script  
`libscript.so` is the built script  
`libfrda.config.so` is the config file for the script, you can open it as a normal json file  