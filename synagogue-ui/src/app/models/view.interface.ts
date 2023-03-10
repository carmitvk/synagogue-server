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
    viewName: 'תצוגה לשבת',
    durationSec: 129600,
    viewType: 'two-boards-view',
    viewFields: {
      title: 'כי תשא - פרה',
      rightBoard: [
        {
          title: 'זמני השבת',
          rows: [
            { title: 'שחרית שבת', value: '08:30' },
            { title: 'תהילים לילדים', value: '10:15' },
            { title: ' מנחה מוקדמת', value: '12:30' },
            { title: 'פ"ש + מסכת בכורות', value: '15:00' },
            { title: 'מנחה שבת', value: '17:10' },
            { title: 'ערבית מוצ"ש', value: '18:15' },
          ],
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
            { title: 'מנחה וערבית', value: '17:35' },
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
            { title: 'הנץ החמה', value: '05:55' },
            { title: 'סוף ק"ש למ"א', value: '08:16' },
            { title: 'סוף ק"ש לגר"א', value: '08:52' },
            { title: 'זמן מנחה גדולה', value: '12:20' },
            { title: 'שקיעת החמה', value: '17:46' },
            { title: 'צאת הכוכבים', value: '18:04' }
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
            { title: 'מנחה וערבית', value: '17:35' },
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
            { title: 'הנץ החמה', value: '05:55' },
            { title: 'סוף ק"ש למ"א', value: '08:16' },
            { title: 'סוף ק"ש לגר"א', value: '08:52' },
            { title: 'זמן מנחה גדולה', value: '12:20' },
            { title: 'שקיעת החמה', value: '17:46' },
            { title: 'צאת הכוכבים', value: '18:04' }
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