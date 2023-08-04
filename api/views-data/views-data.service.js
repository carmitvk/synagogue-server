const logger = require('../../services/logger.service')

module.exports = {
    getViewsData,
    updateViewsData,
}

async function getViewsData() {
    return MOCK_VIEWS_DATA;
}

async function updateViewsData(viewsData) {
    MOCK_VIEWS_DATA = viewsData?.viewsData;
}

let MOCK_VIEWS_DATA = [
    {
      viewName: 'תצוגה לשבת',
      showDays:[5, 6],
      showDates:[],
      viewType: 'two-boards-view',
      viewFields: {
        title: 'calendar.parash',
        rightBoard: [
          {
            title: 'זמני התפילות',
            rows: [
              { title: 'מנחה ערב שבת', value: '19:25' },
              { title: 'שחרית שבת', value: '08:30' },
              { title: 'מנחה מוקדמת', value: '13:20' },
              { title: 'מנחה שבת', value: '19:00' },
              { title: 'ערבית מוצ"ש', value: '20:10' },
              // { title: 'מנחה שבת', value: 'zmanim.minchaShabat' },
              // { title: 'ערבית מוצ"ש', value: 'zmanim.arvitMotash' },
            ],
            durationSec: -1,
            type: 'time&text'
          }
        ],
        leftBoard: [
          {
            title: 'שיעורי תורה',
            rows: [
              { title: 'תהילים לילדים', value: '10:15' },
              { title: 'שיעור פרשת שבוע', value: '16:50' },
              { title: 'שיעור לנשים בתנ"ך', value: '17:15' },
              { title: 'מסכת בכורות', value: '17:50' },
              // { title: 'פ"ש + מסכת בכורות', value: 'zmanim.lessonPash' },
  
            ],
            durationSec: 30,
            type: 'time&text'
          },
          {
            title: 'keep-clean2.png',
            type: 'image',
            durationSec: 6,
          },
          {
            title: 'תפילות חול',
            rows: [
              { title: 'שחרית מנין ראשון', value: '07:00' },
              { title: 'שחרית מנין שני', value: '08:10' },
              { title: 'מנחה וערבית', value: 'zmanim.minchaChol' },
              { title: '--------', value: '--------' },
              { title: 'יום שני - ספר התניא', value: '21:00' },
              { title: 'יום שלישי - מגילה', value: '21:00' }
            ],
            durationSec: 30,
            type: 'time&text'
          },
          {
            title: 'זמני השבוע',
            rows: [
              { title: 'הנץ החמה', value: 'zmanim.sunrise' },
              { title: 'סוף ק"ש למ"א', value: 'zmanim.sofZmanShmaMGA' },
              { title: 'סוף ק"ש לגר"א', value: 'zmanim.sofZmanShma' },
              { title: 'זמן מנחה גדולה', value: 'zmanim.minchaGedola' },
              { title: 'שקיעת החמה', value: 'zmanim.sunset' },
              { title: 'צאת הכוכבים', value: 'zmanim.tzeitHakochavim' }
            ],
            durationSec: 15,
            type: 'time&text'
          },
          {
            title: 'talk-tfila.gif',
            type: 'image',
            durationSec: 7,
          },
        ],
        footer: 'בית הכנסת רשב"י',
        showClock: true
      }
    },
    {
      viewName: 'תצוגה ליום חול',
      showDays:[0, 1, 2, 3, 4],
      showDates:[],
      viewType: 'two-boards-view',
      viewFields: {
        title: 'זמני התפילות',
        rightBoard: [
          {
            title: 'תפילות חול',
            rows: [
              { title: 'שחרית מנין ראשון', value: '07:00' },
              { title: 'שחרית מנין שני', value: '08:10' },
              { title: 'מנחה וערבית', value: 'zmanim.minchaChol' },
              { title: '--------', value: '--------' },
              { title: 'יום שני - ספר התניא', value: '21:00' },
              { title: 'יום שלישי - מגילה', value: '21:00' }
            ],
            durationSec: -1,
            type: 'time&text'
          }
        ],
        leftBoard: [
          {
            title: 'talk-tfila.gif',
            type: 'image',
            durationSec: 6,
          },
          {
            title: 'זמני השבוע',
            rows: [
              { title: 'הנץ החמה', value: 'zmanim.sunrise' },
              { title: 'סוף ק"ש למ"א', value: 'zmanim.sofZmanShmaMGA' },
              { title: 'סוף ק"ש לגר"א', value: 'zmanim.sofZmanShma' },
              { title: 'זמן מנחה גדולה', value: 'zmanim.minchaGedola' },
              { title: 'שקיעת החמה', value: 'zmanim.sunset' },
              { title: 'צאת הכוכבים', value: 'zmanim.tzeitHakochavim' }
            ],
            durationSec: 30,
            type: 'time&text'
          },
          {
            title: 'keep-clean2.png',
            type: 'image',
            durationSec: 6,
          },
        ],
        footer: 'בית הכנסת רשב"י',
        showClock: true,
      }
    }
  
  ]
