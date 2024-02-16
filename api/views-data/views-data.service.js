const logger = require('../../services/logger.service')

module.exports = {
    getViewsData,
    updateViewsData,
}

function getViewsData() {
    return MOCK_VIEWS_DATA;
}

function updateViewsData(viewsData) {
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
            { title: 'מנחה ערב שבת', value: '17:15' },
            { title: 'שחרית שבת', value: '08:30' },
            { title: 'מנחה מוקדמת', value: '12:45' },
            { title: 'מנחה שבת', value: '16:50' },
            { title: 'ערבית מוצ"ש', value: '18:00' },
            // { title: 'מנחה שבת', value: 'zmanim.minchaShabat' },
            // { title: 'ערבית מוצ"ש', value: 'zmanim.arvitMotash' },
          ],
          durationSec: -1,
          type: 'time&text'
        }
      ],
      leftBoard: [
        {
          title: 'teruma.png',
          type: 'image',
          durationSec: 7,
        },
        {
          title: 'שיעורי תורה',
          rows: [
            { title: 'תהילים לילדים', value: '10:15' },
            { title: 'שיעור פרשת שבוע', value: '14:40' },
            { title: 'מסכת בכורות', value: '15:00' },
            // { title: 'שיעור לנשים בתנ"ך', value: '----' },
            // { title: 'פ"ש + מסכת בכורות', value: 'zmanim.lessonPash' },

          ],
          durationSec: 15,
          type: 'time&text'
        },
        {
          title: 'keep-clean2.png',
          type: 'image',
          durationSec: 7,
        },
        {
          title: 'תפילות חול',
          rows: [
            { title: 'שחרית מנין ראשון', value: '07:00' },
            { title: 'שחרית מנין שני', value: '08:10' },
            { title: 'מנחה וערבית', value: 'zmanim.minchaChol' },
            { title: '----- שיעורי תורה ----- '},
            { title: 'יום שני - ספר התניא', value: '21:00' },
            { title: 'יום שלישי - מגילה', value: '21:00' }
          ],
          durationSec: 15,
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
            { title: '----- שיעורי תורה ----- '},
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
  },
  {
    viewName: 'תצוגה לראש השנה יום א׳',
    showDays:[],
    showDates:['15092023','16092023'],
    viewType: 'two-boards-view',
    viewFields: {
      title: 'ראש השנה',
      rightBoard: [
        {
          title: 'חג ראשון - יום שבת',
          rows: [
            { title: 'מנחה ערב חג ', value: '18:35' },
            { title: 'שחרית חג', value: '08:00' },
            { title: 'מנחה מוקדמת + תשליך', value: '13:20' },
            { title: 'שיעור תורה גברים', value: '15:50' },
            { title: 'שיעור תורה נשים', value: '17:00' },
            { title: 'מנחה + תשליך', value: '18:00' },
          ],
          durationSec: -1,
          type: 'time&text'
        }
      ],
      leftBoard: [
        {
          title: 'חג שני - יום ראשון',
          rows: [
            { title: 'ערבית חג שני', value: '19:00' },
            { title: 'שחרית חג', value: '08:00' },
            { title: 'מנחה מוקדמת', value: '13:20' },
            { title: 'שיעור תורה גברים', value: '16:30' },
            { title: 'מנחה', value: '18:40' },
            { title: 'ערבית צאת החג', value: '19:10' },
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
          title: 'shana-tova.jpg',
          type: 'image',
          durationSec: 7,
        },
      ],
      footer: 'בית הכנסת רשב"י',
      showClock: true
    }
  },
  {
    viewName: 'תצוגה לראש השנה יום ב',
    showDays:[],
    showDates:['17092023'],
    viewType: 'two-boards-view',
    viewFields: {
      title: 'ראש השנה',
      rightBoard: [
        {
          title: 'זמני החג',
          rows: [
            { title: 'שחרית חג', value: '08:00' },
            { title: 'מנחה מוקדמת', value: '13:20' },
            { title: 'שיעור תורה גברים', value: '16:30' },
            { title: 'מנחה', value: '18:40' },
            { title: 'ערבית צאת החג', value: '19:10' },
          ],
          durationSec: -1,
          type: 'time&text'
        },
      ],
      leftBoard: [
        {
          title: 'talk-tfila.gif',
          type: 'image',
          durationSec: 6,
        },
        {
          title: 'יום שני - צום גדליה',
          rows: [
            { title: 'סליחות מנין ראשון', value: '06:10' },
            { title: 'שחרית מנין ראשון', value: '07:00' },
            { title: 'סליחות מנין שני', value: '07:40' },
            { title: 'שחרית מנין שני', value: '08:20' },
            { title: 'מנחה וערבית', value: 'zmanim.minchaChol' },
            { title: 'צאת הצום', value: '19:01' },
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
          title: 'shana-tova.jpg',
          type: 'image',
          durationSec: 7,
        },
      ],
      footer: 'בית הכנסת רשב"י',
      showClock: true
    }
  },
  {
    viewName: 'תצוגה לערב יום הכיפורים',
    showDays:[],
    showDates:['24092023'],
    viewType: 'two-boards-view',
    viewFields: {
      title: 'יום הכיפורים',
      rightBoard: [
        {
          title: 'זמני התפילות',
          rows: [
            { title: 'מנחה ערב יוה״כ', value: '14:00' },
            { title: 'לך אלי תשוקתי + ערבית', value: '18:15' },
            { title: 'שחרית יום הכיפורים', value: '08:00' },
            { title: 'מנחה', value: '16:20' },
            { title: 'נעילה', value: '18:00' },
            { title: 'צאת הצום', value: '19:10' },
          ],
          durationSec: -1,
          type: 'time&text'
        }
      ],
      leftBoard: [
        {
          title: 'shana-tova.jpg',
          type: 'image',
          durationSec: 10,
        },
        {
          title: 'תפילות חול',
          rows: [
            { title: 'שחרית מנין ראשון', value: '07:00' },
            { title: 'שחרית מנין שני', value: '08:10' },
            { title: 'מנחה וערבית', value: 'zmanim.minchaChol' },
            
            { title: '------- שיעורי תורה ------- '},
            { title: 'יום שני - ספר התניא', value: '21:00' },
            { title: 'יום שלישי - מגילה', value: '21:00' }
          ],
          durationSec: 30,
          type: 'time&text'
        },
        {
          title: 'זמני היום',
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
    viewName: 'תצוגה ליום הכיפורים',
    showDays:[],
    showDates:['25092023'],
    viewType: 'two-boards-view',
    viewFields: {
      title: 'יום הכיפורים',
      rightBoard: [
        {
          title: 'זמני התפילות',
          rows: [
            { title: 'שחרית יום הכיפורים', value: '08:00' },
            { title: 'מנחה', value: '16:20' },
            { title: 'נעילה', value: '18:00' },
            { title: 'צאת הצום', value: '19:10' },
            { title: 'צאת הצום ר״ת', value: '19:47' },
          ],
          durationSec: -1,
          type: 'time&text'
        }
      ],
      leftBoard: [
        {
          title: 'shana-tova.jpg',
          type: 'image',
          durationSec: 10,
        },
        {
          title: 'תפילות חול',
          rows: [
            { title: 'שחרית מנין ראשון', value: '07:00' },
            { title: 'שחרית מנין שני', value: '08:10' },
            { title: 'מנחה וערבית', value: 'zmanim.minchaChol' },
            
            { title: '------- שיעורי תורה ------- '},
            { title: 'יום שני - ספר התניא', value: '21:00' },
            { title: 'יום שלישי - מגילה', value: '21:00' }
          ],
          durationSec: 30,
          type: 'time&text'
        },
        {
          title: 'זמני היום',
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
          title: 'kipur-korbanot.jpeg',
          type: 'image',
          durationSec: 15,
        },
      ],
      footer: 'בית הכנסת רשב"י',
      showClock: true
    }
  },
  {
    viewName: 'תצוגה לחג סוכות ראשון',
    showDays:[],
    showDates:['29092023','30092023'],
    viewType: 'two-boards-view',
    viewFields: {
      title: 'חג סוכות',
      rightBoard: [
        {
          title: 'זמני התפילות',
          rows: [
            { title: 'מנחה ערב שבת', value: '18:15' },
            { title: 'שחרית', value: '08:30' },
            { title: 'מנחה מוקדמת', value: '13:20' },
            { title: 'מנחה שבת', value: '17:50' },
            { title: 'ערבית מוצ"ש', value: '19:00' },
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
            { title: 'שיעור לחג לגברים', value: '15:40' },
            { title: 'שיעור לנשים בתנ"ך', value: '17:00' },
            { title: 'מסכת בכורות', value: '16:40' },

          ],
          durationSec: 30,
          type: 'time&text'
        },
        {
          title: 'succot.jpg',
          type: 'image',
          durationSec: 6,
        },
        {
          title: 'תפילות חול המועד',
          rows: [
            { title: 'שחרית מנין ראשון', value: '07:00' },
            { title: 'שחרית מנין שני', value: '08:10' },
            { title: 'מנחה וערבית', value: 'zmanim.minchaChol' },
            { title: '----- שיעורי תורה ----- '},
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
    viewName: 'תצוגה לשמחת תורה והושענה רבה',
    showDays:[],
    showDates:['05102023','06102023','07102023'],
    viewType: 'two-boards-view',
    viewFields: {
      title: 'שמחת תורה',
      rightBoard: [
        {
          title: 'זמני התפילות',
          rows: [
            { title: 'לימוד ליל הושע״ר', value: '23:00' },
            { title: 'שחרית ותיקין', value: '06:30' },
            { title: 'שחרית מנין שני', value: '08:30' },
            { title: 'מנחה ערב חג', value: '18:10' },
          ],
          durationSec: 57600,
          type: 'time&text'
        },
        {
          title: 'זמני התפילות',
          rows: [
            { title: 'ערבית חג + הקפות', value: '18:25' },
            { title: 'שחרית + הקפות', value: '08:30' },
            { title: 'קידוש חתנים', value: '11:00' },
            { title: 'מנחה מוקדמת', value: '13:20' },
            { title: 'מנחה ', value: '17:40' },
            { title: 'ערבית מוצאי חג', value: '18:50' },
          ],
          durationSec: -1,
          type: 'time&text'
        }
      ],
      leftBoard: [
        {
          title: 'ברכות לחתני התורה',
          rows: [
            { title: ''},
            { title: 'חתן מעונה - ארז כץ' },
            { title: 'חתן תורה - מרדכי מימון' },
            { title: 'חתן בראשית - אריה גורן' },

          ],
          durationSec: 30,
          type: 'time&text'
        },
        {
          title: 'שיעורי תורה',
          rows: [
            { title: 'שיעור תורה לגברים', value: '15:40' },
            { title: 'שיעור לנשים בתנ"ך', value: '17:00' },
            { title: 'מסכת בכורות', value: '16:30' },

          ],
          durationSec: 30,
          type: 'time&text'
        },
        {
          title: 'tora.jpg',
          type: 'image',
          durationSec: 6,
        },
        {
          title: 'תפילות חול',
          rows: [
            { title: 'שחרית מנין ראשון', value: '07:00' },
            { title: 'שחרית מנין שני', value: '08:10' },
            { title: 'מנחה וערבית', value: 'zmanim.minchaChol' },
            { title: '----- שיעורי תורה ----- '},
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
  }
  ]
