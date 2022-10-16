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
    viewName: 'תצוגה לשמחת תורה',
    durationSec: 129600,
    viewType: 'two-boards-view',
    viewFields: {
      title: 'שמחת תורה',
      rightBoard: [
        {
          title: 'זמני התפילות',
          rows: [
            { title: 'מנחה ערב חג', value: '18:00' },
            { title: 'שחרית חג', value: '08:30' },
            { title: 'קידוש חתנים',  },
            { title: 'שיעור תורה', value: '17:00' },
            { title: 'מנחה חג', value: '18:00' },
            { title: 'ערבית מוצאי חג', value: '18:40' },
          ],
          durationSec: -1,
          type: 'time&text'
        }
      ],
      leftBoard: [
        {
          title: 'תפילות חול',
          rows: [
            { title: 'שחרית מנין ראשון', value: '07:00' },
            { title: 'שחרית מנין שני', value: '08:30' },
            { title: 'מנחה וערבית', value: '17:55' },
            { title: '--------', value: '--------' },
            { title: 'יום שני - ספר התניא', value: '21:00' },
            { title: 'יום שלישי - מכות', value: '21:00' }
          ],
          durationSec: -1,
          type: 'time&text'
        },
        {
          title: 'זמני השבוע',
          rows: [
            { title: 'הנץ החמה', value: '06:45' },
            { title: 'סוף ק"ש למ"א', value: '08:59' },
            { title: 'סוף ק"ש לגר"א', value: '09:35' },
            { title: 'זמן מנחה גדולה', value: '12:55' },
            { title: 'שקיעת החמה', value: '18:04' }
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
            { title: 'שחרית מנין שני', value: '08:30' },
            { title: 'מנחה וערבית', value: '17:55' },
            { title: '--------', value: '--------' },
            { title: 'יום שני - ספר התניא', value: '21:00' },
            { title: 'יום שלישי - מכות', value: '21:00' }
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
            { title: 'הנץ החמה', value: '06:45' },
            { title: 'סוף ק"ש למ"א', value: '08:59' },
            { title: 'סוף ק"ש לגר"א', value: '09:35' },
            { title: 'זמן מנחה גדולה', value: '12:55' },
            { title: 'שקיעת החמה', value: '18:04' }
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