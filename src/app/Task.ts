export interface Task{
    id?:number,
    text: string,
    day:string,
    reminder:boolean
}

export interface TasksResponse{
   data:{ id:number,
    attributes:{
        text: string,
        day:string,
        reminder:boolean
    }}[]
}
export interface DeleteTasksResponse{
   data:{ id:number,
    attributes:{
        text: string,
        day:string,
        reminder:boolean
    }}
    
 
}
export interface UpdateTasksResponse{
    data:{text: string,
        day:string,
         reminder:boolean
     }}

export interface UpdateTasksReminderPayload{
        data:{
            id?:number,
            text: string,
            day:string,
             reminder:boolean
         }}
export interface PostTaskPayload{
            data:{
                text:string,
                day:string,
                 reminder:boolean
             }}
