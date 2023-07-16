import lief

path64 = "C:/Users/saray/Desktop/llsifas/en/3.12.0-mod/lib/arm64-v8a/libmain.so"
path32 = "C:/Users/saray/Desktop/llsifas/en/3.12.0-mod/lib/armeabi-v7a/libmain.so"

libnative64 = lief.parse(path64)
libnative64.add_library("libfrda.so") # Injection!
libnative64.write(path64)

libnative32 = lief.parse(path32)
libnative32.add_library("libfrda.so") # Injection!
libnative32.write(path32)
