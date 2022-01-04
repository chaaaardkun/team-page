import type { NextPage } from 'next'
import Image from 'next/image'
import FadeIn from 'components/FadeAnimation'

const team = [
  {
    id: 1,
    name: 'Eve Sotto',
    image: '/images/eve-sotto.png',
    position: 'Marketing Director'
  },
  {
    id: 2,
    name: 'Owtee Bingayan',
    image: '/images/eve-sotto.png',
    position: 'Head of Engineering'
  },
  {
    id: 3,
    name: 'James Dulay',
    image: '/images/eve-sotto.png',
    position: 'Head of User Experience'
  },
  {
    id: 4,
    name: 'Erny Nazario',
    image: '/images/eve-sotto.png',
    position: 'Head of Product'
  },
  {
    id: 5,
    name: 'Susette Ignacio',
    image: '/images/eve-sotto.png',
    position: 'Marketing Director'
  },
  {
    id: 6,
    name: 'Klinton Ballecer',
    image: '/images/eve-sotto.png',
    position: 'Marketing Director'
  },
  {
    id: 7,
    name: 'Mary Flor Velasquez',
    image: '/images/eve-sotto.png',
    position: 'Marketing Director'
  },
  {
    id: 8,
    name: 'Richard Bandol',
    image: '/images/eve-sotto.png',
    position: 'Marketing Director'
  },
  {
    id: 9,
    name: 'Ryan Torino',
    image: '/images/eve-sotto.png',
    position: 'Marketing Director'
  },
  {
    id: 10,
    name: 'Joseph Balantakbo',
    image: '/images/eve-sotto.png',
    position: 'Marketing Director'
  },
  {
    id: 11,
    name: 'Nathaniel Canilao',
    image: '/images/eve-sotto.png',
    position: 'Marketing Director'
  },
  {
    id: 12,
    name: 'Arvin Tubianosa',
    image: '/images/eve-sotto.png',
    position: 'Marketing Director'
  },
  {
    id: 13,
    name: 'Nica Dolleton',
    image: '/images/eve-sotto.png',
    position: 'Marketing Director'
  },
  {
    id: 14,
    name: 'Janel Aubrey Vicente',
    image: '/images/eve-sotto.png',
    position: 'Marketing Director'
  },
  {
    id: 15,
    name: 'Abi Joson',
    image: '/images/eve-sotto.png',
    position: 'Marketing Director'
  },
  {
    id: 16,
    name: 'Aileen Romero',
    image: '/images/eve-sotto.png',
    position: 'Marketing Director'
  },
  {
    id: 17,
    name: 'Dale Mananghaya',
    image: '/images/eve-sotto.png',
    position: 'Marketing Director'
  },
];

const TeamPage: NextPage = () => {
  const calculateDelay = (id: number) => {
    if(id > 8) {
      return (100 * id) / 3;
    }
    return 100 * id
  }

  return (
    <div className="h-full">
      <h2 className="mt-8 mb-6">Meet the Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap:1 md:gap-6 mx-auto">
        { team.map((member) => (
          <FadeIn key={member.id} style={{ transitionDelay: `${calculateDelay(member.id)}ms` }}>
            <div className="card flex flex-col">
              <div className="position-relative bg-placeholder">
                {member.image &&
                  <Image
                    src={member.image}
                    alt={member.name}
                    height={280}
                    width={302}
                    layout="responsive"
                    objectFit="cover"
                    quality={100}
                    placeholder="empty"
                  />
                }
              </div>
              <h3 className="py-2">{member.name}</h3>
              <p>{member.position}</p>
            </div>
          </FadeIn>
        ))}
        
      </div>
    </div>
  )
}

export default TeamPage
