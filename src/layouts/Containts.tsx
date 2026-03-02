import React from "react";

function Containts({ children }: { children: React.ReactNode }) {
  return (


    <section className="container mx-auto mt-30">
     {children}
    </section>
  );
}


export default Containts;
