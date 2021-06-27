import { UserConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export const reactConfig: UserConfig = {
  plugins: [reactRefresh()]
}
