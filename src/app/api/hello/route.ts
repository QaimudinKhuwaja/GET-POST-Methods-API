// import { NextRequest, NextResponse } from "next/server";
// const handleData=
//     [
//         {
//             message:"I am Faraz Khuwaja"
//         }
//     ]



// export function GET(){
//     return NextResponse.json(handleData)
// }

// export async function POST(req:NextRequest){
//     const body=await req.json()
//     handleData.push(body)
//     console.log("data is runded",body)
//     return NextResponse.json(body)
// }





import { NextRequest, NextResponse } from "next/server";

const dataList =[
    {
        message:"I am Faraz Ahmed kHuwaja"
    }
]

export function GET(){
    return NextResponse.json(dataList)
}



export async function POST(req:NextRequest){
    const body = await req.json()
    dataList.push(body)
    console.log("data is played",body)
    return NextResponse.json(body)
}