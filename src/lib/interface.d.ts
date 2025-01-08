export interface LinkType {
    _uid?:string;
    title?:string;
    link:{ 
        cached_url: string;
    }
   
  }
  
 export interface SomeLink {
    _uid:string;
   some:string;
   link: {
    cached_url:string;
   }
  }