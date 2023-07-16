import "frida-il2cpp-bridge";

rpc.exports = {
  init(stage, parameters) {
    let awaitForCondition = function (callback: any) {
      let int = setInterval(function () {
        if (
          Module.findExportByName(
            "libil2cpp.so",
            "il2cpp_profiler_install_thread",
          )
        ) {
          clearInterval(int);
          callback();
          return;
        }
      }, 0);
    };

    function hook() {
      Il2Cpp.perform(() => {
        const assembly = Il2Cpp.domain.assembly("Assembly-CSharp").image;
        const mscorlib = Il2Cpp.domain.assembly("mscorlib").image;

        const title = assembly.class("LLAS.DM.TitleDM");
        const testModePeriod = title.method("IsHoldingTestModePeriod");

        const Config = assembly.class("DotUnder.Config");
        const ServerEndpoint = Config.method("get_ServerEndpoint");

        const DMCryptography = assembly.class("DotUnder.DMCryptography");
        const CreateRSAProvider = DMCryptography.method("CreateRSAProvider");
        const RSACryptoServiceProvider = mscorlib.class(
          "System.Security.Cryptography.RSACryptoServiceProvider",
        );

        CreateRSAProvider.implementation = function (): any {
          const newProvider = RSACryptoServiceProvider.new();
          newProvider.method("FromXmlString").invoke(
            Il2Cpp.string(parameters.RsaPublicKey),
          );
          return newProvider;
        };

        testModePeriod.implementation = function (): boolean {
          return true;
        };

        ServerEndpoint.implementation = function (): Il2Cpp.String {
          return Il2Cpp.string(parameters.ServerEndpoint);
        };
      });
    }

    Java.perform(() => awaitForCondition(hook));
  },
};
