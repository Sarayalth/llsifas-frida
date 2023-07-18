llsifas-frida
-------

installation steps:
- download [libscript.so](https://raw.githubusercontent.com/Sarayalth/llsifas-frida/main/libscript.so) and [libfrda.config.so](https://raw.githubusercontent.com/Sarayalth/llsifas-frida/main/libfrda.config.so)
- change `ServerEndpoint` and/or `RsaPublicKey` in `libfrda.config.so` (open as a text file)
- copy `libscript.so` and `libfrda.config.so` into your apk lib folder (`arm64-v8a` for 64bit, `armeabi-v7a` for 32bit)
- download latest frida-gadget for your platform and cpu (https://github.com/frida/frida/releases/latest)
- move the frida-gadge .so into the lib folder and rename it as `libfrda.so`

to-do:
- iOS?


`npm run build` builds the script  
`npm run watch` builds the script in watchmode, so everytime you save it will rebuild  

`index.ts` contains the frida script  
`libscript.so` is the built script  
`libfrda.config.so` is the config file for the script, you can open it as a normal json file  
