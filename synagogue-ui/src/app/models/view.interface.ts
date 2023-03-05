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
  //     title: 'תצוה - זכור',
  //     rightBoard: [
  //       {
  //         title: 'זמני השבת',
  //         rows: [
  //           { title: 'שחרית שבת', value: '08:31' },
  //           { title: 'תהילים לילדים', value: '10:15' },
  //           { title: ' מנחה מוקדמת', value: '12:30' },
  //           { title: 'פ"ש + מסכת בכורות', value: '14:55' },
  //           { title: 'מנחה שבת', value: '17:05' },
  //           { title: 'ערבית מוצ"ש', value: '18:10' },
  //         ],
  //         durationSec: -1,
  //         type: 'time&text'
  //       }
  //     ],
  //     leftBoard: [
  //       {
  //         title: 'rami.jpeg',
  //         type: 'image',
  //         durationSec: 15,
  //       },
  //       {
  //         title: 'purim2.jpeg',
  //         type: 'image',
  //         durationSec: 15,
  //       },
  //       {
  //         title: 'תפילות חול',
  //         rows: [
  //           { title: 'שחרית מנין ראשון', value: '07:00' },
  //           { title: 'שחרית מנין שני', value: '08:10' },
  //           { title: 'מנחה וערבית', value: '17:30' },
  //           { title: '--------', value: '--------' },
  //           { title: 'יום שני - ספר התניא', value: '21:00' },
  //           { title: 'יום שלישי - מגילה', value: '21:00' }
  //         ],
  //         durationSec: 30,
  //         type: 'time&text'
  //       },
  //       {
  //         title: 'זמני השבוע',
  //         rows: [
  //           { title: 'הנץ החמה', value: '06:03' },
  //           { title: 'סוף ק"ש למ"א', value: '08:31' },
  //           { title: 'סוף ק"ש לגר"א', value: '08:57' },
  //           { title: 'זמן מנחה גדולה', value: '12:22' },
  //           { title: 'שקיעת החמה', value: '17:41' }
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
  //           { title: 'שחרית מנין שני', value: '08:10' },
  //           { title: 'מנחה וערבית', value: '17:30' },
  //           { title: '--------', value: '--------' },
  //           { title: 'יום שני - ספר התניא', value: '21:00' },
  //           { title: 'יום שלישי - מגילה', value: '21:00' }
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
  //           { title: 'הנץ החמה', value: '06:03' },
  //           { title: 'סוף ק"ש למ"א', value: '08:31' },
  //           { title: 'סוף ק"ש לגר"א', value: '08:57' },
  //           { title: 'זמן מנחה גדולה', value: '12:22' },
  //           { title: 'שקיעת החמה', value: '17:41' }
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
  // },
  {
    viewName: 'תצוגה לפורים',
    durationSec: 129600,
    viewType: 'two-boards-view',
    viewFields: {
      title: 'חג פורים',
      rightBoard: [
        {
          title: 'תענית אסתר',
          rows: [
            { title: 'שחרית מנין ראשון', value: '07:00' },
            { title: 'שחרית מנין שני', value: '08:10' },
            { title: 'מנחה + ספר תורה', value: '17:30' },
            { title: 'ערבית + קריאת מגילה', value: '18:00' },
            { title: 'מסיבת פורים', value: '19:00' },
            { title: 'קריאת מגילה לנשים', value: '20:15' }
          ],
          durationSec: -1,
          type: 'time&text'
        }
      ],
      leftBoard: [
        {
          title: 'שלישי - פורים',
          rows: [
            { title: 'שחרית + מגילה', value: '07:00' },
            { title: 'שחרית מנין שני', value: '08:30' },
            { title: 'קריאת מגילה', value: '09:00' },
            { title: 'מנחה מוקדמת', value: '12:30' },
            { title: 'מנחה + ערבית', value: '17:35' }
          ],
          durationSec: 15,
          type: 'time&text'
        },
        {
          title: 'purim2.jpeg',
          type: 'image',
          durationSec: 15,
        },
        {
          title: 'זמני הצום',
          rows: [
            { title: 'כניסת הצום', value: '04:50' },
            { title: 'סוף ק"ש למ"א', value: '08:31' },
            { title: 'סוף ק"ש למ"א', value: '08:31' },
            { title: 'סוף ק"ש לגר"א', value: '08:57' },
            { title: 'שקיעת החמה', value: '17:41' },
            { title: 'צאת הצום', value: '17:59' }
          ],
          durationSec: 15,
          type: 'time&text'
        },
        {
          title: 'purim3.jpg',
          type: 'image',
          durationSec: 15,
        }
      ],
      footer: 'בית הכנסת רשב"י',
      showClock: true,
    },

  },
  {
    viewName: 'תצוגה לשלישי',
    durationSec: 86400,
    viewType: 'two-boards-view',
    viewFields: {
      title: 'חג פורים',
      rightBoard: [
        {
          title: 'שלישי - פורים',
          rows: [
            { title: 'שחרית + מגילה', value: '07:00' },
            { title: 'שחרית מנין שני', value: '08:30' },
            { title: 'קריאת מגילה', value: '09:00' },
            { title: 'מנחה מוקדמת', value: '12:30' },
            { title: 'מנחה + ערבית', value: '17:35' }
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
            { title: 'שחרית מנין שני', value: '08:10' },
            { title: 'מנחה וערבית', value: '17:30' },
            { title: '--------', value: '--------' },
            { title: 'יום שני - ספר התניא', value: '21:00' },
            { title: 'יום שלישי - מגילה', value: '21:00' }
          ],
          durationSec: 15,
          type: 'time&text'
        },
        {
          title: 'keep-clean2.png',
          type: 'image',
          durationSec: 6,
        },
        {
          title: 'זמני השבוע',
          rows: [
            { title: 'הנץ החמה', value: '06:03' },
            { title: 'סוף ק"ש למ"א', value: '08:31' },
            { title: 'סוף ק"ש לגר"א', value: '08:57' },
            { title: 'זמן מנחה גדולה', value: '12:22' },
            { title: 'שקיעת החמה', value: '17:41' }
          ],
          durationSec: 15,
          type: 'time&text'
        },
        {
          title: 'talk-tfila.gif',
          type: 'image',
          durationSec: 6,
        }
      ],
      footer: 'בית הכנסת רשב"י',
      showClock: true,
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
            { title: 'שחרית מנין שני', value: '08:10' },
            { title: 'מנחה וערבית', value: '17:30' },
            { title: '--------', value: '--------' },
            { title: 'יום שני - ספר התניא', value: '21:00' },
            { title: 'יום שלישי - מגילה', value: '21:00' }
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
            { title: 'הנץ החמה', value: '06:03' },
            { title: 'סוף ק"ש למ"א', value: '08:31' },
            { title: 'סוף ק"ש לגר"א', value: '08:57' },
            { title: 'זמן מנחה גדולה', value: '12:22' },
            { title: 'שקיעת החמה', value: '17:41' }
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