import Arpit from '../assets/Arpit.png';
import Abhishek from '../assets/Abhishek.png';
import Ishika from '../assets/Ishika.png';
import Chetan from '../assets/Chetan.png';
import Akshay from '../assets/Akshay.png';
import Arima from '../assets/Arima.png';
import Ishaan from '../assets/Ishaan.png';
import Ishita from '../assets/Ishita.png';
import Rakhshan from '../assets/Rakhshan.png';
import Suryansh from '../assets/Suryansh.png';

// Add team members here. Each member needs:
//   name     - Full name (required)
//   role     - Role/title in the team (required)
//   image    - Imported image or path string (required)
//   company  - Company or university name (required)
//   status   - 'Professional' or 'Student' (required)
//   about    - Short bio/description (required)
//   social   - Object with:
//       linkedin - LinkedIn username (required)
//       github   - GitHub username (optional)
//       email    - Email address (optional)

export const teamMembers = [
  {
    name: 'Abhishek Sahu',
    role: 'Organizer',
    image: Abhishek,
    company: 'Kellton',
    status: 'Professional',
    about: 'GDG Lucknow Organizer and passionate community builder driving developer engagement across Lucknow.',
    social: {
      github: 'ASahu16',
      linkedin: 'a-sahu16',
      email: 'asahu.m1608@gmail.com'
    }
  },
  {
    name: 'Arpit Bhatia',
    role: 'Core Member',
    image: Arpit,
    company: 'Marmeto',
    status: 'Professional',
    about: 'Full-stack developer at Marmeto, building scalable web solutions and contributing to the GDG community.',
    social: {
      github: 'bhatiaarpit',
      linkedin: 'bhatiaarpit',
      email: 'arpitbhatia903@gmail.com',
    }
  },
  {
    name: 'Ishika Bhatnagar',
    role: 'Core Member',
    image: Ishika,
    company: 'Lucknow University',
    status: 'Student',
    about: 'Student at Lucknow University, enthusiastic about tech communities and empowering fellow developers.',
    social: {
      github: 'ishika1323',
      linkedin: 'ishika-bhatnagar-67020a17b',
      email: 'ishikabhatnagar23@gmail.com',
    }
  },
  {
    name: 'Suryansh Rai',
    role: 'Volunteer',
    image: Suryansh,
    company: 'GDG Lucknow',
    status: 'Student',
    about: 'Electronics Engineer and Full-Stack Developer with interests in offensive security, AI security, and community building. Former President of GitHub Club SU.',
    social: {
      github: 'SURYANSH-RAI',
      linkedin: 'suryansh-rai',
    }
  },
  {
    name: 'Chetan Kimothi',
    role: 'Volunteer',
    image: Chetan,
    company: 'Absolute',
    status: 'Professional',
    about: 'Growth Manager and tech enthusiast contributing to the GDG Lucknow community.',
    social: {
      linkedin: 'chetan-kimothi',
    }
  },
  {
    name: 'Akshay Kimothi',
    role: 'Volunteer',
    image: Akshay,
    company: 'GDG Lucknow',
    status: 'Professional',
    about: 'Active community volunteer supporting GDG Lucknow events and developer outreach.',
    social: {
      linkedin: 'akshay-kimothi-a27353179',
    }
  },
  {
    name: 'Arima Nimang',
    role: 'Volunteer',
    image: Arima,
    company: 'GDG Lucknow',
    status: 'Student',
    about: 'Student and community volunteer dedicated to learning and growing with the GDG Lucknow developer ecosystem.',
    social: {
      linkedin: 'arima-nimang-b55719348',
    }
  },
  {
    name: 'Ishan Parashar',
    role: 'Volunteer',
    image: Ishaan,
    company: 'GDG Lucknow',
    status: 'Student',
    about: 'Android developer passionate about building intuitive mobile apps with Kotlin. Skilled in Firebase, Unity, and AR/VR integration.',
    social: {
      github: 'ishanparashar24',
      linkedin: 'ishanparashar24',
    }
  },
  {
    name: 'Ishita Singh',
    role: 'Content Lead',
    image: Ishita,
    company: 'GDG Lucknow',
    status: 'Professional',
    about: 'Content Lead at GDG Lucknow, driving community storytelling and event communications.',
    social: {
      linkedin: 'ishita-singh-81a0aa19b',
    }
  },
  {
    name: 'Rakhshan Hussain',
    role: 'Volunteer',
    image: Rakhshan,
    company: 'Integral University',
    status: 'Student',
    about: 'GDG on Campus Organizer at Integral University, leading tech events, hackathons, and AI study jams for students.',
    social: {
      linkedin: 'rakhshanhussain',
    }
  },
];

export const stats = [
  {
    icon: 'Users',
    label: 'Team Members',
    value: '30+',
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    icon: 'Star',
    label: 'Years Active',
    value: '4+',
    color: 'text-green-600',
    bg: 'bg-green-50'
  },
  {
    icon: 'Award',
    label: 'Events Organized',
    value: '15+',
    color: 'text-red-600',
    bg: 'bg-red-50'
  },
  {
    icon: 'Heart',
    label: 'Volunteer Hours',
    value: '1000+',
    color: 'text-purple-600',
    bg: 'bg-purple-50'
  }
];
