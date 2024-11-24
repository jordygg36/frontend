import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';

// El servidor de Express es exportado para que pueda ser utilizado por funciones serverless.
export function app(): express.Express {
  const server = express();

  // Ruta al directorio de dist
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  // Establecer el motor de vistas a HTML
  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Servir archivos estáticos desde el directorio /browser
  server.get('**', express.static(browserDistFolder, {
    maxAge: '1y',
    index: 'index.html',
  }));

  // Todas las rutas regulares usan el motor de Angular
  server.get('**', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    // Usar el hostname de Render en lugar de localhost
    const baseHost = process.env.RENDER_EXTERNAL_HOSTNAME || headers.host;
    
    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `https://frontend-xzm4.onrender.com/`, // Aquí se establece la URL completa
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: '/' }], // Establecer base href como la raíz
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env.PORT || 4000; // Usa el puerto asignado por Render

  // Iniciar el servidor Node
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
