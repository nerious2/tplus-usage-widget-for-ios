// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: pink; icon-glyph: signal;
//
// tplus 사용량 조회 위젯 (Scriptable 전용)
//
// nerious2 (neriousleko@me.com)
// Github : https://github.com/nerious2/tplus-usage-widget-for-ios
//
const version = '1.0-2022052601'

////////////////////////////////////////////////////////////////////////////////
//////////////////////////         Dev Settings         ////////////////////////
////////////////////////////////////////////////////////////////////////////////

config.widgetFamily = config.widgetFamily || 'small'


////////////////////////////////////////////////////////////////////////////////
//////////////////////////         Image (BASE64)        ///////////////////////
////////////////////////////////////////////////////////////////////////////////

const logoImage = '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'


////////////////////////////////////////////////////////////////////////////////
//////////////////////////       Const Parameter        ////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Set up file manager
const files = FileManager.local()

// Tplus Tomcat Server URL
const tplusLoginUrl = 'https://csma.tplusmobile.com:1443/KCT_CSMA/loginService.do'
const tplusUsageUrl = 'https://csma.tplusmobile.com:1443/KCT_CSMA/myPageService.do#/page/121'

// Github Repo URL
const githubRepoUrl = 'https://github.com/nerious2/tplus-usage-widget-for-ios'

// widget update URL
const versionUrl = 'https://raw.githubusercontent.com/nerious2/tplus-usage-widget-for-ios/main/version.json'
const sourceUrl = 'https://raw.githubusercontent.com/nerious2/tplus-usage-widget-for-ios/main/tplusUsageWidget.js'

// Progressbar
const h = 10
let width
if (config.widgetFamily === 'small') {
  width = 90
} else {
  width = 250
}

// Text sizes
const fontSizeData = 13
const lineNumberData = 1
const minimumScaleFactor = 0.8 // Value between 1.0 and 0.1
const fontSizeLastUpdate = 14


// Error message
const errMsg = [
  '로그인 실패',
  '불러오기 실패',
]

const prefPath = files.joinPath(files.documentsDirectory(), 'tplus-usage-widget-conf.json')
const accountPath = files.joinPath(files.documentsDirectory(), 'tplus-usage-widget-account.json')

let manualUpdate = false

let prefs = {
  theme : 0,                // 0 : auto, 1 : white, 2 : dark
  cacheMinutes : 60,
  cacheEnable : true,
  shortcut : 'menu',
  widelayout : 0,           // iphone SE 1st gen 등의 호환성을 위한 넓은 레이아웃 옵션
  update : 1,               // Auto update check 0 : 확인X, 1 : 하루 한번, 2 : 일주일 한번
  lastupdatecheck : 0,      // Auto update check 활성화 시, 마지막으로 업데이트를 확인한 timestamp
}

let account = {
  lastLogin : '',
  userid : '',
  userpw : '',
}

let usageData = {
  data : {
    usage : '-',
    total : '0',
  },
  voice : {
    usage : '-',
    total : '0',
  },
  sms : {
    usage : '-',
    total : '0',
  },
}

let shortcutArr = {
  'refresh' : ['위젯 새로고침', '', `${URLScheme.forRunningScript()}?refresh=1`],
  'tplusweb' : ['티플러스 사용량 조회 웹페이지', '처음 접속 시, 자동 로그인에 체크한 뒤 로그인이 필요합니다.', tplusUsageUrl],
  'menu': ['위젯 메뉴 실행', '', `${URLScheme.forRunningScript()}`],
}


// Body padding & width
let widgetPadding = prefs.widelayout === 1 ? 6 : 10
const bodyPaddingTop = 4
const bodyTitleWidth = 33


////////////////////////////////////////////////////////////////////////////////
//////////////////////////      Core (Do not config)     ///////////////////////
////////////////////////////////////////////////////////////////////////////////

// Function
function loadPref() {
  if (files.fileExists(prefPath)) {
    prefs = JSON.parse(files.readString(prefPath))
  }

  if (files.fileExists(accountPath)) {
    account = JSON.parse(files.readString(accountPath))
  }
}

function savePref() {
  try {
     files.writeString(prefPath, JSON.stringify(prefs))
  } catch (e) {
    console.error(e)
    throw new Error('Failed to save preferences file')
  }
}

function saveAccount() {
  try {
    files.writeString(accountPath, JSON.stringify(account))
  } catch (e) {
    console.error(e)
    throw new Error('Failed to save account file') 
  }
}

