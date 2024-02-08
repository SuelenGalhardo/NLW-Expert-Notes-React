
import logo from "./assets/logo-nlw-expert.svg"


//export en el inicio , para tener que poner llaves en la inportacion de main
export function App() {
  
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">

    <><img src={logo} alt="logo NLW/expert" />
    <form className="w-full">
    <input className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500" type="text" placeholder="busque em suas notas" /></>
    </form>
    <div className=" h-px bg-slate-700"></div>

    <div className=" grid grid-cols-3 auto-rows-[250px]">
      <div className=" rounded-md bg-slate-780"></div>


    </div>
    </div>
    
);
}

