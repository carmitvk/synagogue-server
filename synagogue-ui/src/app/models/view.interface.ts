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
  //   viewName: 'תצוגה לשבת',
  //   durationSec: 129600,
  //   viewType: 'two-boards-view',
  //   viewFields: {
  //     title: 'פרשת האזינו',
  //     rightBoard: [
  //       {
  //         title: 'זמני השבת',
  //         rows: [
  //           { title: 'שחרית שבת', value: '08:30' },
  //           { title: 'תהילים לילדים', value: '12:30' },
  //           { title: 'פרשת שבוע', value: '15:40' },
  //           { title: 'מסכת סוכה', value: '16:40' },
  //           { title: 'מנחה שבת', value: '17:40' },
  //           { title: 'ערבית מוצ"ש', value: '18:50' },
  //         ],
  //         durationSec: -1,
  //         type: 'time&text'
  //       }
  //     ],
  //     leftBoard: [
  //       {
  //         title: 'תפילות חול',
  //         rows: [
  //           { title: 'שחרית מנין ראשון', value: '07:00' },
  //           { title: 'שחרית מנין שני', value: '08:30' },
  //           { title: 'מנחה וערבית', value: '18:05' },
  //           { title: '--------', value: '--------' },
  //           { title: 'יום שני - ספר התניא', value: '21:00' },
  //           { title: 'יום שלישי - מכות', value: '21:00' }
  //         ],
  //         durationSec: 30,
  //         type: 'time&text'
  //       },
  //       {
  //         title: 'זמני השבוע',
  //         rows: [
  //           { title: 'הנץ החמה', value: '06:38' },
  //           { title: 'סוף ק"ש למ"א', value: '08:57' },
  //           { title: 'סוף ק"ש לגר"א', value: '09:33' },
  //           { title: 'זמן מנחה גדולה', value: '12:58' },
  //           { title: 'שקיעת החמה', value: '18:18' }
  //         ],
  //         durationSec: 15,
  //         type: 'time&text'
  //       },
  //       {
  //         title: 'talk-tfila.gif',
  //         type: 'image',
  //         durationSec: 7,
  //       },
  //     ],
  //     footer: 'בית הכנסת רשב"י',
  //     showClock: true
  //   }
  // },
  {
    viewName: 'תצוגה לסוכות',
    durationSec: 229600,
    viewType: 'two-boards-view',
    viewFields: {
      title: 'חג סוכות',
      rightBoard: [
        {
          title: 'שבת חוה"מ',
          rows: [
            { title: 'שחרית שבת', value: '08:30' },
            { title: 'תהילים לילדים', value: '13:45' },
            { title: 'שיעור תורה', value: '15:25' },
            { title: 'סיום מסכת סוכה', value: '16:25' },
            { title: 'מנחה שבת', value: '17:25' },
            { title: 'ערבית מוצאי שבת', value: '18:40' },
          ],
          durationSec: -1,
          type: 'time&text'
        }
      ],
      leftBoard: [
        {
          title: 'הושענא רבה',
          rows: [
            { title: 'תיקון הושענא רבה', value: '23:00' },
            { title: 'שחרית בנץ', value: '06:20' },
            { title: 'שחרית מנין שני', value: '08:30' },
            { title: 'כניסת החג', value: '17:47' },
          ],
          durationSec: 30,
          type: 'time&text'
        },
        {
          title: 'succot.jpg',
          type: 'image',
          durationSec: 20,
        },
        {
          title: 'זמני השבוע',
          rows: [
            { title: 'הנץ החמה', value: '06:44' },
            { title: 'סוף ק"ש למ"א', value: '08:59' },
            { title: 'סוף ק"ש לגר"א', value: '09:35' },
            { title: 'זמן מנחה גדולה', value: '12:56' },
            { title: 'שקיעת החמה', value: '18:17' }
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
    viewName: 'תצוגה לחול המועד',
    durationSec: -1,
    viewType: 'two-boards-view',
    viewFields: {
      title: 'זמני התפילות',
      rightBoard: [
        {
          title: 'תפילות חול המועד',
          rows: [
            { title: 'שחרית מנין ראשון', value: '07:00' },
            { title: 'שחרית מנין שני', value: '08:30' },
            { title: 'מנחה וערבית', value: '18:05' },
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
          title: 'זמני השבוע',
          rows: [
            { title: 'הנץ החמה', value: '06:44' },
            { title: 'סוף ק"ש למ"א', value: '08:59' },
            { title: 'סוף ק"ש לגר"א', value: '09:35' },
            { title: 'זמן מנחה גדולה', value: '12:56' },
            { title: 'שקיעת החמה', value: '18:17' }
          ],
          durationSec: 30,
          type: 'time&text'
        },
        {
          title: 'succot.jpg',
          type: 'image',
          durationSec: 20,
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
  // {
  //   viewName: 'תצוגה ליום חול',
  //   durationSec: -1,
  //   viewType: 'two-boards-view',
  //   viewFields: {
  //     title: 'זמני התפילות',
  //     rightBoard: [
  //       {
  //         title: 'תפילות חול',
  //         rows: [
  //           { title: 'שחרית מנין ראשון', value: '07:00' },
  //           { title: 'שחרית מנין שני', value: '08:30' },
  //           { title: 'מנחה וערבית', value: '18:05' },
  //           { title: '--------', value: '--------' },
  //           { title: 'יום שני - ספר התניא', value: '21:00' },
  //           { title: 'יום שלישי - מכות', value: '21:00' }
  //         ],
  //         durationSec: -1,
  //         type: 'time&text'
  //       }
  //     ],
  //     leftBoard: [
  //       {
  //         title: 'talk-tfila.gif',
  //         type: 'image',
  //         durationSec: 6,
  //       },
  //       {
  //         title: 'זמני השבוע',
  //         rows: [
  //           { title: 'הנץ החמה', value: '06:40' },
  //           { title: 'סוף ק"ש למ"א', value: '08:57' },
  //           { title: 'סוף ק"ש לגר"א', value: '09:33' },
  //           { title: 'זמן מנחה גדולה', value: '12:57' },
  //           { title: 'שקיעת החמה', value: '18:14' }
  //         ],
  //         durationSec: 30,
  //         type: 'time&text'
  //       },
  //       {
  //         title: 'keep-clean2.png',
  //         type: 'image',
  //         durationSec: 6,
  //       },
  //     ],
  //     footer: 'בית הכנסת רשב"י',
  //     showClock: true,
  //   }
  // }
]