import React from 'react'

export const Module = ({modelheading}) => {
  return (
    <div className="flex w-screen h-screen">
        <div className="flex flex-col w-[50%] bg-yellow-200">
            <div className="flex w-screen mt-[20%] text-[20px] font-bold">
                <div>Module {1}:</div>
                <div>{modelheading}</div>
            </div>
            <div className="flex text-[20px] font-bold text-wrap">
                <div>firstheading :</div>
                <div>ajfdlkjdslkfjslkdfjlk sjfklsjfklsjfkljfkljklfjkjfkjsfkljdlf jjsdkjflksdjfkl</div>
            </div>
            <div className="flex text-[20px] font-bold text-wrap">
                <div>secondheading :</div>
                <div>ajfdlkjdslkfjslkdfjlk sjfklsjfklsjfkljfkljklfjkjfkjsfkljdlf jjsdkjflksdjfkl</div>
            </div>
            <div className="flex text-[20px] font-bold text-wrap">
                <div>thirdheading :</div>
                <div>ajfdlkjdslkfjslkdfjlk sjfklsjfklsjfkljfkljklfjkjfkjsfkljdlf jjsdkjflksdjfkl</div>
            </div>
        </div>
        <div className="flex w-[50%] bg-red-400"></div>
    </div>
  )
}
