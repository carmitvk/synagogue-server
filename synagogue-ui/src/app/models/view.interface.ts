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
      rightTitle: 'מטות-מסעי',
      rightBoard: [
        {
          title: 'תפילות שבת',
          rows: [
            { title: 'מנחה ערב שבת', value: '19:35' },
            { title: 'שחרית שבת', value: '08:30' },
            { title: 'שיעור מסכת תענית', value: '18:00' },
            { title: 'מנחה שבת', value: '19:15' },
            { title: 'ערבית מוצ"ש', value: '20:25' },
          ],
          durationSec: -1,
          type: 'time&text'
        }
      ],
      leftBoard: [
        {
          title: 'lesson.png',
          type: 'image',
          durationSec: 30,
        },
        {
          title: 'keep-clean2.png',
          type: 'image',
          durationSec: 10,
        },
        {
          title: 'mask-put.png',
          type: 'image',
          durationSec: 10,
        },
        {
          title: 'תפילות חול',
          rows: [
            { title: 'שחרית', value: '07:00' },
            { title: ' מנחה וערבית', value: '19:40' },
            { title: '--------', value: '--------' },
            // { title: 'ספר התניא - ביום שני', value: '21:00' },
            // { title: 'מסכת ברכות - ביום שלישי', value: '21:00' },
            { title: 'יום שני - ספר התניא', value: '21:00' },
            { title: 'יום שלישי - ברכות', value: '21:00' },
            { title: 'יום רביעי - תורת חסד', value: '21:00' },
          ],
          durationSec: 30,
          type: 'time&text'
        },
        {
          title: 'talk-tfila.gif',
          type: 'image',
          durationSec: 10,
        },
        {
          title: 'זמני השבוע',
          rows: [
            { title: 'הנץ החמה', value: '05:49' },
            { title: 'סוף ק"ש למ"א', value: '08:32' },
            { title: 'סוף ק"ש לגר"א', value: '09:15' },
            { title: 'זמן מנחה גדולה', value: '13:16' },
            { title: 'שקיעת החמה', value: '19:49' },
          ],
          durationSec: 15,
          type: 'time&text'
        },
        {
          title: 'mask-put.png',
          type: 'image',
          durationSec: 10,
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
            { title: ' מנחה וערבית', value: '19:40' },
            { title: '--------', value: '--------' },
            // { title: 'ספר התניא - ביום שני', value: '21:00' },
            // { title: 'מסכת ברכות - ביום שלישי', value: '21:00' },
            
            { title: 'יום שני - ספר התניא', value: '21:00' },
            { title: 'יום שלישי - ברכות', value: '21:00' },
            { title: 'יום רביעי - תורת חסד', value: '21:00' },

          ],
          durationSec: -1,
          type: 'time&text'
        }
      ],
      leftBoard: [
        {
          title: 'lesson.png',
          type: 'image',
          durationSec: 30,
        },
        {
          title: 'talk-tfila2y2.png',
          type: 'image',
          durationSec: 10,
        },
        {
          title: 'זמני השבוע',
          rows: [
            { title: 'הנץ החמה', value: '05:49' },
            { title: 'סוף ק"ש למ"א', value: '08:32' },
            { title: 'סוף ק"ש לגר"א', value: '09:15' },
            { title: 'זמן מנחה גדולה', value: '13:16' },
            { title: 'שקיעת החמה', value: '19:49' },
          ],
          durationSec: 30,
          type: 'time&text'
        },
        {

          title: 'mask-put.png',
          type: 'image',
          durationSec: 15,
        },
        {
          title: 'keep-clean2.png',
          type: 'image',
          durationSec: 15,
        },
      ],
      footer: 'בית הכנסת רשב"י',
      showClock: true,
    },
    durationSec: -1,
    viewType: 'two-boards-view'
  }
]