function removeAccount() {
  try {
    files.remove(accountPath)
    account = {
      lastLogin : '',
      userid : '',
      userpw : '',
    }
  } catch (e) {
    console.error(e)
    throw new Error('Failed to remove account file') 
  }
}

async function checkVersion() {
  const t = new Date().getTime()
  const mainserv = await new Request(versionUrl).loadJSON()
  prefs.lastupdatecheck = t
  
  savePref()
  
  return mainserv?.version
}

async function updateScript() {
  const code = await new Request(sourceUrl).loadString()
  let icloudFm = FileManager.iCloud()

  try {
  	// console.log(icloudFm.documentsDirectory())
    icloudFm.documentsDirectory()
    await icloudFm.writeString(`${icloudFm.documentsDirectory()}/${Script.name()}.js`, code)
  } catch (e) {
    console.warning(e)
    await files.writeString(`${files.documentsDirectory()}/${Script.name()}.js`, code)
  }

  if (config.runsInApp) {
  	Safari.open(URLScheme.forRunningScript())
  }
  return
}

async function checkUpdate() {
  const t = new Date().getTime()

  if (prefs.update === 0) return
  
  const diffDate = t - prefs.lastupdatecheck
  const compDays = diffDate / (1000 * 3600 * 24)
  const stdDay = prefs.update === 2 ? 7 : 1

  if (compDays < stdDay) return

  const updver = await checkVersion()

  if (updver != version) {
    await updateScript()
  }
}


