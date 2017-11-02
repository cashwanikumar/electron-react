import { spawn } from 'child_process';
import electron from 'electron';
import browserSync from 'browser-sync';
import browserSyncConnectUtils from 'browser-sync/lib/connect-utils';

const bsync = browserSync.create();

const getRootUrl = (options) => {
  const port = options.get('port');
  return `http://localhost:${port}`;
};

const getClientUrl = (options) => {
  const pathname = browserSyncConnectUtils.clientScript(options);
  return getRootUrl(options) + pathname;
};

bsync.init({
  ui: false,
  // Port 35829 = LiveReload's default port 35729 + 100.
  // If the port is occupied, Browsersync uses next free port automatically.
  port: 35829,
  ghostMode: false,
  open: false,
  notify: false,
  logSnippet: false,
  socket: {
    // Use the actual port here.
    domain: getRootUrl
  }
}, (err, bs) => {
  if (err) return console.error(err);

  const child = spawn(electron, ['.', '--enable-logging'], {
    env: {
      ...{
        NODE_ENV: 'development',
        BROWSER_SYNC_CLIENT_URL: getClientUrl(bs.options)
      },
      ...process.env
    },
    stdio: 'inherit'
  });

  child.on('close', () => {
    process.exit();
  });

  bsync
    .watch('build/**/*')
    .on('change', bsync.reload);
});

const path = require('path');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('todo', '', '', {
  host: 'localhost',
  dialect: 'sqlite',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  // SQLite only
  storage: path.resolve(__dirname) + '/todo.sqlite'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });