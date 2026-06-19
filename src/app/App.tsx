import './styles/global.css'
import styles from "./App.module.css";
import Layout from './layout/Layout';
import { RouterProvider } from 'react-router';
import { router } from './routes/routes';


export default function App() {

  return (
    <div className={styles.app}>
       <Layout>
            <RouterProvider router={router} />
        </Layout> 
    </div>
  )
}