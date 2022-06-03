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
    durationSec: 118800,
    viewType: 'two-boards-view',
    viewFields: {
       title: 'פרשת נשוא',
      rightBoard: [
        {
          title: 'תפילות שבת',
          rows: [
            { title: 'שחרית שבת', value: '08:30' },
            { title: 'מנחה מוקדמת', value: '13:10' },
            { title: 'מנחה', value: '17:15' },
            { title: 'הרב מיכה הלוי', value: '17:45' },  
            { title: 'ערבית שבועות', value: '19:55' },
            { title: 'תיקון ליל שבועות', value: '23:00' },
          ],
          durationSec: -1,
          type: 'time&text'
        }
      ],
      leftBoard: [
        {
          title: 'שיעורים בשבת',
          rows: [         
            { title: 'ש.ת. הרב מיכה הלוי', value: '17:45' },   
            { title: 'שיעור בפרשת שבוע', value: '18:35' },
            { title: 'לימוד מסכת סוכה', value: '18:55' },
          ],
          durationSec: 20,
          type: 'time&text'
        },
        {
          title: 'תפילות שבועות',
          rows: [
            { title: 'שחרית מנין ראשון', value: '05:20' },
            { title: 'שחרית מנין שני', value: '08:30' },
            { title: 'שיעור בענייני החג', value: '17:30' },
            { title: 'שיעור מסכת סוכה', value: '18:30' },
            { title: 'מנחה', value: '19:30' },
            { title: 'ערבית מוצאי חג', value: '20:15' },
          ],
          durationSec: 20,
          type: 'time&text'
        },
        {
          title: 'זמני השבוע',
          rows: [
            { title: 'הנץ החמה', value: '05:41' },
            { title: 'סוף ק"ש למ"א', value: '08:24' },
            { title: 'סוף ק"ש לגר"א', value: '09:07' },
            { title: 'זמן מנחה גדולה', value: '13:09' },
            { title: 'שקיעת החמה', value: '19:44' },
          ],
          durationSec: 10,
          type: 'time&text'
        },
       
      ],
      footer: 'בית הכנסת רשב"י',
      showClock: true,
    },

  },
  {
    viewName: 'תצוגה לחג שבועות',
    durationSec: 129600,
    viewType: 'two-boards-view',
    viewFields: {
       title: 'חג שבועות',
      rightBoard: [
        {
          title: 'תפילות החג',
          rows: [
            { title: 'שחרית מנין ראשון', value: '05:20' },
            { title: 'שחרית מנין שני', value: '08:30' },
            { title: 'שיעור בענייני החג', value: '17:30' },
            { title: 'שיעור מסכת סוכה', value: '18:30' },
            { title: 'מנחה', value: '19:30' },
            { title: 'ערבית מוצאי חג', value: '20:15' },
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
            { title: 'מנחה וערבית', value: '19:35' },
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
            { title: 'הנץ החמה', value: '05:41' },
            { title: 'סוף ק"ש למ"א', value: '08:24' },
            { title: 'סוף ק"ש לגר"א', value: '09:07' },
            { title: 'זמן מנחה גדולה', value: '13:09' },
            { title: 'שקיעת החמה', value: '19:44' },
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
  /*{
    viewName: 'תצוגה לשבת',
    durationSec: 129600,
    viewType: 'two-boards-view',
    viewFields: {
       title: 'פרשת במדבר',
      rightBoard: [
        {
          title: 'תפילות שבת',
          rows: [
            { title: 'מנחה ערב שבת', value: '19:25' },
            { title: 'שחרית שבת', value: '08:30' },
            { title: 'מנחה שבת', value: '18:50' },
            { title: 'פרקי אבות', value: '19:05' },
            { title: 'ערבית מוצ"ש', value: '20:15' },
          ],
          durationSec: -1,
          type: 'time&text'
        }
      ],
      leftBoard: [
        {
          title: 'שיעורים בשבת',
          rows: [            
            { title: 'שיעור בפרקי אבות', value: '16:40' },
            { title: 'שיעור בפרשת שבוע', value: '17:10' },
            { title: 'לימוד מסכת סוכה', value: '17:40' },
          ],
          durationSec: 20,
          type: 'time&text'
        },
        {
          title: 'תפילות חול',
          rows: [
            { title: 'שחרית מנין ראשון', value: '07:00' },
            { title: 'שחרית מנין שני', value: '08:30' },
            { title: 'מנחה וערבית', value: '19:30' },
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
            { title: 'הנץ החמה', value: '05:43' },
            { title: 'סוף ק"ש למ"א', value: '08:24' },
            { title: 'סוף ק"ש לגר"א', value: '09:07' },
            { title: 'זמן מנחה גדולה', value: '13:08' },
            { title: 'שקיעת החמה', value: '19:40' },
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
  */
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
            { title: 'מנחה וערבית', value: '19:35' },
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
            { title: 'הנץ החמה', value: '05:41' },
            { title: 'סוף ק"ש למ"א', value: '08:24' },
            { title: 'סוף ק"ש לגר"א', value: '09:07' },
            { title: 'זמן מנחה גדולה', value: '13:09' },
            { title: 'שקיעת החמה', value: '19:44' },
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
    },
  },
]