async function createMenuTable() {
  loadPref()

  let table = new UITable()
  table.showSeparators = true
  
  function loadTable() {
    let row0 = new UITableRow()
    row0.height = 70
    row0.dismissOnSelect = true
    
    let text0 = row0.addText('즉시 새로고침', '지금 위젯을 즉시 새로고침 합니다.')
    text0.titleFont = Font.boldSystemFont(15)
    text0.subtitleFont = Font.systemFont(14)

    table.addRow(row0)

    row0.onSelect = async () => {
      if (account.userid == '' || account.userpw == '') {
        const prompt = new Alert()
        prompt.message = '계정이 설정되지 않았습니다.\n계정을 먼저 설정해주세요.'
        prompt.addAction('확인')
        await prompt.presentAlert()
        await createMenuTable()
      } else {
        manualUpdate = true
      }
    }
    
    
    let row1 = new UITableRow()
    row1.height = 70
    row1.dismissOnSelect = false
    
    let text1 = row1.addText(`계정 설정 : ${!files.fileExists(accountPath) || account.userid == '' ? '설정되지 않음' : account.userid}`, `마지막 로그인 시간 : ${account.lastLogin == '' ? '정보 없음' : account.lastLogin}`)
    text1.titleFont = Font.boldSystemFont(15)
    text1.subtitleFont = Font.systemFont(14)
    
    table.addRow(row1)
    
    row1.onSelect = async () => {
      let alert = new Alert()
      alert.title = '티플러스 계정을 입력하세요.'
      alert.addTextField('ID 입력', '')
      alert.addSecureTextField('Password 입력', '')
      alert.addAction("확인")
      alert.addCancelAction("취소")
      if (await alert.present() == 0) {
        const id = alert.textFieldValue(0)
        const pw = alert.textFieldValue(1)
        
        if (id == '' || pw == '') {
          let alert2 = new Alert()
          alert2.message = 'ID 혹은 Password가 입력되지 않았습니다.'
          alert2.addAction('확인')
          await alert2.present()
        } else {
          account.userid = id
          account.userpw = pw
          
          try {
            saveAccount()
          } catch (e) {
            console.error(e)
            let alert2 = new Alert()
            alert2.message = '계정 정보를 저장하는 중 오류가 발생했습니다.'
            alert2.addAction('확인')
            await alert2.present()
          }
        }
      }
      refreshTable()
    }


    let row2 = new UITableRow()
    row2.height = 70
    row2.dismissOnSelect = false

    const optionWidgetTheme = ['시스템 테마에 따름', '밝은 테마 고정', '어두운 테마 고정']
    let text2 = row2.addText(`위젯 테마 설정 : ${optionWidgetTheme[prefs.theme]}`, '위젯의 테마를 변경합니다.')
    text2.titleFont = Font.boldSystemFont(15)
    text2.subtitleFont = Font.systemFont(14)
    
    table.addRow(row2)
    
    row2.onSelect = async () => {
      let alert = new Alert()
      optionWidgetTheme.forEach(element => alert.addAction(element))
      alert.addCancelAction("취소")
      const result = await alert.presentSheet()
      if (result != -1) {
        prefs.theme = result
      }
      refreshTable()
    }


    let row6 = new UITableRow()
    row6.height = 70
    row6.dismissOnSelect = false

    const optionWidgetLayout = ['기본값', '여백 줄이기']
    let text6 = row6.addText(`위젯 레이아웃 설정 : ${optionWidgetLayout[prefs.widelayout]}`, '아이폰SE 1세대 등의 일부 기기에서 위젯 레이아웃이 깨질 경우 \'여백 줄이기\'를 선택하세요.')
    text6.titleFont = Font.boldSystemFont(15)
    text6.subtitleFont = Font.systemFont(14)
    
    table.addRow(row6)
    
    row6.onSelect = () => {
      if (prefs.widelayout === 0) prefs.widelayout = 1
      else prefs.widelayout = 0
      refreshTable()
    }


    let row7 = new UITableRow()
    row7.height = 70
    row7.dismissOnSelect = false

    let text7 = row7.addText(`위젯 자동 새로고침 설정 : ${prefs.cacheEnable ? '활성화' : '비활성화'}`, '위젯을 자동으로 새로고침할 것인지 설정합니다. 비활성화 시 수동으로 새로고침해야 합니다.')
    text7.titleFont = Font.boldSystemFont(15)
    text7.subtitleFont = Font.systemFont(14)
    
    table.addRow(row7)
    
    row7.onSelect = () => {
      if (prefs.cacheEnable) prefs.cacheEnable = false
      else prefs.cacheEnable = true
      refreshTable()
    }


    if (prefs.cacheEnable) {
      let row3 = new UITableRow()
      row3.height = 70
      row3.dismissOnSelect = false
  
      let text3 = row3.addText(`위젯 자동 새로고침 최소 주기 : ${prefs.cacheMinutes === 0 ? '캐시 보관 안함(즉시 갱신)' : `${prefs.cacheMinutes}분`}`, '새로고침 이후 캐시를 보관할 주기를 설정합니다. (경고 : 주기가 짧을 수록 많은 데이터가 소모될 수 있습니다)')
      text3.titleFont = Font.boldSystemFont(15)
      text3.subtitleFont = Font.systemFont(14)
      
      table.addRow(row3)
      
      row3.onSelect = async () => {
        let alert = new Alert()
        alert.title = '위젯 최소 보관 시간을 입력하세요.\n(분 단위로 입력, 0으로 설정 시 캐시 보관 없이 새로고침 때 마다 데이터 조회)'
        let numInput = alert.addTextField('분 단위로 입력', `${prefs.cacheMinutes}`)
        numInput.setNumberPadKeyboard()
        alert.addAction("확인")
        alert.addCancelAction("취소")
        if (await alert.present() == 0) {
          const n = alert.textFieldValue(0)
          
          if (n == '' || Number(n) < 0 || isNaN(Number(n))) {
            let alert2 = new Alert()
            alert2.message = '올바른 값이 아닙니다.\n0 이상의 숫자로만 입력하세요.'
            alert2.addAction('확인')
            await alert2.present()
          } else {
            prefs.cacheMinutes = Number(n)
          }
        }
        refreshTable()
      }
    }

    let row4 = new UITableRow()
    row4.height = 70
    row4.dismissOnSelect = false

    let text4 = row4.addText(`바로가기 설정 : ${shortcutArr[prefs.shortcut][0]}`, '위젯을 클릭하였을 때 동작할 바로가기를 설정합니다.')
    text4.titleFont = Font.boldSystemFont(15)
    text4.subtitleFont = Font.systemFont(14)
  
    table.addRow(row4)
    
    row4.onSelect = async () => {
      let shortcut = new UITable()
      shortcut.showSeparators = true
      
      for(index in shortcutArr){
        let row = new UITableRow()
        row.height = 60
        let text = row.addText(`${prefs.shortcut == index ? '☑️ ' : ''}${shortcutArr[index][0]}`, `${shortcutArr[index][1]}`)
        text.titleFont = Font.boldSystemFont(14)
        text.subtitleFont = Font.systemFont(12)
        
        shortcut.addRow(row)
        
        row.onSelect = (n) => {
          prefs.shortcut = Object.keys(shortcutArr)[n]
        }
      }
      
      await shortcut.present()
      refreshTable()
    }

    
    let row5 = new UITableRow()
    row5.height = 70
    row5.dismissOnSelect = false
    
    let text5 = row5.addText('위젯 정보', '티플러스 사용량 위젯 정보')
    text5.titleFont = Font.boldSystemFont(15)
    text5.subtitleFont = Font.systemFont(14)
    
    table.addRow(row5)

    row5.onSelect = async () => {
      let widgetInfo = new UITable()
      widgetInfo.showSeparators = true

      function loadWidgetInfoTable() {
        let widgetInfoRow0 = new UITableRow()
        widgetInfoRow0.height = 70
        widgetInfoRow0.dismissOnSelect = false
        
        let widgetInfoText0 = widgetInfoRow0.addText(`위젯 업데이트 확인 (버전 : ${version})`, '위젯의 최신 버전이 있는지 확인합니다.')
        widgetInfoText0.titleFont = Font.boldSystemFont(15)
        widgetInfoText0.subtitleFont = Font.systemFont(14)

        widgetInfo.addRow(widgetInfoRow0)

        widgetInfoRow0.onSelect = async () => {
          const updver = await checkVersion()
          
          let alert = new Alert()
          if (version == updver) {
            alert.message = '현재 최신버전을 사용하고 있습니다.'
            alert.addAction('확인')
            await alert.presentSheet() 
          } else if (updver == undefined){
            alert.message = '서버에서 버전을 가져오지 못했습니다.\n잠시 후 다시 시도하세요.'
            alert.addAction('확인')
            await alert.persentSheet()
          } else {
            alert.message = `버전 ${updver}이 발견되었습니다.\n업데이트를 진행할까요?`
            alert.addAction('확인')
            alert.addCancelAction('취소')
            const result = await alert.presentSheet()
            if (result === 0) {
              await updateScript()
            } 
          }
          refreshWidgetInfoTable()
        }


        let widgetInfoRow1 = new UITableRow()
        widgetInfoRow1.height = 70
        widgetInfoRow1.dismissOnSelect = false
        
        const optionAutoUpdateMenu = ["확인하지 않음", "하루에 한 번 확인", "일주일에 한 번 확인"]
        let widgetInfoText1 = widgetInfoRow1.addText(`위젯 자동 업데이트 설정 : ${optionAutoUpdateMenu[prefs.update]}`, '최신 버전이 있는지 자동으로 체크하여 업데이트하는 주기를 설정합니다.')
        widgetInfoText1.titleFont = Font.boldSystemFont(15)
        widgetInfoText1.subtitleFont = Font.systemFont(14)

        widgetInfo.addRow(widgetInfoRow1)

        widgetInfoRow1.onSelect = async () => {
          let alert = new Alert()
          optionAutoUpdateMenu.forEach(element => alert.addAction(element))
          alert.addCancelAction("취소")
          const result = await alert.presentSheet()
          if (result != -1) {
            prefs.update = result
          }
          refreshWidgetInfoTable()
        }

        if (files.fileExists(accountPath)) {
          let widgetInfoRow2 = new UITableRow()
          widgetInfoRow2.height = 70
          widgetInfoRow2.dismissOnSelect = false
      
          let widgetInfoText2 = widgetInfoRow2.addText('계정 정보 삭제', '기기에 저장된 계정 정보를 삭제합니다.')
          widgetInfoText2.titleFont = Font.boldSystemFont(15)
          widgetInfoText2.subtitleFont = Font.systemFont(14)
        
          widgetInfo.addRow(widgetInfoRow2)
          
          widgetInfoRow2.onSelect = async () => {
            let alert = new Alert()
            alert.title = '계정 정보를 삭제하시겠습니까?\n이 작업은 되돌릴 수 없습니다.'
            alert.addDestructiveAction("삭제")
            alert.addCancelAction("취소")
            const result = await alert.presentSheet()
            if (result === 0) {
              try {
                removeAccount()
              } catch (e) {
                console.error(e)
                let alert2 = new Alert()
                alert2.message = '계정 정보를 삭제하는 중 오류가 발생했습니다.'
                alert2.addAdcion('확인')
                await alert2.present()
              }
            }
            refreshWidgetInfoTable()
          }
        }

        let widgetInfoRow3 = new UITableRow()
        widgetInfoRow3.height = 70
        widgetInfoRow3.dismissOnSelect = false
        
        let widgetInfoText3 = widgetInfoRow3.addText('Github Repo 바로가기', '티플러스 사용량 위젯의 Github 페이지를 방문합니다.')
        widgetInfoText3.titleFont = Font.boldSystemFont(15)
        widgetInfoText3.subtitleFont = Font.systemFont(14)

        widgetInfo.addRow(widgetInfoRow3)

        widgetInfoRow3.onSelect = () => {
          Safari.open(githubRepoUrl)
        }

        let widgetInfoRow4 = new UITableRow()
        widgetInfoRow4.height = 70
        widgetInfoRow4.dismissOnSelect = false
        
        let widgetInfoText4 = widgetInfoRow4.addText('개발자에게 커피 한 잔 사주기', '후원해 주셔서 대단히 감사드립니다.')
        widgetInfoText4.titleFont = Font.boldSystemFont(15)
        widgetInfoText4.subtitleFont = Font.systemFont(14)

        widgetInfo.addRow(widgetInfoRow4)

        widgetInfoRow4.onSelect = () => {
          Safari.open('https://toss.me/nerious2/1900')
        }
      }

      function refreshWidgetInfoTable(){
        widgetInfo.removeAllRows()
        loadWidgetInfoTable()
        widgetInfo.reload()
      }

      loadWidgetInfoTable()
      await widgetInfo.present()
      savePref()

      refreshTable()
    }
  }
  
  function refreshTable(){
    table.removeAllRows()
    loadTable()
    table.reload()
  }
  
  loadTable()
  await table.present()
  
  savePref()
}


