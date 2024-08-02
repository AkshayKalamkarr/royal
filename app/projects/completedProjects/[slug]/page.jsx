import IFrameComponent from "@/components/IFrameComponent";
import Calculator from "../../../../components/Calculator";
import { projects, getProjectBySlug } from "../../../../data/completedProjects";
import Image from "next/image";
import { motion } from "framer-motion";
import { titleVariants } from "../../../utils/animation";
import Link from "next/link";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  console.log(project.map);

  return (
    <div className='bg-gray-100'>
      <div className='container mx-auto px-4 py-8'>
        <div className="bg-[url('/images/projects/projectBackground.jpeg')] bg-center bg-cover">
          <motion.h1
            initial='offscreen'
            whileInView={"onscreen"}
            variants={titleVariants}
            className='container py-32 text-6xl font-semibold text-white tracking-widest text-center lg:py-32'
          >
            Completed Projects
          </motion.h1>
        </div>
        <section className='mb-12'>
          <div className='flex flex-col lg:flex-row items-start bg-white bg-opacity-50 backdrop-blur-md rounded-lg shadow-md overflow-hidden'>
            <div className='lg:w-1/3 p-6'>
              <h1 className='text-2xl md:text-3xl font-bold mb-4 text-black'>
                {project.title}
              </h1>
              <p className='mb-4 text-sm md:text-base text-black'>
                {project.fullDescription}
              </p>
              <p className='mb-4 text-sm md:text-base font-semibold text-black'>
                Maha Rera Registration No : {project.reraNumber || "N/A"}
              </p>
            </div>
            <div className='lg:w-2/3'>
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className='w-full h-auto object-cover'
              />
            </div>
          </div>
          <Link href={project.pdfLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base py-2 px-3 sm:px-4 rounded transition duration-300 ease-in-out flex items-center justify-center w-full sm:w-auto mt-4">
              View Brochure
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-1 sm:ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            </button>
          </Link>
        </section>

        {project.amenities && (
          <section className='mb-12 bg-white rounded-lg shadow-md p-6'>
            <h2 className='text-xl md:text-2xl font-bold mb-4'>Amenities</h2>
            <p className='mb-4 text-sm md:text-base'>
              {project.amenitiesDescription}
            </p>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4'>
              {project.amenities.map((amenity, index) => (
                <div key={index} className='relative'>
                  <Image
                    src={amenity.image}
                    alt={amenity.name}
                    width={200}
                    height={200}
                    className='rounded-lg w-full h-auto'
                  />
                  <div className='absolute bottom-0 left-0 right-0 bg-blue-500 bg-opacity-75 text-white p-2 rounded-b-lg'>
                    <p className='text-center text-xs sm:text-sm'>
                      {amenity.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {project.connectivity && (
            <section className='mb-12 bg-white rounded-lg shadow-md p-6'>
              <h2 className='text-xl md:text-2xl font-bold mb-4'>
                Connected To Everything
              </h2>
              <ul className='list-disc pl-5 mb-4 text-sm md:text-base'>
                {project.connectivity.map((item, index) => (
                  <li key={index} className='mb-2'>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}
          {project.map && (
            <section className='mb-12 bg-white rounded-lg shadow-md p-6'>
              <h2 className='text-xl md:text-2xl font-bold mb-4'>Project Location</h2>
              <div className='w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden'>
                <IFrameComponent iframeSrc={project.map.iframeSrc} />
              </div>
            </section>
          )}
        </div>

        <section className='bg-white rounded-lg shadow-md p-6'>
          <Calculator />
        </section>
      </div>
    </div>
  );
}
