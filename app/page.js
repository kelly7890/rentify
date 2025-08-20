      "use client"
import { useEffect, useState } from "react";

export default function LoginPage() {
  const [count,setCount] = useState(0);

  useEffect(()=>{
    const handleFetch = async ()=>{
      const response = await fetch("")
      
    }
  })
  return (
      <main className="flex flex-col gap-3 justifycenter items-center py-10">
        <p>Count: </p>
        <button onClick={()=>{s
          count(count + 1)}} className="w-[100px] h-[70px] rounded bg-blue-500 text-white">increment</button>
      </main>

  );
}