function creatProgress(total, usage) {
  const context = new DrawContext()
  context.size = new Size(width, h)
  context.opaque = false
  context.respectScreenScale = true

  // NaN 검사
  if (Number.isNaN(total) || Number.isNaN(usage)) {
    total = 1
    usage = 1
  }
  
  // Background Path
  context.setFillColor(fillColorProgressbar)
  const path = new Path()
  path.addRoundedRect(new Rect(0, 0, width, h), 4, 10)
  context.addPath(path)
  context.fillPath()
  
  // Progress Path
  context.setFillColor(strokeColorProgressbar)
  const path1 = new Path()
  const path1width = (width * (usage / total) > width) ? width : width * (usage / total)
  path1.addRoundedRect(new Rect(0, 0, path1width, h), 4, 10)
  context.addPath(path1)
  context.fillPath()
  return context.getImage()   
}

async function GetUsage() {
  let final = {
    data : {
      usage : '-',
      total : '0',
    },
    voice : {
      usage : '-',
      total : '0',
    },
    sms : {
      usage : '-',
      total : '0',
    },
  }

  let v = new WebView()
  await v.loadURL(tplusUsageUrl)
  
  // console.log('wait 100ms')
  sleep(100)
  
  let result = await v.evaluateJavaScript(`
    let usd = document.getElementsByClassName('overlay alert')[0].style.display
    usd
  `)
  // console.log('overlay alert')
  // console.log(result)
  
  if (result.indexOf('block') !== -1) {
    // console.log('login start')
    await v.loadURL(tplusLoginUrl)
  
    await v.evaluateJavaScript(`
      let user = '${account.userid}'
      let pass = '${account.userpw}'
      document.getElementById('uid').value = user
      document.getElementById('upw').value = pass
      document.getElementById('autoLoginChk').value = true
      document.getElementsByClassName('btn btn_full btn_login')[0].click()
    `)
    await v.loadURL(tplusUsageUrl)
  }
  
  // loading 끝날때 까지 대기 (5초)
  for (let i = 0; i < 50; i++) {
    result = await v.evaluateJavaScript(`  
      document.getElementsByClassName('overlay_load')[0].style.display
    `)
    if (result === 'none') {
      // console.log('break')
      break
    } else {
      // console.log('sleep 100ms')
      sleep(100)
    }
  }
  
  // 정상적으로 불러왔는지 검증
  // 로그인 실패 검사
  result = await v.evaluateJavaScript(`
    document.getElementsByClassName('modal_s alert')[0].style.display
  `)
    
  if (result === 'block') {
    // 불러오기 실패 예외 처리
    // console.log('login failed -> widget end')
    // console.log(result)
    
    final.data.usage = errMsg[0]
    
    if (!config.runsInWidget) {
      const prompt = new Alert()
      prompt.message = '로그인에 실패했습니다. ID와 비밀번호를 확인하세요.'
      prompt.addAction('확인')
      await prompt.presentAlert()
    }

    // throw new Error('Failed to Login')
    return final
  }

  // record last login time
  const t = new Date()
  let df = new DateFormatter()
  df.locale = "ko-kr"
  df.useLongDateStyle()
  df.useMediumTimeStyle()
  account.lastLogin = df.string(t)

  try {
    saveAccount()
  } catch (e) {
    console.error(e)
  }

  result = await v.evaluateJavaScript(`
    document.getElementsByClassName('progress__label').length
  `)
    
  if (result !== 4) {
    // 불러오기 실패 예외 처리
    // console.log('loading failed -> widget end')
    // console.log(result)
    // throw new Error('Failed to get data from server')

    final.data.usage = errMsg[1]

    if (!config.runsInWidget) {
      const prompt = new Alert()
      prompt.message = '정보를 가져오지 못했습니다. 네트워크 상태를 확인하세요.'
      prompt.addAction('확인')
      await prompt.presentAlert()
    }

    // throw new Error('Failed to Login')
    return final
  }
  
  
  let remain = await v.evaluateJavaScript(`
    let r = new Array()
    for (let i = 1; i < 4; i++) {
      r.push(document.getElementsByClassName('progress__label').item(i).innerText)
    }
    r
  `)
  // console.log(remain)
  
  let usage = await v.evaluateJavaScript(`
    let u = new Array()
    for (let i = 1; i < 4; i++) {
      u.push(document.getElementsByClassName('progress_value_full').item(i).innerText)
    }
    u
  `)
  // console.log(usage)

  // 데이터 단위 추출
  final.data.usage = remain[1].substring(remain[1].indexOf('(') + 1, remain[1].lastIndexOf(')')).trim()
  final.data.total =  usage[1].substring(usage[1].indexOf('(') + 1, usage[1].lastIndexOf(')')).trim()

  final.voice.usage = remain[0].substring(remain[0].indexOf('(') + 1, remain[0].lastIndexOf(')')).trim()
  final.voice.total = usage[0].substring(usage[0].indexOf('(') + 1, usage[0].lastIndexOf(')')).trim()

  final.sms.usage = remain[2].substring(remain[2].indexOf('(') + 1, remain[2].lastIndexOf(')')).trim()
  final.sms.total = usage[2].substring(usage[2].indexOf('(') + 1, usage[2].lastIndexOf(')')).trim()

  return final
}

