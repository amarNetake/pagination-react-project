import React from 'react'
import { NavLink } from 'react-router-dom';

interface Props{
     currentPage: number;
     upperBound: number;
     lowerBound: number;
}

function PageNumberIcon(props: Props) {
  const { upperBound, lowerBound, currentPage } = props;
  return (
     <>
     {
          [...Array(upperBound-lowerBound + 1)].map((_, index)=>{
               return <NavLink to={`/${index+lowerBound}`}><span className={`flex items-center justify-center rounded-full w-12 h-12 ${currentPage==index+lowerBound?"bg-red-100":"bg-zinc-100"}`}>{index+lowerBound}</span></NavLink>
          })
     }
     </>
  )
}

export default PageNumberIcon;