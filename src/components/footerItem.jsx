const FooterItem = ({Links,title}) => {
  return (
    <ul>
        <h1 className='mb-1 font-normal'>{title}</h1>
        {
            Links.map((link) => (
                <li key={link.name}>
                    <a className='text-gray-400 hover:text-[#57B8FF] duration-300
                    text-sm cursor-pointer leading-6' href={link.link}>{link.name}</a>
                </li>
            ))
        }
    </ul>
  )
}

export default FooterItem