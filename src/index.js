/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { createRoot } from 'react-dom/client';
import App from './js/components/App.js';

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
