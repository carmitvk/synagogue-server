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
      title: 'פרשת וירא',
      // rightTitle: 'פרשת בראשית',
      rightBoard: [
        {
          title: 'תפילות שבת',
          rows: [
            { title: 'מנחה ערב שבת', value: '17:45' },
            { title: 'שחרית שבת', value: '08:30' },
            { title: 'שיעור פרשת שבוע', value: '15:55' },
            { title: 'שיעור מסכת תענית', value: '16:25' },
            { title: 'מנחה שבת', value: '17:25' },
            { title: 'ערבית מוצ"ש', value: '18:30' },
          ],
          durationSec: -1,
          type: 'time&text'
        }
      ],
      leftBoard: [
        // {
        //   title: 'keep-clean2.png',
        //   type: 'image',
        //   durationSec: 6,
        // },
         {
          title: 'mask-put.png',
          type: 'image',
          durationSec: 6,
        },
         {
          title: 'Izek-and-abraham.jpg',
          type: 'image',
          durationSec: 6,
        },
        {
          title: 'תפילות חול',
          rows: [
            { title: 'שחרית מנין ראשון', value: '07:00' },
            { title: 'שחרית מנין שני', value: '08:30' },
            { title: 'מנחה וערבית', value: '17:45' },
            { title: '--------', value: '--------' },
            { title: 'יום שני - ספר התניא', value: '21:00' },
            { title: 'יום שלישי - ברכות', value: '21:00' },
          ],
          durationSec: 20,
          type: 'time&text'
        },
        {
          title: 'VAYERA.jpg',
          type: 'image',
          durationSec: 6,
        },
        {
          title: 'זמני השבוע',
          rows: [
            { title: 'הנץ החמה', value: '06:51' },
            { title: 'סוף ק"ש למ"א', value: '09:02' },
            { title: 'סוף ק"ש לגר"א', value: '09:38' },
            { title: 'זמן מנחה גדולה', value: '12:54' },
            { title: 'שקיעת החמה', value: '17:59' },
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
            { title: 'מנחה וערבית', value: '17:45' },
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
            { title: 'הנץ החמה', value: '06:51' },
            { title: 'סוף ק"ש למ"א', value: '09:02' },
            { title: 'סוף ק"ש לגר"א', value: '09:38' },
            { title: 'זמן מנחה גדולה', value: '12:54' },
            { title: 'שקיעת החמה', value: '17:59' },
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


