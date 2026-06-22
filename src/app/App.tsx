import './styles/global.css'
import styles from "./App.module.css";
import { RouterProvider } from 'react-router';
import { router } from './routes/routes';


export default function App() {

  return (
    <div className={styles.app}>
        <RouterProvider router={router} />
    </div>
  )
}