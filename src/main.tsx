import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {Provider} from "react-redux";
import store, {persistor} from "./store";
import {PersistGate} from "redux-persist/integration/react";
import {Suspense} from "react";

createRoot(document.getElementById('root')!).render(
    <Suspense>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
    </Suspense>
)
