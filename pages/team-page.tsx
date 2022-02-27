import type { NextPage } from 'next'
import Image from 'next/image'
import clsx from 'clsx';
import Header from 'components/templates/Header';
import { useState } from 'react';
const { motion } = require("framer-motion");

const team = [
  {
    id: 1,
    name: 'Eve Sotto',
    image: '/images/eve-sotto.png',
    position: 'Marketing Director',
    imagePosition: '38%',
  },
  {
    id: 2,
    name: 'Owtee Bingayan',
    image: '/images/owtee-bingayan.png',
    position: 'Head of Engineering',
    imagePosition: '19%',
  },
  {
    id: 3,
    name: 'James Dulay',
    image: '/images/james-dulay.png',
    position: 'Head of User Experience',
    imagePosition: '5%',
  },
  {
    id: 4,
    name: 'Erny Nazario',
    image: '/images/erny-nazario.png',
    position: 'Head of Product',
    imagePosition: '40%',
  },
  {
    id: 5,
    name: 'Susette Ignacio',
    // image: '/images/susette-ignacio.png',
    position: 'Product Designer'
  },
  {
    id: 6,
    name: 'Mikhael Oriel',
    // image: '/images/mikhael-oriel.png',
    position: 'Software Engineer, SME'
  },
  {
    id: 7,
    name: 'Klinton Ballecer',
    // image: '/images/empty/klinton-ballecer.png',
    position: 'Team Lead'
  },
  {
    id: 8,
    name: 'Mary Flor Velasquez',
    // image: '/images/mary-flor-velasquez.png',
    position: 'Quality Analyst'
  },
  {
    id: 9,
    name: 'Richard Bandol',
    // image: '/images/richard-bandol.png',
    position: 'Software Engineer I'
  },
  {
    id: 10,
    name: 'Ryan Torino',
    // image: '/images/ryan-torino.png',
    position: 'Software Engineer I'
  },
  {
    id: 11,
    name: 'Joseph Balantakbo',
    // image: '/images/joseph-balantakbo.png',
    position: 'QA Automation Engineer'
  },
  {
    id: 12,
    name: 'Nathaniel Canilao',
    // image: '/images/nathaniel-canilao.png',
    position: 'Quality Analyst'
  },
  {
    id: 13,
    name: 'Arvin Tubianosa',
    // image: '/images/arvin-tubianosa.png',
    position: 'Quality Analyst'
  },
  {
    id: 14,
    name: 'Nica Dolleton',
    // image: '/images/nica-dolleton.png',
    position: 'Product Designer'
  },
  {
    id: 15,
    name: 'Janel Aubrey Vicente',
    // image: '/images/janel-aubrey-vicente.png',
    position: 'Product Designer'
  },
  {
    id: 16,
    name: 'Abi Joson',
    // image: '/images/abi-joson.png',
    position: 'Product Designer'
  },
  {
    id: 17,
    name: 'Aileen Romero',
    // image: '/images/aileen-romero.png',
    position: 'IOS Developer',
    imagePosition: '40%',
  },
  {
    id: 18,
    name: 'Justine Tabin',
    // image: '/images/justine-tabin.png',
    position: 'Sr. IOS Developer'
  },
  {
    id: 18,
    name: 'Julius Francisco',
    // image: '/images/julius-francisco.png',
    position: 'Software Engineer, SLA'
  },
  {
    id: 19,
    name: 'Dale Mananghaya',
    // image: '/images/dale-mananghaya.png',
    position: 'OJT'
  },
];


// const oldMembers = [
//   {
//     id: 1,
//     name: 'Sam Esquejo',
//     image: '/images/sam-esquejo.png',
//     position: 'Marketing Director',
//     imagePosition: '40%',
//   },
//   {
//     id: 2,
//     name: 'Benedict Mateo',
//     image: '/images/benedict-mateo.png',
//     position: 'Head of Engineering',
//   },
//   {
//     id: 3,
//     name: 'Lordwill Mabalot',
//     image: '/images/lordwill-mabalot.png',
//     position: 'Head of Engineering',
//   },
// ];


