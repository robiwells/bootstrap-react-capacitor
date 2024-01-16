import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'dev.robwells.bootstrapreactcapacitor',
  appName: 'app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
