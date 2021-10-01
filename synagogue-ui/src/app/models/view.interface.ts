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
  // {
  //   viewName: 'תצוגה לכיפור',
  //   durationSec: 129600,
  //   viewType: 'two-boards-view',
  //   viewFields: {
  //     title: 'זמני התפילות',
  //     rightTitle: 'כיפור התשפ"ב',
  //     rightBoard: [
  //       {
  //         title: 'תפילות כיפור',
  //         rows: [
  //           { title: 'מנחה ערב כיפור', value: '14:00' },
  //           { title: 'לך אלי תשוקתי', value: '18:30' },
  //           { title: 'שחרית ', value: '08:00' },
  //           { title: 'מנחה', value: '17:00' },
  //           { title: 'נעילה', value: '18:00' },
  //           { title: 'צאת הצום', value: '19:23' },
  //         ],
  //         durationSec: -1,
  //         type: 'time&text'
  //       }
  //     ],
  //     leftBoard: [
  //       {
  //         title: 'shana-tova.jpg',
  //         type: 'image',
  //         durationSec: 6,
  //       },
  //       {
  //         title: 'mask-put.png',
  //         type: 'image',
  //         durationSec: 6,
  //       },
  //       {
  //         title: 'זמני היום',
  //         rows: [
  //           { title: 'הנץ החמה', value: '06:32' },
  //           { title: 'סוף ק"ש למ"א', value: '08:54' },
  //           { title: 'סוף ק"ש לגר"א', value: '09:30' },
  //           { title: 'שקיעת החמה', value: '18:46' },
  //           { title: 'צאת הצום', value: '19:23' },
  //           { title: 'צאת הצום לר"ת', value: '19:59' },
  //         ],
  //         durationSec: 30,
  //         type: 'time&text'
  //       },
  //       {
  //         title: 'talk-tfila.gif',
  //         type: 'image',
  //         durationSec: 7,
  //       },
  //     ],
  //     footer: 'בית הכנסת רשב"י',
  //     showClock: true,
  //   },
  // },
  {
    viewName: 'תצוגה לשבת',
    durationSec: 129600,
    viewType: 'two-boards-view',
    viewFields: {
      title: 'זמני התפילות',
      rightTitle: 'פרשת בראשית',
      rightBoard: [
        {
          title: 'תפילות שבת',
          rows: [
            { title: 'מנחה ערב שבת', value: '18:10' },
            { title: 'שחרית שבת', value: '08:30' },
            { title: 'שיעור פרשת שבוע', value: '16:20' },
            { title: 'שיעור מסכת תענית', value: '16:50' },
            { title: 'מנחה שבת', value: '17:50' },
            { title: 'ערבית מוצ"ש', value: '18:55' },
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
          title: 'תפילות חול',
          rows: [
            { title: 'שחרית מנין ראשון', value: '07:00' },
            { title: 'שחרית מנין שני', value: '08:30' },
            { title: 'מנחה וערבית', value: '18:15' },
            { title: '--------', value: '--------' },
            { title: 'יום שני - ספר התניא', value: '21:00' },
            { title: 'יום שלישי - ברכות', value: '21:00' },
          ],
          durationSec: 15,
          type: 'time&text'
        },
        {
          title: 'זמני השבוע',
          rows: [
            { title: 'הנץ החמה', value: '06:43' },
            { title: 'סוף ק"ש למ"א', value: '08:57' },
            { title: 'סוף ק"ש לגר"א', value: '09:33' },
            { title: 'זמן מנחה גדולה', value: '13:00' },
            { title: 'שקיעת החמה', value: '18:23' },
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
            { title: 'מנחה וערבית', value: '18:15' },
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
            { title: 'הנץ החמה', value: '06:43' },
            { title: 'סוף ק"ש למ"א', value: '08:57' },
            { title: 'סוף ק"ש לגר"א', value: '09:33' },
            { title: 'זמן מנחה גדולה', value: '13:00' },
            { title: 'שקיעת החמה', value: '18:23' },
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


