export interface searchIMDBRootObj {
    data:      Datum[];
    message:   string;
    status:    boolean;
    timestamp: number;
   }
   
   export interface Datum {
    id:     string;
    image?: string;
    q:      string;
    qid:    string;
    stars:  string;
    title:  string;
    year?:  number;
   }
   