function sleep(ms) {
  var startTime = new Date().getTime()
  while (new Date().getTime() < startTime + ms);
}


// Main
loadPref()

await checkUpdate()

if (config.runsInApp) {
  if (args.queryParameters?.refresh == '1') {
    manualUpdate = true
  } else {
    await createMenuTable()
  }
  if (!manualUpdate) {
    return Script.complete()
  }
}


// widget padding setting
widgetPadding = prefs.widelayout === 1 ? 6 : 10

// theme color
let backColor = new Color(prefs.theme === 2 ? '000000' : 'FFFFFF')
let strokeColorProgressbar = new Color('E62076')
let fillColorProgressbar = new Color('B0B0B0')
let usageTextColor = new Color(prefs.theme === 2 ? 'FFFFFF' : '000000')
let lastUpdateTextColor = new Color(prefs.theme === 2 ? 'A0A0A0' : '606060')

if (prefs.theme === 0) {
  backColor = Color.dynamic(backColor, new Color('000000'))
  usageTextColor = Color.dynamic(usageTextColor, new Color('FFFFFF'))
  lastUpdateTextColor = Color.dynamic(lastUpdateTextColor, new Color('A0A0A0'))
}


// Set up Cache
const cachePath = files.joinPath(files.cacheDirectory(), 'tplus-usage-widget-cache')
const docPath = files.joinPath(files.libraryDirectory(), 'tplus-usage-widget-cache')
let cacheExists = files.fileExists(cachePath)
const docExists = files.fileExists(docPath)
let cacheDate = cacheExists ? files.modificationDate(cachePath) : 0
const savePath = config.runsInWidget ? cachePath : docPath;

