
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
export function AppCarousel({items}: {items?: any[]}) {
  return (
    // <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    <div className="w-full px-8 py-4">
      {items && items.length > 1 ?
      <Carousel className="aspect-video w-full ">
        <CarouselContent>
          {
            items.map((src, index) => (
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
      
      <div className="border aspect-video w-full">
        {items && 
          <img src={items[0]} alt="" className="h-full w-full object-cover"/>
        }
      </div>
      }
    </div>
  );
}
