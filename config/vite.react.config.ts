import { UserConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export const pathToSrcReact = '/src/app-react/main.tsx'

export const reactConfig: UserConfig = {
  plugins: [reactRefresh()]
}
