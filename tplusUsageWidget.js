//
// tplus 사용량 조회 위젯 (Scriptable 전용)
// Release Version 2022.05.22.000
//
// nerious2 (neriousleko@me.com)
//
// 새로운 버전 확인 : https://github.com/nerious2/tplusUsageWidgetForIOS/releases
//
// !!! 반드시 아래의 User-Config 영역을 알맞게 수정한 후 사용하시기 바랍니다 !!!
//
//
////////////////////////////////////////////////////////////////////////////////
//////////////////////////         User-Config         /////////////////////////
////////////////////////////////////////////////////////////////////////////////


// 반드시 '' (작은따옴표) 안에 공백 없이 작성할 것

// tplus 계정 아이디
const user = 'userid'

// tplus 계정 비밀번호
const pass = 'userpassword'

// Widget Theme 설정
// white, black 중에 선택하여 입력
// black 으로 설정할 경우 다크모드 설정과 상관없이 항상 다크모드 테마로 적용됨
const theme = 'white'

// 다크모드 설정
// 휴대폰에서 다크모드가 활성화된 경우, 위젯이 자동으로 다크모드 (black) 테마로 변경할 것인지 설정함
// 설정할 경우 true, 비활성화할 경우 false 입력 (반드시 작은따옴표 없이 입력할 것)
const darkmode = true

// iPhone SE (1st gen) 설정
// 기종이 아이폰SE 1세대인 경우, 위젯의 해상도가 작아서 사이즈 조절이 필요함
// 아이폰SE 1세대에 최적화된 위젯을 원할 경우 true, 이외의 기종일 경우 false 입력 (반드시 작은따옴표 없이 입력할 것)
const iphoneSE1 = false


// cache 보관 시간 설정
// 위젯이 자주 새로고침되는 것을 막기 위해, 위젯이 새로고침하기까지 캐시를 보관할 최소 시간을 지정.
// 무제한 요금제가 아니거나, 새로고침에 의한 과도한 데이터 사용을 막고자 할 경우 시간을 길게 설정할 것
// 0으로 설정시 캐시를 보관하지 않고 Scriptable 위젯이 새로고침되는 주기에 즉시 새로 데이터를 받아옴
// 단위 : 분 (Minutes)
const cacheMinutes = 60


////////////////////////////////////////////////////////////////////////////////
//////////////////////////         Dev Settings         ////////////////////////
////////////////////////////////////////////////////////////////////////////////

const debug = false
config.widgetFamily = config.widgetFamily || 'small'


////////////////////////////////////////////////////////////////////////////////
//////////////////////////         Image (BASE64)        ///////////////////////
////////////////////////////////////////////////////////////////////////////////

const logoImage = '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'


////////////////////////////////////////////////////////////////////////////////
//////////////////////////       Const Parameter        ////////////////////////
////////////////////////////////////////////////////////////////////////////////

let backColor = new Color(theme === 'black' ? '000000' : 'FFFFFF')
let strokeColorProgressbar = new Color('E62076')
let fillColorProgressbar = new Color('B0B0B0')
let usageTextColor = new Color(theme === 'black' ? 'FFFFFF' : '000000')
let lastUpdateTextColor = new Color(theme === 'black' ? 'A0A0A0' : '606060')


if (darkmode) {
    backColor = Color.dynamic(backColor, new Color('000000'))
    usageTextColor = Color.dynamic(usageTextColor, new Color('FFFFFF'))
    lastUpdateTextColor = Color.dynamic(lastUpdateTextColor, new Color('A0A0A0'))
}



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


// Body padding & width
const widgetPadding = iphoneSE1 ? 6 : 10
const bodyPaddingTop = 4
const bodyTitleWidth = 33


////////////////////////////////////////////////////////////////////////////////
//////////////////////////      Core (Do not config)     ///////////////////////
////////////////////////////////////////////////////////////////////////////////

