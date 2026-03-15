import React from 'react'

const ProjectsCards = ({ title, description, image, tech }) => {
    return (
        // <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer'>
        //     <img src={image} alt={title} className='w-full h-60 object-cover' />
        //     <div className='p-6'>
        //         <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        //         <p className='text-gray-300 mb-2'>{description}</p>
        //         <div className='flex flex-wrap gap-2' >
        //             {
        //                 tech.map((item, index) => (
        //                     <span key={index} className='px-3 py-1 bg-dark-400 rounded-full'>
        //                         {item}
        //                     </span>
        //                 ))
        //             }
        //         </div>
        //         <div className='flex gap-2 mt-auto '>
        //             <a href="#" className='flex-1 mt-auto text-center px-4 py-2 bg-yellow-300 rounded-lg font-medium hover:bg-yellow-400 transition duration-300'>View Demo</a>
        //             <a href="#" className='flex-1 text-center px-4 py-2 border border-yellow-300 rounded-lg font-medium hover:bg-yellow-300 transition duration-300'>Code</a>
        //         </div>
        //     </div>
        // </div>
        //            

        <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer flex flex-col h-full'>

            <img src={image} alt={title} className='w-full h-60 object-cover' />

            <div className='p-6 flex flex-col flex-grow'>
                <h3 className='text-xl font-semibold mb-2'>{title}</h3>

                <p className='text-gray-300 mb-2'>{description}</p>

                <div className='flex flex-wrap gap-2 mb-4'>
                    {
                        tech.map((item, index) => (
                            <span key={index} className='px-3 py-1 bg-dark-400 rounded-full'>
                                {item}
                            </span>
                        ))
                    }
                </div>

                <div className='flex gap-2 mt-auto'>
                    <a href="#" className='flex-1 text-center px-4 py-2 bg-yellow-300 rounded-lg font-medium hover:bg-yellow-400 transition duration-300'>View Demo</a>

                    <a href="#" className='flex-1 text-center px-4 py-2 border border-yellow-300 rounded-lg font-medium hover:bg-yellow-300 transition duration-300'>Code</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectsCards