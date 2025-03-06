import React from "react";

interface Props{
    id:number;
    image:string;
    name:string;
    types:string[];
}





export const  Card: React.FC<Props> = (props) =>{
    
    
    return <div className="flex-1 w-2xs p-8">
                        {props.name}
                        <img src={props.image} />
                    </div>
            }
