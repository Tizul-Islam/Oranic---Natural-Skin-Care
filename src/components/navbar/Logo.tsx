import Link from "next/link"


function Logo() {
  return (
   <Link href="/" className="text-gray-300 font-serif text-xl md:text-2xl lg:text-3xl font-bold p-2">
    <span className="text-primary">ORANIC</span>
   </Link>
  )
}

export default Logo