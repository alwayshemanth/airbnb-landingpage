"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CategoryType } from "@/lib/utils";
import { categories } from "@/memory";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";



export default function Services() {
  const [category , setCategory] = useState("icons")
  const [items, setItems] = useState([])

  function categoryHandler(value : string) {
    // console.log(value)
    setCategory(value)
  }
  

  return (
    <div>

    
    <Carousel>
      <CarouselContent>


        {categories.map(function(eachItem : CategoryType) {
          return (
            <CarouselItem key={eachItem.id} className="basis-1/7">
             
              <Button onClick = {function () {
                categoryHandler(eachItem.value)
              }} className="bg-transparent text-gray-500 hover:text-white hover:bg-transparent hover:underline"> {eachItem.label} </Button>
              
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>



    </div>
  );
}
