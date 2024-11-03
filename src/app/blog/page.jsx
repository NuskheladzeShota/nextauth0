import BlogPost from "../components/BlogPost/BlogPost.js";
import * as Mushrooms from "../components/data/Mushrooms.js";
const MushroomsList = [
  Mushrooms.AmanitaMuscaria,
  Mushrooms.AmanitaPanterina,
  Mushrooms.Cordyceps,
  Mushrooms.LionsMane,
  Mushrooms.Maitake,
];

export default function Blog() {
  return (
    <div className="bg-neutral-100 dark:bg-neutral-900 min-h-screen">
  
      <div className="container mx-auto p-5">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-5">
          Mushroom Blog
        </h1>
        <div className="gap-6">
          {MushroomsList.map((mushroom) => (
            <BlogPost
              key={mushroom.name}  
              image={mushroom.img}
              name={mushroom.name}
              description={mushroom.posts}
              heading={mushroom.Heading}
              className="transition-transform hover:scale-105"
            />
          ))}
        </div>
      </div>

    </div>
  );
}
