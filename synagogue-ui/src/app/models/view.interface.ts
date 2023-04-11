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
  //     title: 'פרשת שמיני',
  //     rightBoard: [
  //       {
  //         title: 'זמני השבת',
  //         rows: [
  //           { title: 'שחרית שבת', value: '08:30' },
  //           { title: 'תהילים לילדים', value: '10:15' },
  //           { title: 'מנחה מוקדמת', value: '13:20' },
  //           { title: 'פ"ש + מסכת בכורות', value: '16:15' },
  //           { title: 'מנחה שבת', value: '18:25' },
  //           { title: 'ערבית מוצ"ש', value: '19:30' },
  //         ],
  //         durationSec: -1,
  //         type: 'time&text'
  //       }
  //     ],
  //     leftBoard: [
  //       {
  //         title: 'korbanot.png',
  //         type: 'image',
  //         durationSec: 15,
  //       }, 
  //       // {
  //       //   title: 'keep-clean2.png',
  //       //   type: 'image',
  //       //   durationSec: 6,
  //       // }, 
  //       {
  //         title: 'תפילות חול',
  //         rows: [
  //           { title: 'שחרית מנין ראשון', value: '07:00' },
  //           { title: 'שחרית מנין שני', value: '08:10' },
  //           { title: 'מנחה וערבית', value: '18:50' },
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
  //           { title: 'הנץ החמה', value: '06:28' },
  //           { title: 'סוף ק"ש למ"א', value: '09:00' },
  //           { title: 'סוף ק"ש לגר"א', value: '09:36' },
  //           { title: 'זמן מנחה גדולה', value: '13:15' },
  //           { title: 'שקיעת החמה', value: '19:00' },
  //           { title: 'צאת הכוכבים', value: '19:19' }
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
    viewName: 'תצוגה לחג שני',
    durationSec: 129600,
    viewType: 'two-boards-view',
    viewFields: {
      title: 'חג פסח',
      rightBoard: [
        {
          title: 'חג שני',
          rows: [
            { title: 'שחרית חג', value: '08:30' },
            { title: 'תהילים לילדים', value: '10:15' },
            { title: 'מנחה מוקדמת', value: '13:20' },
            { title: 'פ"ש + מסכת בכורות', value: '16:20' },
            { title: 'מנחה חג', value: '18:30' },
            { title: 'ערבית מוצאי חג', value: '19:35' },
          ],
          durationSec: -1,
          type: 'time&text'
        }
      ],
      leftBoard: [
        {
          title: 'map.jpg',
          type: 'image',
          durationSec: 15,
        }, 
        // {
        //   title: 'keep-clean2.png',
        //   type: 'image',
        //   durationSec: 6,
        // }, 
        {
          title: 'תפילות חול',
          rows: [
            { title: 'שחרית מנין ראשון', value: '07:00' },
            { title: 'שחרית מנין שני', value: '08:10' },
            { title: 'מנחה וערבית', value: '19:00' },
            { title: '--------', value: '--------' },
            { title: 'יום שני - ספר התניא', value: '21:00' },
            { title: 'יום שלישי - מגילה', value: '21:00' }
          ],
          durationSec: 30,
          type: 'time&text'
        },
        {
          title: 'זמני השבוע',
          rows: [
            { title: 'הנץ החמה', value: '06:16' },
            { title: 'סוף ק"ש למ"א', value: '08:53' },
            { title: 'סוף ק"ש לגר"א', value: '09:29' },
            { title: 'זמן מנחה גדולה', value: '13:13' },
            { title: 'שקיעת החמה', value: '19:06' },
            { title: 'צאת הכוכבים', value: '19:26' }
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
            { title: 'שחרית מנין שני', value: '08:10' },
            { title: 'מנחה וערבית', value: '19:00' },
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
            { title: 'הנץ החמה', value: '06:16' },
            { title: 'סוף ק"ש למ"א', value: '08:53' },
            { title: 'סוף ק"ש לגר"א', value: '09:29' },
            { title: 'זמן מנחה גדולה', value: '13:13' },
            { title: 'שקיעת החמה', value: '19:06' },
            { title: 'צאת הכוכבים', value: '19:26' }
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