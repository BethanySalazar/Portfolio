import { FaEnvelope, FaHome, FaUser } from 'react-icons/fa'

export const tabs = [
  {
    id: 'home',
    label: 'Home',
    icon: <FaHome />,
    content: 'This is the boring part i think'
  },
  { id: 'projects', label: 'Projects' },
  // { id: 'work', label: 'Work' },
  {
    id: 'aboutme',
    label: 'About me',
    icon: <FaUser />,
    content:
      'I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience. I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen.'
  },
  // { id: 'passions', label: 'Passions' },
  { id: 'contactme', label: 'Contact', icon: <FaEnvelope /> }
]