// Check Cache
const thisTime = new Date()
let lastUpdateTime



try {

  // 위젯 상태에서 library path에 캐시가 존재할 경우, 캐시 영역으로 옮기고 삭제
  if (config.runsInWidget && docExists) {
    // console.log('Move cache file to CacheDirectory from library')
    if (cacheExists) files.remove(cachePath)
    files.move(docPath, cachePath)
    cacheExists = files.fileExists(cachePath)
    cacheDate = cacheExists ? files.modificationDate(cachePath) : 0
  }

  // 위젯 상태에서 실행 중이며, 캐시가 존재하고, 캐시 수정 시간이 현재 시간과 비교하였을 때 cacheMinutes 보다 적을 경우, 기존 캐시 데이터를 사용함
  if (config.runsInWidget && cacheExists && ( (thisTime.getTime() - cacheDate.getTime()) < (prefs.cacheMinutes * 60 * 1000) || !prefs.cacheEnable)) {
    // console.log('Use Data from Cache')
    usageData = JSON.parse(files.readString(cachePath))
    lastUpdateTime = cacheDate
  } else {
    // cacheMinutes가 0으로 설정되어 있는데 캐시 파일이 존재할 경우 삭제
    if (cacheExists && prefs.cacheMinutes === 0) {
      // console.log('Delete Cache')
      files.remove(cachePath)
    }

    // console.log('Get data from Server')
    lastUpdateTime = thisTime
    usageData = await GetUsage()

    // cacheMinutes가 0으로 설정되어 있지 않는 경우에만 캐시 생성
    if (prefs.cacheMinutes > 0) {
      try {
        files.writeString(savePath, JSON.stringify(usageData))
        // console.log('Save Cache')
      } catch (e) {
        // console.log('Failed to create cache file')
        console.warning(e)
      }
    }
  }
} catch (e) {
  console.error(e)

  if (cacheExists) {
    // console.log("Use Data from Cache")
    data = JSON.parse(files.readString(cachePath))
    lastUpdateTime = cacheDate
  } else if (docExists) {
    // console.log("Use Data from Document")
    data = JSON.parse(files.readString(docPath))
    lastUpdateTime = files.modificationDate(docPath)
    files.move(docPath, cachePath)
  } else {
    console.log("Cache does not exist.")
  }
}