const TeamPage: NextPage = () => {
  const [displayOldMembers, setDisplayOldMembers] = useState(false);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      }
    }
  };
  
  const item = {
    hidden: { x: 100, opacity: 0 },
    visible: index => { 
      console.log(index);
      return {
      opacity: 1,
      x: 0,
      transition: { delay: (index / 2) * 0.1, duration: 0.8  }
    }
  }
  };

  const itemCircle = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    }
  };
  

  return (
    <div className="h-full">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <Header />
        <h2 className="mt-8 mb-6">Meet the Team</h2>
      </motion.div>
      <motion.ul
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap:1 md:gap-6 mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
      >
        { team.map((member, index) => (
           <motion.li key={member.id} variants={item} custom={index} whileInView="visible" className="card flex flex-col" 
           viewport={{ margin: '1px 0px 1px 0px' }}>
              <div className={clsx('position-relative bg-placeholder', {'h-[17.5rem]' : !member.image} )}>
                {member.image &&
                  <Image
                    src={member.image}
                    alt={member.name}
                    height={280}
                    width={302}
                    layout="responsive"
                    objectFit="cover"
                    placeholder="empty"
                    objectPosition={`100% ${member.imagePosition ? member.imagePosition : 0}`}
                  />
                }
              </div>
              <h3 className="py-2">{member.name}</h3>
              <p>{member.position}</p>
          </motion.li>
        ))}
        </motion.ul>

      <p className="mt-32 mb-16 text-center">&copy; 2021 <button type="button" onClick={() => setDisplayOldMembers(!displayOldMembers)}>All</button> rights reserved.</p>
      { displayOldMembers &&
        <div className="pb-24 mx-16 relative">
          <motion.ul
            className="flex justify-end mb-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
          >          
          { [...Array(10)]?.map((_, key) => (
            <motion.li key={key} variants={itemCircle} className="mr-2" whileInView="visible">
            {
              key === 1 || key === 3 || key === 5 || key === 6 || key === 8 ? (
                <svg height="96" width="96">
                  <circle cx="48" cy="48" r="48" fill="#DDDDDD" />
                </svg>
              ) : (
                <svg height="96" width="96">
                  <circle cx="48" cy="48" r="48" fill="#4F4F4F" />
                </svg>
              )
            }
            </motion.li>
          ))}         
          </motion.ul> 

          <motion.div 
            className="absolute left-5 mt-14"  
            variants={container}
            initial="hidden"
            whileInView="visible"
          >   
            <Image
              src="/images/hand-graphic.png"
              alt="hand-graphic"
              height={160}
              width={160}
              quality={100}
            />
          </motion.div>
          
          <motion.ul
            className="flex justify-center ml-24 mb-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
          >          
          { displayOldMembers && [...Array(7)]?.map((_, key) => (
            <motion.li key={key} variants={itemCircle} className="mr-2" whileInView="visible">
            {
              key === 1 || key === 3 || key === 5 || key === 6 ? (
                <svg height="96" width="96">
                  <circle cx="48" cy="48" r="48" fill="#DDDDDD" />
                </svg>
              ) : (
                <svg height="96" width="96">
                  <circle cx="48" cy="48" r="48" fill="#4F4F4F" />
                </svg>
              )
            }
            </motion.li>
          ))}         
          </motion.ul> 

          <motion.ul
            className="flex justify-end mb-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
          >          
          { displayOldMembers && [...Array(8)]?.map((_, key) => (
            <motion.li key={key} variants={itemCircle} className="mr-2" whileInView="visible">
              {
                key === 0 || key === 1 || key === 3 || key === 5 || key === 6 ? (
                  <svg height="96" width="96">
                    <circle cx="48" cy="48" r="48" fill="#DDDDDD" />
                  </svg>
                ) : (
                  <svg height="96" width="96">
                    <circle cx="48" cy="48" r="48" fill="#4F4F4F" />
                  </svg>
                )
              }
            </motion.li>
          ))}         
          </motion.ul> 

          <motion.ul
            className="flex justify-end mr-48 mb-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
          >          
          { displayOldMembers && [...Array(8)]?.map((_, key) => (
            <motion.li key={key} variants={itemCircle} className="mr-2" whileInView="visible">
              {
                key === 0 || key === 3 || key === 5 ? (
                  <svg height="96" width="96">
                    <circle cx="48" cy="48" r="48" fill="#DDDDDD" />
                  </svg>
                ) : (
                  <svg height="96" width="96">
                    <circle cx="48" cy="48" r="48" fill="#4F4F4F" />
                  </svg>
                )
              }
            </motion.li>
          ))}         
          </motion.ul> 
        </div>
      }
    </div>
  )
}

export default TeamPage
