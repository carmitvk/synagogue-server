export interface BoardRow {
  title?: string;
  value?: string;
  img?: string;
}

export interface Board {
  title?: string;
  rows?: Array<BoardRow>;
  durationSec: number;
  type?: string;
}

export interface TwoBoardsView {
  title: string;
  rightTitle?: string;
  rightBoard: Array<Board>;
  leftBoard: Array<Board>;
  footer: string;
  showClock: boolean;
}

export interface View {
  viewName: string;
  viewType: string; // 'two-boards-view'
  durationSec: number;
  viewFields: ViewFields;
}

export interface ViewFields {
  [key: string]: any;
}


export const MOCK_VIEWS_DATA: Array<View> = [
  {
    viewName: 'תצוגה לשבועות',
    durationSec: 129600,
    viewType: 'two-boards-view',
    viewFields: {
      title: 'חג השבועות',
      rightBoard: [
        {
          title: 'זמני החג',
          rows: [
            { title: 'לימוד ליל שבועות', value: '23:00' },
            { title: 'שחרית מניין ראשון', value: '05:20' },
            { title: 'שחרית מניין שני', value: '08:30' },
            { title: 'מגילת רות לנשים', value: '17:30' },
            { title: 'מנחה ערב שבת', value: '19:30' },
          ],
          durationSec: -1,
          type: 'time&text'
        }
      ],
      leftBoard: [
        {
          title: 'shavuot.webp',
          type: 'image',
          durationSec: 15,
        }, 
        {
          title: 'זמני השבת',
          rows: [
            { title: 'שחרית שבת', value: '08:30' },
            { title: 'תהילים לילדים', value: '10:15' },
            { title: 'מנחה מוקדמת', value: '13:20' },
            { title: 'פ"ש + מסכת בכורות', value: '16:50' },
            { title: 'מנחה שבת', value: '19:00' },
            { title: 'ערבית מוצ"ש', value: '20:15' },
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
    viewName: 'תצוגה לשבת',
    durationSec: 129600,
    viewType: 'two-boards-view',
    viewFields: {
      title: 'calendar.parash',
      rightBoard: [
        {
          title: 'זמני השבת',
          rows: [
            { title: 'שחרית שבת', value: '08:30' },
            { title: 'תהילים לילדים', value: '10:15' },
            { title: 'מנחה מוקדמת', value: '13:20' },
            { title: 'פ"ש + מסכת בכורות', value: '16:50' },
            { title: 'מנחה שבת', value: '19:00' },
            { title: 'ערבית מוצ"ש', value: '20:15' },
            // { title: 'שחרית שבת', value: '08:30' },
            // { title: 'תהילים לילדים', value: '10:15' },
            // { title: 'מנחה מוקדמת', value: '13:20' },
            // { title: 'פ"ש + מסכת בכורות', value: 'zmanim.lessonPash' },
            // { title: 'מנחה שבת', value: 'zmanim.minchaShabat' },
            // { title: 'ערבית מוצ"ש', value: 'zmanim.arvitMotash' },
          ],
          // rows: [
          //   { title: 'שחרית שבת', value: '08:30' },
          //   { title: 'תהילים לילדים', value: '10:15' },
          //   { title: 'מנחה מוקדמת', value: '13:20' },
          //   { title: 'פ"ש + מסכת בכורות', value: '16:30' },
          //   { title: 'מנחה שבת', value: '18:40' },
          //   { title: 'ערבית מוצ"ש', value: '19:50' },
          // ],
          durationSec: -1,
          type: 'time&text'
        }
      ],
      leftBoard: [
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
    durationSec: -1,
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