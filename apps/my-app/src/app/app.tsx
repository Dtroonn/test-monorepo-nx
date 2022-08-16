// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { Button } from '@test-monorepo/ui-kit'

export function App() {
  return (
    <>
    <div style={{display: 'flex', justifyContent: 'center', padding: 50}}>
    <Button>click my app button</Button>
    </div>
      <NxWelcome title="my-app" />
      <div />
    </>
  );
}

export default App;
