import { Button } from "@/components/ui/button";
import { AppCarousel } from "./AppCarousel";

interface Feature {
  image?: string;
  title?: string;
  description?: string;
}
interface Project {
  name : string;
  description : string;
  link : string;
  image? : string;
  date : string;
}

interface Timeline3Props {
  heading?: string;
  description?: string;
  buttons?: {
    primary: {
      text?: string;
      url?: string;
    };
    secondary: {
      text?: string;
      url?: string;
    };
  };
  features?: Feature[];
  data?: Project[]; 
}

const AppTimeline3 = ({
  data,
  
  features = [
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
      title: "Dedicated Support",
      description:
        "Expanded operations to 5 new countries, reaching millions of new users.",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
      title: "Series B Funding",
      description:
        "Secured $50M in Series B funding to accelerate product development.",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
      title: "Product Launch",
      description: "Successfully launched our flagship product to market.",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
      title: "Company Founded",
      description: "Started with a vision to revolutionize the industry.",
    },
  ],
}: Timeline3Props) => {
  const content = {
    heading : "Experience the difference with us",
  description : "We believe in creating lasting partnerships with our clients, focusing on long-term success through collaborative innovation and dedicated support.",
  buttons : {
    primary: {
      text: "Start Now",
      url: "#",
    },
    secondary: {
      text: "Book a demo",
      url: "#",
    },
  },
  }
  return (
    <section className="">
      <div className="">
        <div className="relative grid gap-16 lg:grid-cols-3">
          <div className="top-40 h-fit lg:sticky lg:col-span-1">
            <h2 className="mt-4 mb-6 text-4xl font-semibold lg:text-5xl">
              {content.heading}
            </h2>
            <p className="font-medium text-muted-foreground lg:text-xl">
              {content.description}
            </p>
            <div className="mt-8 flex flex-col gap-4 lg:flex-row">
              <Button className="gap-2" size="lg" asChild>
                <a href={content.buttons.primary.url}>{content.buttons.primary.text}</a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href={content.buttons.secondary.url}>{content.buttons.secondary.text}</a>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-12 lg:gap-20 lg:col-span-2">
            {data && data.map((project, index) => (
              <div key={index} className="rounded-xl border p-2">
                {/* <img
                  src={feature.image}
                  alt={feature.title}
                  className="aspect-video w-full rounded-xl border border-dashed object-cover"
                /> */}
                <AppCarousel items={[project?.image,]}/>
                <div className="p-6">
                  <h3 className="mb-1 text-2xl font-semibold">
                    {project?.name}
                  </h3>
                  <p className="text-muted-foreground">{project?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppTimeline3;
