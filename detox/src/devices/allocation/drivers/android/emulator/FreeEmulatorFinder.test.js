const DeviceList = require('../../../DeviceList');
const { emulator5556, localhost5555, mockAvdName } = require('../__mocks__/handles');

describe('FreeEmulatorFinder', () => {
  const mockAdb = { devices: jest.fn() };

  /** @type {DeviceList} */
  let fakeDeviceList;
  /** @type {jest.Mocked<import('../../../DeviceRegistry')>} */
  let mockDeviceRegistry;
  let uut;

  beforeEach(() => {
    fakeDeviceList = new DeviceList();

    const DeviceRegistry = jest.createMockFromModule('../../../DeviceRegistry');
    mockDeviceRegistry = new DeviceRegistry();
    mockDeviceRegistry.getTakenDevicesSync.mockImplementation(() => fakeDeviceList);

    const FreeEmulatorFinder = require('./FreeEmulatorFinder');
    uut = new FreeEmulatorFinder(mockAdb, mockDeviceRegistry);
  });

  it('should return device when it is an emulator and avdName matches', async () => {
    mockAdbDevices([emulator5556]);
    const result = await uut.findFreeDevice(mockAvdName);
    expect(result).toBe(emulator5556.adbName);
  });

  it('should return null when avdName does not match', async () => {
    mockAdbDevices([emulator5556]);
    expect(await uut.findFreeDevice('wrongAvdName')).toBe(null);
  });

  it('should return null when not an emulator', async () => {
    mockAdbDevices([localhost5555]);
    expect(await uut.findFreeDevice(mockAvdName)).toBe(null);
  });

  const mockAdbDevices = (devices) => mockAdb.devices.mockResolvedValue({ devices });
});
