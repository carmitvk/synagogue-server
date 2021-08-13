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
  viewType: string; // 'two-boards-view'
  durationSec: number;
  viewFields: ViewFields;
}

export interface ViewFields {
  [key: string]: any;
}


export const MOCK_VIEWS_DATA: Array<View> = [
  {
    viewFields: {
      
      title: 'זמני התפילות',
      rightTitle: 'פרשת שופטים',
      rightBoard: [
        {
          title: 'תפילות שבת',
          rows: [
            { title: 'מנחה ערב שבת', value: '19:15' },
            { title: 'שחרית שבת', value: '08:30' },
            { title: 'שיעור מסכת תענית', value: '17:15' },
            { title: 'מנחה שבת', value: '18:50' },
            { title: 'ערבית מוצ"ש', value: '19:55' },
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
          title: 'mask-put.png',
          type: 'image',
          durationSec: 6,
        },
        {
          title: 'תפילות חול',
          rows: [
            { title: 'סליחות', value: '06:30' },
            { title: 'שחרית', value: '07:00' },
            { title: 'סליחות', value: '18:30' },
            { title: 'מנחה וערבית', value: '19:10' },
            { title: '--------', value: '--------' },
            { title: 'יום שני - ספר התניא', value: '21:00' },
            { title: 'יום שלישי - ברכות', value: '21:00' },
          ],
          durationSec: 30,
          type: 'time&text'
        },
        {
          title: 'זמני השבוע',
          rows: [
            { title: 'הנץ החמה', value: '06:12' },
            { title: 'סוף ק"ש למ"א', value: '08:46' },
            { title: 'סוף ק"ש לגר"א', value: '09:25' },
            { title: 'זמן מנחה גדולה', value: '13:15' },
            { title: 'שקיעת החמה', value: '19:25' },
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
      showClock: true,
    },
    durationSec: 108000,
    viewType: 'two-boards-view'
  },
  {
    viewFields: {
      title: 'זמני התפילות',
      rightBoard: [
        {
          title: 'תפילות חול',
          rows: [
            { title: 'סליחות', value: '06:30' },
            { title: 'שחרית', value: '07:00' },
            { title: 'סליחות', value: '18:30' },
            { title: 'מנחה וערבית', value: '19:10' },
            { title: '--------', value: '--------' },
            { title: 'יום שני - ספר התניא', value: '21:00' },
            { title: 'יום שלישי - ברכות', value: '21:00' },
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
            { title: 'הנץ החמה', value: '06:12' },
            { title: 'סוף ק"ש למ"א', value: '08:46' },
            { title: 'סוף ק"ש לגר"א', value: '09:25' },
            { title: 'זמן מנחה גדולה', value: '13:15' },
            { title: 'שקיעת החמה', value: '19:25' },
          ],
          durationSec: 30,
          type: 'time&text'
        },
        {

          title: 'mask-put.png',
          type: 'image',
          durationSec: 6,
        },
        {
          title: 'keep-clean2.png',
          type: 'image',
          durationSec: 6,
        },
      ],
      footer: 'בית הכנסת רשב"י',
      showClock: true,
    },
    durationSec: -1,
    viewType: 'two-boards-view'
  }
]


