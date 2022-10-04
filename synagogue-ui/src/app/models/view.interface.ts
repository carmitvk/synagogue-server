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
  //     title: 'וילך - שובה',
  //     rightBoard: [
  //       {
  //         title: 'זמני השבת',
  //         rows: [
  //           { title: 'שחרית שבת', value: '08:30' },
  //           { title: 'תהילים לילדים', value: '12:30' },
  //           { title: 'פרשת שבוע', value: '15:50' },
  //           { title: 'מסכת סוכה', value: '16:50' },
  //           { title: 'מנחה שבת', value: '17:50' },
  //           { title: 'ערבית מוצ"ש', value: '18:55' },
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
  //           { title: 'מנחה וערבית', value: '18:15' },
  //           { title: '--------', value: '--------' },
  //           { title: 'יום שני - ספר התניא', value: '21:00' },
  //           { title: 'יום שלישי - מכות', value: '21:00' }
  //         ],
  //         durationSec: 30,
  //         type: 'time&text'
  //       },
  //       {
  //         title: 'kipur.jpeg',
  //         type: 'image',
  //         durationSec: 15,
  //       },
  //       {
  //         title: 'זמני השבוע',
  //         rows: [
  //           { title: 'הנץ החמה', value: '06:34' },
  //           { title: 'סוף ק"ש למ"א', value: '08:56' },
  //           { title: 'סוף ק"ש לגר"א', value: '09:31' },
  //           { title: 'זמן מנחה גדולה', value: '12:59' },
  //           { title: 'שקיעת החמה', value: '18:24' }
  //         ],
  //         durationSec: 15,
  //         type: 'time&text'
  //       },
  //       {
  //         title: 'talk-tfila.gif',
  //         type: 'image',
  //         durationSec: 7,
  //       },
  //       {
  //         title: 'kipur.jpeg',
  //         type: 'image',
  //         durationSec: 15,
  //       },
  //     ],
  //     footer: 'בית הכנסת רשב"י',
  //     showClock: true
  //   }
  // },
  {
    viewName: 'תצוגה לכיפור',
    durationSec: 129600,
    viewType: 'two-boards-view',
    viewFields: {
      title: 'יום הכיפורים',
      rightBoard: [
        {
          title: 'זמני תפילות',
          rows: [
            { title: 'שחרית + מוסף', value: '08:00' },
            { title: 'מנחה', value: '16:20' },
            { title: 'נעילה', value: '18:00' },
            { title: 'צאת הצום', value: '18:57' },
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
            { title: 'מנחה וערבית', value: '18:15' },
            { title: '--------', value: '--------' },
            { title: 'יום שני - ספר התניא', value: '21:00' },
            { title: 'יום שלישי - מכות', value: '21:00' }
          ],
          durationSec: 30,
          type: 'time&text'
        },
        {
          title: 'shana-tova.jpg',
          type: 'image',
          durationSec: 20,
        },
        {
          title: 'זמני השבוע',
          rows: [
            { title: 'הנץ החמה', value: '06:34' },
            { title: 'סוף ק"ש למ"א', value: '08:56' },
            { title: 'סוף ק"ש לגר"א', value: '09:31' },
            { title: 'זמן מנחה גדולה', value: '12:59' },
            { title: 'שקיעת החמה', value: '18:24' }
          ],
          durationSec: 15,
          type: 'time&text'
        },
        {
          title: 'talk-tfila.gif',
          type: 'image',
          durationSec: 7,
        },
        {
          title: 'shana-tova.jpg',
          type: 'image',
          durationSec: 15,
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
            { title: 'מנחה וערבית', value: '18:15' },
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
            { title: 'הנץ החמה', value: '06:34' },
            { title: 'סוף ק"ש למ"א', value: '08:56' },
            { title: 'סוף ק"ש לגר"א', value: '09:31' },
            { title: 'זמן מנחה גדולה', value: '12:59' },
            { title: 'שקיעת החמה', value: '18:24' }
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