
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
export function AppCarousel({items}: {items?: any}) {
  return (
    // <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    <div className="w-full px-8 py-4">
      {items && items.length > 1 ?
      <Carousel className="aspect-video w-full ">
        <CarouselContent>
          {
            items.map(({src, index}:{src:string; index:number}) => (
              <CarouselItem key={index}><img src={src} alt="" className="w-full h-full object-cover rounded-lg"/></CarouselItem>
            ))
          }
        </CarouselContent>
        <div className="flex w-full justify-between mt-4">
            <CarouselPrevious className=""/>
          <CarouselNext className=""/>
        </div>
      </Carousel>
      :
      
      <div className="aspect-video w-full">
        {items && 
          <Image src={items[0]} alt="" className="h-full w-full object-cover rounded-lg"/>
        }
      </div>
      }
    </div>
  );
}
