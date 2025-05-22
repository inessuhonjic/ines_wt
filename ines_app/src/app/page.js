'use client'
import styles from "./page.module.css";
import React, { useEffect, useState } from 'react';
import NavBar from "./components/NavBar";
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import { getFact }  from "../https";

export default function Home() {

 const [facts, setFacts] = useState("");

    useEffect(() => {
    getFact()
      .then((data) => {
        console.log(data)
        setFacts(data.text); // Spara allafakta
        
      });
      
  }, []);

   
  return (
    
    <div>
      <NavBar/>
      <Hero />
      <p>{facts}</p>
      <Footer />
    </div>
  );
}
