/**

	This code is generated.
	For more information see generation/README.md.
*/



class Detox {
  static setUpCustomEspressoIdlingResources(element) {
    return {
      target: element,
      method: "setUpCustomEspressoIdlingResources",
      args: []
    };
  }

  static runDetoxTests(element) {
    return {
      target: element,
      method: "runDetoxTests",
      args: []
    };
  }

  static launchMainActivity() {
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.Detox"
      },
      method: "launchMainActivity",
      args: []
    };
  }

  static startActivityFromUrl(url) {
    if (typeof url !== "string") throw new Error("url should be a string, but got " + (url + (" (" + (typeof url + ")"))));
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.Detox"
      },
      method: "startActivityFromUrl",
      args: [url]
    };
  }

  static startActivityFromNotification(dataFilePath) {
    if (typeof dataFilePath !== "string") throw new Error("dataFilePath should be a string, but got " + (dataFilePath + (" (" + (typeof dataFilePath + ")"))));
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.Detox"
      },
      method: "startActivityFromNotification",
      args: [dataFilePath]
    };
  }

  static getAppContext() {
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.Detox"
      },
      method: "getAppContext",
      args: []
    };
  }

  static generateViewHierarchyXml(shouldInjectTestIds) {
    if (typeof shouldInjectTestIds !== "boolean") throw new Error("shouldInjectTestIds should be a boolean, but got " + (shouldInjectTestIds + (" (" + (typeof shouldInjectTestIds + ")"))));
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.Detox"
      },
      method: "generateViewHierarchyXml",
      args: [{
        type: "boolean",
        value: shouldInjectTestIds
      }]
    };
  }

}

module.exports = Detox;