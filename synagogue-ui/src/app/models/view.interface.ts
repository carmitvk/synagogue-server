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
      title: 'זמני התפילות',
      rightTitle: 'פרשת כי-תבוא',
      rightBoard: [
        {
          title: 'תפילות שבת',
          rows: [
            { title: 'מנחה ערב שבת', value: '18:55' },
            { title: 'שחרית שבת', value: '08:30' },
            { title: 'שיעור מסכת תענית', value: '17:00' },
            { title: 'מנחה שבת', value: '18:35' },
            { title: 'ערבית מוצ"ש', value: '19:45' },
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
            { title: 'הנץ החמה', value: '06:16' },
            { title: 'סוף ק"ש למ"א', value: '08:49' },
            { title: 'סוף ק"ש לגר"א', value: '09:27' },
            { title: 'זמן מנחה גדולה', value: '13:14' },
            { title: 'שקיעת החמה', value: '19:17' },
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
    
  },
  {
    viewName: 'תצוגה ליום חול',
    durationSec: 432000,
    viewType: 'two-boards-view',
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
            { title: 'הנץ החמה', value: '06:16' },
            { title: 'סוף ק"ש למ"א', value: '08:49' },
            { title: 'סוף ק"ש לגר"א', value: '09:27' },
            { title: 'זמן מנחה גדולה', value: '13:14' },
            { title: 'שקיעת החמה', value: '19:17' },
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
  },
]


