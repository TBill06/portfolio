import {FiLinkedin, FiGithub, FiTwitter} from 'react-icons/fi'
const Connect = () => {
    return(
        <>
        <h3 className="text-3xl text-[#CCD6F6] py-5">Let's Connect</h3>
        <p className="text-xl text-[#CCD6F6] p-2">I'm looking for internship opportunities this Summer 2023. Here are my socials: </p>
        <ul className='text-[#58DFC3] text-4xl flex justify-center gap-10 sm:mx-auto'>
            <FiGithub />
            <FiLinkedin />
            <FiTwitter />
        </ul>
        </>
    )
}
export default Connect