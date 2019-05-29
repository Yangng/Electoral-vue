import {
  app,
  BrowserWindow
} from 'electron'
const electron = require('electron')
const path = require('path');
const Menu = electron.Menu;
const Tray = electron.Tray;
const ipc = electron.ipcMain
var appTray = null;
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development' ?
  `http://localhost:9080` :
  `file://${__dirname}/index.html`

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 670,
    useContentSize: true,
    fullscreenable: false, //是否全屏
    width: 1095,
    frame: false,
    center: false, // 是否出现在屏幕居中的位置
    backgroundColor: '#fff', // 背景色，用于transparent和frameless窗口
    titleBarStyle: 'xxx', // 标题栏的样式，有hidden、hiddenInset、customButtonsOnHover等
    resizable: true, // 是否允许拉伸大小
    // transparent: true, // 是否是透明窗口（仅macOS）
    // vibrancy: 'ultra-dark', // 窗口模糊的样式（仅macOS）
    webPreferences: {
      backgroundThrottling: false // 当页面被置于非激活窗口的时候是否停止动画和计时器
    }
  })

  mainWindow.loadURL(winURL)

  //打开系统托盘
  var trayMenuTemplate = [{
      label: "设置",
      click: function () {

      }
    },
    {
      label: "帮助",
      click: function () {

      }
    },
    {
      label: "关于",
      click: function () {

      }
    },
    {
      label: "退出",
      click: function () {
        app.quit();
        app.quit(); //因为程序设定关闭为最小化，所以调用两次关闭，防止最大化时一次不能关闭的情况
      }
    },
  ];
  let trayIcon = path.join(__dirname, '../../static'); //选取目标所在目录
  appTray = new Tray(path.join(trayIcon, 'trys.ico')); //目标图片
  const contextMenu = Menu.buildFromTemplate(trayMenuTemplate);
  appTray.setToolTip('律动音乐')
  appTray.setContextMenu(contextMenu);
  appTray.on('click', function () {
    mainWindow.show();
  })
  //设置图标闪烁
  // var count = 0,timer=null;
  // timer = setInterval(() => {
  //     count++;
  //     if (count%2 == 0) {
  //         appTray.setImage(path.join(trayIcon,'empty.ico'));
  //     } else {
  //       appTray.setImage(path.join(trayIcon,'trys.ico'));
  //     }
  // }, 500);



  mainWindow.on('close', (e) => {
    //回收BrowserWindow对象
    if (mainWindow.isMinimized()) {
      mainWindow = null;
    } else {
      e.preventDefault();
      mainWindow.minimize();
    }
  });


  //登录窗口最小化
  ipc.on('window-min', function () {
    mainWindow.minimize();
  })
  //登录窗口最大化
  ipc.on('window-max', function () {
    if (mainWindow.isMaximized()) {
      mainWindow.restore();
    } else {
      mainWindow.maximize();
    }
  })
  ipc.on('window-close', function (e) {
    mainWindow.hide();
  })



}




app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})