// Function
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
    let v = new WebView()
    await v.loadURL('https://csma.tplusmobile.com:1443/KCT_CSMA/myPageService.do#/page/121')
    
    console.log('wait 100ms')
    sleep(100)
    
    let result = await v.evaluateJavaScript(`
      let usd = document.getElementsByClassName('overlay alert')[0].style.display
      usd
    `)
    console.log('overlay alert')
    console.log(result)
    
    if (result.indexOf('block') !== -1) {
      console.log('login start')
      await v.loadURL('https://csma.tplusmobile.com:1443/KCT_CSMA/loginService.do')
    
      await v.evaluateJavaScript(`
        let user = '${user}'
        let pass = '${pass}'
        document.getElementById('uid').value = user
        document.getElementById('upw').value = pass
        document.getElementById('autoLoginChk').value = true
        document.getElementsByClassName('btn btn_full btn_login')[0].click()
      `)
      await v.loadURL('https://csma.tplusmobile.com:1443/KCT_CSMA/myPageService.do#/page/121')
    }
    
    // loading 끝날때 까지 대기 (5초)
    for (let i = 0; i < 50; i++) {
      result = await v.evaluateJavaScript(`  
        document.getElementsByClassName('overlay_load')[0].style.display
      `)
      if (result === 'none') {
        console.log('break')
        break
      } else {
        console.log('sleep 100ms')
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
        console.log('login failed -> widget end')
        console.log(result)
        const prompt = new Alert()
        prompt.message = '로그인에 실패했습니다. ID와 비밀번호를 확인하세요.'
        prompt.addAction('확인')
        await prompt.presentAlert()

        throw new Error('Failed to Login')
    }


    result = await v.evaluateJavaScript(`
      document.getElementsByClassName('progress__label').length
    `)
      
    if (result !== 4) {
      // 불러오기 실패 예외 처리
      console.log('loading failed -> widget end')
      console.log(result)
      throw new Error('Failed to get data from server.')
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

    let final = new Object()
    final.data = new Object()
    final.voice = new Object()
    final.sms = new Object()

    // 데이터 단위 추출
    final.data.usage = remain[1].substring(remain[1].indexOf('(') + 1, remain[1].lastIndexOf(')')).trim()
    final.data.total =  usage[1].substring(usage[1].indexOf('(') + 1, usage[1].lastIndexOf(')')).trim()

    final.voice.usage = remain[0].substring(remain[0].indexOf('(') + 1, remain[0].lastIndexOf(')')).trim()
    final.voice.total = usage[0].substring(usage[0].indexOf('(') + 1, usage[0].lastIndexOf(')')).trim()

    final.sms.usage = remain[2].substring(remain[2].indexOf('(') + 1, remain[2].lastIndexOf(')')).trim()
    final.sms.total = usage[2].substring(usage[2].indexOf('(') + 1, usage[2].lastIndexOf(')')).trim()



    console.log(JSON.stringify(final))

    return final
}

function sleep(ms) {
  // const timer = new Timer

  // await timer.add(ms)
  
  var startTime = new Date().getTime()
  while (new Date().getTime() < startTime + ms);
  
}

// Main


// Set up file manager
const files = FileManager.local()

// Set up Cache
const cachePath = files.joinPath(files.cacheDirectory(), 'tplus-usage-widget-cache')
const cacheExists = files.fileExists(cachePath)
const cacheDate = cacheExists ? files.modificationDate(cachePath) : 0

// Check Cache
const thisTime = new Date()
let lastUpdateTime
let usageData = {
    data : {
        usage : '불러오기 실패',
        total : '0',
    },
    voice : {
        usage : '불러오기 실패',
        total : '0',
    },
    sms : {
        usage : '불러오기 실패',
        total : '0',
    },
}


try {
    // 캐시가 존재하고, 캐시 수정 시간이 현재 시간과 비교하였을 때 cacheMinutes 보다 적을 경우, 기존 캐시 데이터를 사용함
    if (cacheExists && (thisTime.getTime() - cacheDate.getTime()) < (cacheMinutes * 60 * 1000)) {
        console.log('Use Data from Cache')
        usageData = JSON.parse(files.readString(cachePath))
        lastUpdateTime = cacheDate
    } else {
        // cacheMinutes가 0으로 설정되어 있는데 캐시 파일이 존재할 경우 삭제
        if (cacheExists && cacheMinutes === 0) {
            console.log('Delete Cache')
            files.remove(cachePath)
        }

        console.log('Get data from Server')
        usageData = await GetUsage()
        lastUpdateTime = thisTime

        // cacheMinutes가 0으로 설정되어 있지 않는 경우에만 캐시 생성
        if (cacheMinutes > 0) {
            try {
                files.writeString(cachePath, JSON.stringify(usageData))
            } catch (e) {
                console.log('Failed to create cache file')
                console.log(e)
            }
        }
    }

} catch (e) {
    console.error(e)

    if (cacheExists) {
      console.log("Use Data from Cache")
      data = JSON.parse(files.readString(cachePath))
      lastUpdateTime = cacheDate
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

let dataTitleText = dataTitleStack.addText("데이터")
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

let voiceTitleText = voiceTitleStack.addText("음성")
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

let smsTitleText = smsTitleStack.addText("문자")
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