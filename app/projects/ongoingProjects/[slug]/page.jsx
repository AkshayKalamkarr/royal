import IFrameComponent from "@/components/IFrameComponent";
import { projects, getProjectBySlug } from "../../../../data/ongoingProjects";
import Image from "next/image";
import Link from "next/link";
import { TramFront, PlaneIcon, ComputerIcon, Building2Icon, SchoolIcon } from 'lucide-react';

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



  return (
    <div className="bg-gradient-to-b from-white-100 to-white min-h-screen">
      <div className="w-full">
        <section className='py-8 px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row items-start max-w-7xl mx-auto'>
            <div className='lg:w-1/2 lg:pr-6 text-center'>
              <h1 className='text-2xl md:text-3xl font-bold mb-4 text-black text-center lg:text-left'>
                {project.title}
              </h1>
              <p className='mb-4 text-sm md:text-base text-black lg:text-left'>
                {project.fullDescription}
              </p>
              <p className='mb-4 text-sm md:text-lg font-semibold text-cyan-700 text-center lg:text-left md:mt-8'>
                {project.tagLine}
              </p>
              <p className='mb-4 text-sm md:text-base font-semibold text-black text-center lg:text-left md:mt-8'>
                Maha Rera Registration No : {project.reraNumber || "N/A"}
              </p>
            </div>
            <div className='lg:w-1/2 mt-4 lg:mt-0'>
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className='w-full h-auto object-cover rounded-lg'
              />
            </div>
          </div>
          <div className="mt-6 flex justify-center lg:justify-start lg:ml-20 2xl:ml-72">
            <Link href={project.pdfLink} target="_blank" rel="noopener noreferrer">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base py-2 px-3 sm:px-4 rounded transition duration-300 ease-in-out flex items-center justify-center">
                Download Brochure
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-1 sm:ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </Link>
          </div>
        </section>

        {project.amenities && (
          <div className="w-full bg-gray-200">
            <section className='bg-white-100 py-12 px-4 sm:px-6 lg:px-8'>
              <div className="max-w-7xl mx-auto md:text-center">
                <h2 className="text-5xl font-bold mb-6 text-center relative inline-block md:text-center">
                  <span className="bg-gray-200 px-2 text-cyan-700 md:text-center">Amenities</span>
                </h2>

                <p className='mb-8 text-base md:text-lg text-gray-600 text-center max-w-2xl mx-auto'>
                  {project.amenitiesDescription}
                </p>
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
                  {project.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className='relative overflow-hidden rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl md:mt-8'
                      style={{ backgroundColor: '#f0f4f8' }}
                    >
                      <Image
                        src={amenity.image}
                        alt={amenity.name}
                        width={200}
                        height={200}
                        className='rounded-lg w-full h-48 object-cover transition-transform duration-500 ease-in-out hover:scale-110'
                      />
                      <div className='absolute bottom-0 left-0 right-0 p-1'>
                        <div className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 rounded-lg'>
                          <div className='bg-gray-800 p-2 rounded-b-lg'>
                            <p className='text-center text-sm sm:text-base font-semibold text-white'>
                              {amenity.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {project.galleryImages && (
          <section className='bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-cyan-700 md:my-6">
                Gallery
              </h2>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 md:mt-16'>
                {project.galleryImages.map((galleryImage, index) => (
                  <div
                    key={index}
                    className='relative overflow-hidden aspect-square'
                  >
                    <Image
                      src={galleryImage.image}
                      alt={galleryImage.name}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      className='object-cover transition duration-300 ease-in-out hover:scale-105'
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Configuration Section */}
        <section className='bg-gray-200 py-12 px-4 sm:px-6 lg:px-8'>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-cyan-700">
              Configuration
            </h2>

            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse bg-white shadow-md rounded-lg">
                <thead>
                  <tr className="bg-navy-700 text-black md:text-center">
                    <th className="py-3 px-4 text-left  md:text-center">Configuration</th>
                    <th className="py-3 px-4 text-left  md:text-center">SBA / Carpet (sq.ft.)</th>
                    <th className="py-3 px-4 text-left  md:text-center">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-4  md:text-center">1 BHK</td>
                    <td className="py-3 px-4  md:text-center">421 SQ FT</td>
                    <td className="py-3 px-4  md:text-center">
                      <Link href="/contact" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                        Get Quote
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-4  md:text-center">2 BHK</td>
                    <td className="py-3 px-4  md:text-center">535 SQ FT</td>
                    <td className="py-3 px-4  md:text-center">
                      <Link href="/contact" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                        Get Quote
                      </Link>
                    </td>
                  </tr>
                  {/* Add more rows here as needed */}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Floor Plans Section */}
        <section className='bg-white py-12 px-4 sm:px-6 lg:px-8'>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-cyan-700">
              Floor Plans
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.floorplans.map((plan, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden md:mt-8">
                  <div className="relative w-full h-64">
                    <Image
                      src={plan.src}
                      alt={plan.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      className="rounded-t-lg"
                    />
                  </div>
                  <p className="text-center font-semibold py-4">{plan.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="bg-gray-200 text-black py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-cyan-700">
            Location and Connectivity
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Left Column */}
            <div className="space-y-16 md:mt-20">
              <div className="flex items-start space-x-4">
                <TramFront className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">Railway Station</h4>
                  <p className="text-sm">Determine the home's value in the current market for a listing price.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <PlaneIcon className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">Navi Mumbai International Airport</h4>
                  <p className="text-sm">Determine the home's value in the current market for a listing price.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <ComputerIcon className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">IT Park</h4>
                  <p className="text-sm">Determine the home's value in the current market for a listing price.</p>
                </div>
              </div>
            </div>

            {/* Middle Column (Google Map) */}
            <div className="w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden md:mt-10">
              <IFrameComponent iframeSrc={project.map.iframeSrc} />
            </div>

            {/* Right Column */}
            <div className="space-y-16 md:mt-20">
              <div className="flex items-start space-x-4">
                <TramFront className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">Metro Station</h4>
                  <p className="text-sm">Determine the home's value in the current market for a listing price.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Building2Icon className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">Malls</h4>
                  <p className="text-sm">Determine the home's value in the current market for a listing price.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <SchoolIcon className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">Schools and Colleges</h4>
                  <p className="text-sm">Determine the home's value in the current market for a listing price.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}