
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

interface AppCarouselProps {
  items?: string[]
}

export function AppCarousel({items}:AppCarouselProps) {
  return (
    // <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    <div className="w-full px-8 py-4">
      {items && items.length > 1 ?
      <Carousel className="aspect-video w-full relative">
        <CarouselContent>
          {
            items.map((src, index) => (
              <CarouselItem key={index}>
                <Image src={src} alt="" className="w-full h-full object-cover rounded-lg" fill/>
                </CarouselItem>
            ))
          }
        </CarouselContent>
        <div className="flex w-full justify-between mt-4">
            <CarouselPrevious className=""/>
          <CarouselNext className=""/>
        </div>
      </Carousel>
      :
      
      <div className="aspect-video w-full relative">
        {items && 
          <Image src={"https://zyhcnekabfmxmvkxelao.supabase.co/storage/v1/object/public/documents/projects/trotm3aak.png"} alt="" className="h-full w-full object-cover rounded-lg" fill/>
        }
      </div>
      }
    </div>
  );
}
