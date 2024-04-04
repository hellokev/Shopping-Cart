"use client";
import React from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import NavBar from "../components/NavBar";
import FetchData from "../FetchData";
import { useState, useContext } from 'react';
import ShoppingCart from "../components/ShoppingCart";

export default function Shop() {

    interface Product {
      id: number;
      title: string;
      description: string;
      price: number;
      image: string;
    }
    const [productData, setProductData] = useState<Product[] | null>(null);
    let count = 0;
    // const handleAddItem = () => {
    //   setItemCount(itemCount + 1);
    // }
    
    return (
      <>
        <FetchData onDataReceived={setProductData}>
          {null}
        </FetchData>
        <NavBar />
        <div className="rounded-[22px] max-w-sm pt-20">
          {
            productData && (
              <ul>
                  {productData.map((product: Product) => (
                    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900" key={count}>
                      <li key={product.id}>
                        <Image
                          src={product.image} 
                          alt={product.title}
                          width="400"
                          height="400"
                          className="object-contain"
                        />
                        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{product.title}</p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">{product.description}</p>
                        <div className="flex items-center space-x-2">
                          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                            <span>Buy now </span>
                            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                            ${product.price}
                            </span>
                          </button>
                          <button 
                            className="rounded-full pl-4 pr-4 py-1 text-white flex items-center 
                                      justify-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800"
                            >
                            <span>Add to Cart</span>
                          </button>
                        </div>
                      </li>
                      
                    </BackgroundGradient>
                  ))}
              </ul>
            )
          }
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <Image
              src='/og-package-react'
              alt="jordans"
              height="400"
              width="400"
              className="object-contain"
            />
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              Air Jordan 4 Retro Reimagined
            </p>
     
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
              February 17, 2024. Your best opportunity to get these right now is by
              entering raffles and waiting for the official releases.
            </p>
            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <span>Buy now </span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                $100
              </span>
            </button>
          </BackgroundGradient>
        </div>
      </>
      );
}