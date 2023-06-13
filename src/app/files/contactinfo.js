import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillPhone,
  AiOutlineLinkedin,
  AiOutlinePhone
} from 'react-icons/ai'
import { FaGithubAlt } from 'react-icons/fa'
import { MdOutlineMailOutline, MdEmail } from 'react-icons/md'

export const contactinfo = [
  { id: 'name', label: 'Name', icon: '', value: 'Bethany Salazar', link: '' , image:''},
  {
    id: 'email',
    label: 'Email',
    icons: {
      default: <MdOutlineMailOutline />,
      filled: <MdEmail />,
      outline: <MdOutlineMailOutline />
    },
    value: 'bethanysalazar2007@hotmail.com',
    link: 'mailto:bethanysalazar2007@hotmail.com'
  },
  {
    id: 'phone_number',
    label: 'Phone number',
    icons: {
      default: <AiFillPhone />,
      filled: <AiFillPhone />,
      outline: <AiOutlinePhone />
    },
    value: '(512) 363-6887',
    link: 'tel:512-363-6887'
  },
  {
    id: 'linked_in',
    label: 'LinkedIn',
    icons: {
      default: <AiFillLinkedin />,
      filled: <AiFillLinkedin />,
      outline: <AiOutlineLinkedin />
    },
    value: 'LinkedIn',
    link: 'https://www.linkedin.com/in/bethany-m-salazar/'
  },
  {
    id: 'github',
    label: 'GitHub',
    icons: {
      default: <AiFillGithub />,
      filled: <AiFillGithub />,
      face: <FaGithubAlt />
    },
    value: 'GitHub',
    link: 'https://github.com/BethanySalazar'
  }
]
