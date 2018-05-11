var refScript = document.body.getElementsByTagName("script")[0];
document.addEventListener(
  "WebComponentsReady",
  function componentsReady() {
    document.removeEventListener("WebComponentsReady", componentsReady, false);

    var script = document.createElement("script");
    script.async = true;
    script.src = "/assets/app.js";
    script.setAttribute("nomodule", true);
    refScript.parentNode.insertBefore(script, refScript);

    var scriptModule = document.createElement("script");
    scriptModule.async = true;
    scriptModule.src = "/assets/app.module.js";
    scriptModule.setAttribute("type", "module");
    refScript.parentNode.insertBefore(scriptModule, refScript);
  },
  false
);

var es5_script = document.createElement("script");
es5_script.async = true;
es5_script.src = "/vendor/custom-elements-es5-adapter.js";
es5_script.setAttribute("nomodule", true);

var wc_script = document.createElement("script");
wc_script.async = true;
wc_script.src = "/vendor/webcomponents-loader.js";

refScript.parentNode.insertBefore(es5_script, refScript);
refScript.parentNode.insertBefore(wc_script, refScript);
