describe('Temp file transfer', () => {
  let adb;
  let uut;
  beforeEach(() => {
    const ADB = jest.createMockFromModule('../exec/ADB');
    adb = new ADB();

    const { TempFileTransfer } = require('./TempFileTransfer');
    uut = new TempFileTransfer(adb);
  });

  it('should use the default temp-dir', async () => {
    await uut.prepareDestinationDir('device-id');

    expect(adb.shell).toHaveBeenCalledWith('device-id', `rm -fr /data/local/tmp/detox`);
  });
});
