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
      rightTitle: 'פרשת קרח',
      rightBoard: [
        {
          title: 'תפילות שבת',
          rows: [
            { title: 'מנחה ערב שבת', value: '19:30' },
            { title: 'שחרית שבת', value: '08:30' },
            { title: 'שיעור מסכת תענית', value: '18:00' },
            { title: 'מנחה שבת', value: '19:10' },
            { title: 'ערבית מוצ"ש', value: '20:25' },
          ],
          durationSec: -1,
          type: 'time&text'
        }
      ],
      leftBoard: [
        {
          title: 'תפילות חול',
          rows: [
            { title: 'שחרית', value: '07:00' },
            { title: ' מנחה וערבית', value: '19:35' },
            { title: '--------', value: '--------' },
            { title: 'שיעור ביום שלישי', value: '21:00' },
          ],
          durationSec: 30,
          type: 'time&text'
        },
        {
          title: 'keep-clean.jpg',
          type: 'image',
          durationSec: 17,
        },
        {
          title: 'זמני השבוע',
          rows: [
            { title: 'הנץ החמה', value: '05:40' },
            { title: 'סוף ק"ש למ"א', value: '08:24' },
            { title: 'סוף ק"ש לגר"א', value: '09:08' },
            { title: 'זמן מנחה גדולה', value: '13:11' },
            { title: 'שקיעת החמה', value: '19:48' },
          ],
          durationSec: 17,
          type: 'time&text'
        },
      ],
      footer: 'בית הכנסת רשב"י',
      showClock: true,
    },
    durationSec: 129600,
    viewType: 'two-boards-view'
  },
  {
    viewFields: {
      title: 'זמני התפילות',
      rightBoard: [
        {
          title: 'תפילות חול',
          rows: [
            { title: 'שחרית', value: '07:00' },
            { title: ' מנחה וערבית', value: '19:35' },
            { title: '--------', value: '--------' },
            { title: 'שיעור ביום שלישי', value: '21:00' },
          ],
          durationSec: -1,
          type: 'time&text'
        }
      ],
      leftBoard: [
        {
          title: 'talk-tfila2y2.png',
          type: 'image',
          durationSec: 17,
        },
        {
          title: 'זמני השבוע',
          rows: [
            { title: 'הנץ החמה', value: '05:40' },
            { title: 'סוף ק"ש למ"א', value: '08:24' },
            { title: 'סוף ק"ש לגר"א', value: '09:08' },
            { title: 'זמן מנחה גדולה', value: '13:11' },
            { title: 'שקיעת החמה', value: '19:48' },
          ],
          durationSec: 30,
          type: 'time&text'
        },
        {
          title: 'keep-clean.jpg',
          type: 'image',
          durationSec: 17,
        },
      ],
      footer: 'בית הכנסת רשב"י',
      showClock: true,
    },
    durationSec: -1,
    viewType: 'two-boards-view'
  }
]


