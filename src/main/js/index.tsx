import * as React from "react";
import App from "App";
import {createRoot} from "react-dom/client";


const container = document.getElementById('primordial');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(<App/>);