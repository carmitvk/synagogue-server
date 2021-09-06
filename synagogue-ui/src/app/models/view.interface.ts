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
    viewName: 'תצוגה לראש השנה א',
    // durationSec: 129600,
    durationSec: 10,
    viewType: 'two-boards-view',
    viewFields: {
      title: 'זמני התפילות',
      rightTitle: 'ראש השנה תשפ"ב',
      rightBoard: [
        {
          title: "א' דראש השנה",
          rows: [
            { title: 'מנחה ערב חג', value: '18:45' },
            { title: 'שחרית ', value: '08:00' },
            { title: 'תקיעת שופר לנשים ', value: '11:30' },
            { title: 'מנחה ותשליך', value: '18:30' },
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
          title: 'shana-tova2.jpg',
          type: 'image',
          durationSec: 6,
        },
        {
          title: "ב' דראש השנה",
          rows: [
            { title: 'ערבית', value: '19:15' },
            { title: 'שחרית', value: '08:00' },
            { title: 'תקיעת שופר לנשים ', value: '11:30' },
            { title: 'מנחה', value: '18:45' },
            { title: 'ערבית מוצאי החג', value: '19:20' },
          ],
          durationSec: 30,
          type: 'time&text'
        },
        {
          title: 'זמני השבוע',
          rows: [
            { title: 'הנץ החמה', value: '06:26' },
            { title: 'סוף ק"ש למ"א', value: '08:52' },
            { title: 'סוף ק"ש לגר"א', value: '09:29' },
            { title: 'זמן מנחה גדולה', value: '13:10' },
            { title: 'שקיעת החמה', value: '18:57' },
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
    viewName: 'תצוגה לראש השנה ב',
    durationSec: 10,
    // durationSec: 86400,
    viewType: 'two-boards-view',
    viewFields: {
      title: 'זמני התפילות',
      rightTitle: 'ראש השנה תשפ"ב',
      rightBoard: [
        {
          title: "ב' דראש השנה",
          rows: [
            { title: 'שחרית', value: '08:00' },
            { title: 'תקיעת שופר לנשים ', value: '11:30' },
            { title: 'מנחה', value: '18:45' },
            { title: 'ערבית מוצאי החג', value: '19:20' },
          ],
          durationSec: 30,
          type: 'time&text'
        },
      ],
      leftBoard: [
        {
          title: 'shana-tova2.jpg',
          type: 'image',
          durationSec: 6,
        },
        {
          title: 'mask-put.png',
          type: 'image',
          durationSec: 6,
        },
        {
          title: "צום גדליה",
          rows: [
            { title: 'סליחות', value: '06:20' },
            { title: 'שחרית', value: '07:00' },
            { title: 'סליחות', value: '18:20' },
            { title: 'מנחה וערבית', value: '18:40' },
            { title: 'צאת הצום', value: '19:15' },
          ],
          durationSec: 30,
          type: 'time&text'
        },
        {
          title: 'זמני השבוע',
          rows: [
            { title: 'הנץ החמה', value: '06:26' },
            { title: 'סוף ק"ש למ"א', value: '08:52' },
            { title: 'סוף ק"ש לגר"א', value: '09:29' },
            { title: 'זמן מנחה גדולה', value: '13:10' },
            { title: 'שקיעת החמה', value: '18:57' },
          ],
          durationSec: 15,
          type: 'time&text'
        }
      ],
      footer: 'בית הכנסת רשב"י',
      showClock: true,
    },
    
  },
  {
    viewName: 'תצוגה לצום גדליה',
    durationSec: -1,
    viewType: 'two-boards-view',
    viewFields: {
      title: 'זמני התפילות',
      rightBoard: [
        {
          title: "צום גדליה",
          rows: [
            { title: 'סליחות', value: '06:20' },
            { title: 'שחרית', value: '07:00' },
            { title: 'סליחות', value: '18:20' },
            { title: 'מנחה וערבית', value: '18:40' },
            { title: 'צאת הצום', value: '19:15' },
          ],
          durationSec: 30,
          type: 'time&text'
        },
      ],
      leftBoard: [
        {
          title: 'keep-clean2.png',
          type: 'image',
          durationSec: 6,
        },
        {
          title: 'mask-put.png',
          type: 'image',
          durationSec: 6,
        },
        {
          title: 'זמני השבוע',
          rows: [
            { title: 'הנץ החמה', value: '06:26' },
            { title: 'סוף ק"ש למ"א', value: '08:52' },
            { title: 'סוף ק"ש לגר"א', value: '09:29' },
            { title: 'זמן מנחה גדולה', value: '13:10' },
            { title: 'שקיעת החמה', value: '18:57' },
          ],
          durationSec: 15,
          type: 'time&text'
        }
      ],
      footer: 'בית הכנסת רשב"י',
      showClock: true,
    },
  },
  // {
  //   viewName: 'תצוגה לשבת',
  //   durationSec: 129600,
  //   viewType: 'two-boards-view',
  //   viewFields: {
  //     title: 'זמני התפילות',
  //     rightTitle: 'פרשת ניצבים',
  //     rightBoard: [
  //       {
  //         title: 'תפילות שבת',
  //         rows: [
  //           { title: 'מנחה ערב שבת', value: '18:50' },
  //           { title: 'שחרית שבת', value: '08:30' },
  //           { title: 'שיעור מסכת תענית', value: '17:00' },
  //           { title: 'מנחה שבת', value: '18:25' },
  //           { title: 'ערבית מוצ"ש', value: '19:35' },
  //         ],
  //         durationSec: -1,
  //         type: 'time&text'
  //       }
  //     ],
  //     leftBoard: [
  //       {
  //         title: 'keep-clean2.png',
  //         type: 'image',
  //         durationSec: 6,
  //       },
  //       {
  //         title: 'mask-put.png',
  //         type: 'image',
  //         durationSec: 6,
  //       },
  //       {
  //         title: 'תפילות חול',
  //         rows: [
  //           { title: 'סליחות', value: '06:20' },
  //           { title: 'שחרית', value: '07:00' },
  //           { title: 'סליחות', value: '18:20' },
  //           { title: 'מנחה וערבית', value: '18:50' },
  //           { title: '--------', value: '--------' },
  //           // { title: 'יום שני - ספר התניא', value: '21:00' },
  //           // { title: 'יום שלישי - ברכות', value: '21:00' },
  //         ],
  //         durationSec: 30,
  //         type: 'time&text'
  //       },
  //       {
  //         title: 'זמני השבוע',
  //         rows: [
  //           { title: 'הנץ החמה', value: '06:25' },
  //           { title: 'סוף ק"ש למ"א', value: '08:52' },
  //           { title: 'סוף ק"ש לגר"א', value: '09:29' },
  //           { title: 'זמן מנחה גדולה', value: '13:10' },
  //           { title: 'שקיעת החמה', value: '19:00' },
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
  //     showClock: true,
  //   },
    
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
  //           { title: 'סליחות', value: '06:20' },
  //           { title: 'שחרית', value: '07:00' },
  //           { title: 'סליחות', value: '18:20' },
  //           { title: 'מנחה וערבית', value: '18:45' },
  //           { title: '--------', value: '--------' },
  //           // { title: 'יום שני - ספר התניא', value: '21:00' },
  //           // { title: 'יום שלישי - ברכות', value: '21:00' },
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
  //           { title: 'הנץ החמה', value: '06:25' },
  //           { title: 'סוף ק"ש למ"א', value: '08:52' },
  //           { title: 'סוף ק"ש לגר"א', value: '09:29' },
  //           { title: 'זמן מנחה גדולה', value: '13:10' },
  //           { title: 'שקיעת החמה', value: '19:00' },
  //         ],
  //         durationSec: 30,
  //         type: 'time&text'
  //       },
  //       {

  //         title: 'mask-put.png',
  //         type: 'image',
  //         durationSec: 6,
  //       },
  //       {
  //         title: 'keep-clean2.png',
  //         type: 'image',
  //         durationSec: 6,
  //       },
  //     ],
  //     footer: 'בית הכנסת רשב"י',
  //     showClock: true,
  //   },
  // },
]


