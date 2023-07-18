import { NextRequest,NextResponse } from "next/server";
import DishForm from "./adddishform";
import { Speiskoatn } from "./speiskoatn";

export default async function Menu() {
  
  return (
    <div>
      <div > 
        <h1 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
          Was wird wohl auf mein Tellerchen gerotzt? 
        </h1>
        <br></br>
        <Speiskoatn/><br/>
        <DishForm/>
        <br/>
      </div>
    </div>
  );
}