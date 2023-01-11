import {FiLinkedin, FiGithub, FiTwitter} from 'react-icons/fi'
const Connect = () => {
    return(
        <div className='pb-7'>
        <h3 className="text-4xl text-[#CCD6F6] py-4">Let's Connect!</h3>
        <p className="text-xl text-white py-3 text-center">I'm looking for internship opportunities this Summer 2023. Here are my socials: </p>
        <ul className='text-[#CCD6F6] pt-4 text-4xl flex justify-center gap-10 sm:mx-auto'>
            <FiGithub className='hover:text-[#58DFC3]' />
            <FiLinkedin className='hover:text-[#58DFC3]' />
            <FiTwitter className='hover:text-[#58DFC3]'/>
        </ul>
        <div className='flex justify-center pt-7'>
        <button className="text-[#58DFC3] border border-[#58DFC3] hover:text-white hover:bg-[#153140] px-7 py-2 rounded outline-none ease-linear transition-all duration-150 text-center" >Say Hello!</button>
        </div>
        </div>
    )
}
export default Connect