// 데이터 변수 선언
let dataUsage = usageData.data.usage
let dataTotal = usageData.data.total

let voiceUsage = usageData.voice.usage
let voiceTotal = usageData.voice.total

let smsUsage = usageData.sms.usage
let smsTotal = usageData.sms.total

//=========================================
// Widget
//=========================================
let widget = new ListWidget()
widget.setPadding(widgetPadding, widgetPadding, widgetPadding, widgetPadding)
widget.backgroundColor = backColor

//=========================================
// Title (Logo, Last update time)
//=========================================
let titleStack = widget.addStack()
titleStack.setPadding(bodyPaddingTop, 0, 0, 0)

// Logo
let titleLogoStack = titleStack.addStack()
titleLogoStack.setPadding(3, 0, 0, 0)

let logo = titleLogoStack.addImage(Image.fromData(Data.fromBase64String(logoImage)))

logo.imageSize = new Size(40, 15)

// Last update time
let titleLastUpdateStack = titleStack.addStack()
titleLastUpdateStack.layoutVertically()

let lastUpdateDateStack = titleLastUpdateStack.addStack()
lastUpdateDateStack.addSpacer()

// Get Time
const year = new String(lastUpdateTime.getFullYear() % 100).padStart(2, '0')
const month = new String(lastUpdateTime.getMonth() + 1).padStart(2, '0')
const day = new String(lastUpdateTime.getDate()).padStart(2, '0')
const hour = new String(lastUpdateTime.getHours()).padStart(2, '0')
const minute = new String(lastUpdateTime.getMinutes()).padStart(2, '0')


let lastUpdateDateText = lastUpdateDateStack.addText(`${year}.${month}.${day}`)
lastUpdateDateText.font = Font.boldSystemFont(fontSizeLastUpdate)
lastUpdateDateText.minimumScaleFactor = minimumScaleFactor
lastUpdateDateText.lineLimit = lineNumberData
lastUpdateDateText.textColor = lastUpdateTextColor
lastUpdateDateText.rightAlignText()


let lastUpdateTimeStack = titleLastUpdateStack.addStack()
lastUpdateTimeStack.addSpacer()

let lastUpdateTimeText = lastUpdateTimeStack.addText(`${hour}:${minute}`)
lastUpdateTimeText.font = Font.boldSystemFont(fontSizeLastUpdate)
lastUpdateTimeText.minimumScaleFactor = minimumScaleFactor
lastUpdateTimeText.lineLimit = lineNumberData
lastUpdateTimeText.textColor = lastUpdateTextColor
lastUpdateTimeText.rightAlignText()

//=========================================
// Body
//=========================================

// Data
let dataStack = widget.addStack()
dataStack.setPadding(bodyPaddingTop, 0, 0, 0)

let dataTitleStack = dataStack.addStack()
dataTitleStack.setPadding(0, 0, 0, 0)
dataTitleStack.size = new Size(bodyTitleWidth, h + 5)

let dataTitleText = dataTitleStack.addText('데이터')
dataTitleText.font = Font.mediumSystemFont(fontSizeData)
dataTitleText.minimumScaleFactor = minimumScaleFactor
dataTitleText.lineLimit = lineNumberData
dataTitleText.textColor = usageTextColor
dataTitleText.leftAlignText()


let dataProgressBarStack = dataStack.addStack()
dataProgressBarStack.setPadding(2, 0, 0, 0)
dataProgressBarStack.addSpacer()

let dataProgressBar = dataProgressBarStack.addImage(creatProgress(parseFloat(dataTotal) + parseFloat(dataUsage), parseFloat(dataUsage)))
dataProgressBar.imageSize = new Size(width, h)

let dataUsageStack = widget.addStack()
dataUsageStack.setPadding(0, 0, 0, 0)
dataUsageStack.addSpacer()

let dataUsageText = dataUsageStack.addText(`${dataUsage}`)
dataUsageText.font = Font.mediumSystemFont(fontSizeData - 2)
dataUsageText.minimumScaleFactor = minimumScaleFactor
dataUsageText.lineLimit = lineNumberData
dataUsageText.textColor = usageTextColor
dataUsageText.rightAlignText()


// Voice
let voiceStack = widget.addStack()
voiceStack.setPadding(bodyPaddingTop, 0, 0, 0)

let voiceTitleStack = voiceStack.addStack()
voiceTitleStack.size = new Size(bodyTitleWidth, h + 5)

let voiceTitleText = voiceTitleStack.addText('음성')
voiceTitleText.font = Font.mediumSystemFont(fontSizeData)
voiceTitleText.minimumScaleFactor = minimumScaleFactor
voiceTitleText.lineLimit = lineNumberData
voiceTitleText.textColor = usageTextColor
voiceTitleText.leftAlignText()
voiceTitleStack.addSpacer()


let voiceProgressBarStack = voiceStack.addStack()
voiceProgressBarStack.setPadding(2, 0, 0, 0)
voiceProgressBarStack.addSpacer()

let voiceProgressBar = voiceProgressBarStack.addImage(creatProgress(parseFloat(voiceTotal) + parseFloat(voiceUsage), parseFloat(voiceUsage)))
voiceProgressBar.imageSize = new Size(width, h)


let voiceUsageStack = widget.addStack()
voiceUsageStack.setPadding(0, 0, 0, 0)
voiceUsageStack.addSpacer()

let voiceUsageText = voiceUsageStack.addText(`${voiceUsage}`)
voiceUsageText.font = Font.mediumSystemFont(fontSizeData - 2)
voiceUsageText.minimumScaleFactor = minimumScaleFactor
voiceUsageText.lineLimit = lineNumberData
voiceUsageText.textColor = usageTextColor
voiceUsageText.rightAlignText()


// SMS
let smsStack = widget.addStack()
smsStack.setPadding(bodyPaddingTop, 0, 0, 0)

let smsTitleStack = smsStack.addStack()
smsTitleStack.size = new Size(bodyTitleWidth, h + 5)

let smsTitleText = smsTitleStack.addText('문자')
smsTitleText.font = Font.mediumSystemFont(fontSizeData)
smsTitleText.minimumScaleFactor = minimumScaleFactor
smsTitleText.lineLimit = lineNumberData
smsTitleText.textColor = usageTextColor
smsTitleText.leftAlignText()
smsTitleStack.addSpacer()


let smsProgressBarStack = smsStack.addStack()
smsProgressBarStack.setPadding(2, 0, 0, 0)
smsProgressBarStack.addSpacer()

let smsProgressBar = smsProgressBarStack.addImage(creatProgress(parseFloat(smsTotal) + parseFloat(smsUsage), parseFloat(smsUsage)))
smsProgressBar.imageSize = new Size(width, h)

let smsUsageStack = widget.addStack()
smsUsageStack.setPadding(0, 0, 0, 0)
smsUsageStack.addSpacer()

let smsUsageText = smsUsageStack.addText(`${smsUsage}`)
smsUsageText.font = Font.mediumSystemFont(fontSizeData - 2)
smsUsageText.minimumScaleFactor = minimumScaleFactor
smsUsageText.lineLimit = lineNumberData
smsUsageText.textColor = usageTextColor
smsUsageText.rightAlignText()

widget.addSpacer()
widget.url = shortcutArr[prefs.shortcut][2]

// Check where the script is running
if (!config.runsInWidget) {
  switch (config.widgetFamily) {
    case 'small': await widget.presentSmall(); break;
    case 'medium': await widget.presentMedium(); break;
    case 'large': await widget.presentLarge(); break;
  }
} else {
    // Tell the system to show the widget.
    Script.setWidget(widget)
    Script.complete()
}