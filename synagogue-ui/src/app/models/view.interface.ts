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
      title: 'ויקרא-זכור',
      rightBoard: [
        {
          title: 'תפילות שבת',
          rows: [
            { title: 'מנחה ערב שבת', value: '17:30' },
            { title: 'שחרית שבת', value: '08:30' },
            { title: 'קריאת זכור נוספת', value: '10:30' },
            { title: 'שיעור פרשת שבוע', value: '14:30' },
            { title: 'שיעור מסכת מגילה', value: '14:45' },
            { title: 'מנחה שבת', value: '17:10' },
            { title: 'ערבית מוצ"ש', value: '18:20' },
          ],
          durationSec: -1,
          type: 'time&text'
        }
      ],
      leftBoard: [
        {
          title: 'mask-put.png',
          type: 'image',
          durationSec: 6,
        },
        {
          title: 'purim.jpg',
          type: 'image',
          durationSec: -1,
        },
        {
          title: 'תפילות חול',
          rows: [
            { title: 'שחרית מנין ראשון', value: '07:00' },
            { title: 'שחרית מנין שני', value: '08:30' },
            { title: 'מנחה וערבית', value: '17:35' },
            { title: '--------', value: '--------' },
            { title: 'יום שני - ספר התניא', value: '21:00' },
            { title: 'יום שלישי - מכות', value: '21:00' },
          ],
          durationSec: 20,
          type: 'time&text'
        },
        {
          title: 'זמני השבוע',
          rows: [
            { title: 'הנץ החמה', value: '06:01' },
            { title: 'סוף ק"ש למ"א', value: '08:12' },
            { title: 'סוף ק"ש לגר"א', value: '08:48' },
            { title: 'זמן מנחה גדולה', value: '12:20' },
            { title: 'שקיעת החמה', value: '17:47' },
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
    durationSec: -1,
    viewType: 'two-boards-view',
    viewFields: {
      title: 'זמני התפילות',
      rightBoard: [
        {
          title: 'תפילות חול',
          rows: [
            { title: 'שחרית מנין ראשון', value: '07:00' },
            { title: 'שחרית מנין שני', value: '08:30' },
            { title: 'מנחה וערבית', value: '17:35' },
            { title: '--------', value: '--------' },
            { title: 'יום שני - ספר התניא', value: '21:00' },
            { title: 'יום שלישי - מכות', value: '21:00' },
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
            { title: 'הנץ החמה', value: '06:01' },
            { title: 'סוף ק"ש למ"א', value: '08:12' },
            { title: 'סוף ק"ש לגר"א', value: '08:48' },
            { title: 'זמן מנחה גדולה', value: '12:20' },
            { title: 'שקיעת החמה', value: '17:47' },
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


