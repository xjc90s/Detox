import Detox = require('./detox');

declare global {
  const detox: Detox.DetoxExportWrapper;
  const device: Detox.DetoxExportWrapper['device'];
  const element: Detox.DetoxExportWrapper['element'];
  const waitFor: Detox.DetoxExportWrapper['waitFor'];
  const expect: Detox.DetoxExportWrapper['expect'];
  const by: Detox.DetoxExportWrapper['by'];
  const web: Detox.DetoxExportWrapper['web'];
  const system: Detox.DetoxExportWrapper['system'];
  const copilot: Detox.DetoxExportWrapper['copilot'];
  const pilot: Detox.DetoxExportWrapper['pilot'];

  namespace NodeJS {
    interface Global {
      detox: Detox.DetoxExportWrapper;
      device: Detox.DetoxExportWrapper['device'];
      element: Detox.DetoxExportWrapper['element'];
      waitFor: Detox.DetoxExportWrapper['waitFor'];
      expect: Detox.DetoxExportWrapper['expect'];
      by: Detox.DetoxExportWrapper['by'];
      web: Detox.DetoxExportWrapper['web'];
      system: Detox.DetoxExportWrapper['system'];
      copilot: Detox.DetoxExportWrapper['copilot'];
      pilot: Detox.DetoxExportWrapper['pilot'];
    }
  }
}
