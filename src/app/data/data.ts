import type UserType from "@/types/user";

const users: UserType[] = [
  {
    name: 'Vinícius Lira',
    nickName: 'vinisooo',
    role: 'Desenvolvedor',
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida dictum magna eget aliquam. Suspendisse in turpis vitae orci dapibus malesuada. 
    `,
    socialMedias: [
      {
        socialMedia: 'instagram',
        url: 'https://www.instagram.com/vinisooo_/'
      }
    ],
    portfolio: [{
      title: 'Portfólio detalhado',
      imageUrl: 'https://i.postimg.cc/g00XfMb4/portfolio-detalhado.png',
      url: 'https://vinicius-lira-portfolio.vercel.app/',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida dictum magna eget aliquam'
    },
    {
      title: 'Orion Imobiliária',
      imageUrl: 'https://i.postimg.cc/LXHCKF6w/orion.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida dictum magna eget aliquam'
    }
  ]
  },
  {
    name: 'Victor Ryan',
    nickName: 'victorryan',
    description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida dictum magna eget aliquam. Suspendisse in turpis vitae orci dapibus malesuada. 
    `,
    profilePictureUrl: 'https://avatars.githubusercontent.com/u/91850480?v=4',
    role: 'Desenvolvedor WEB',
    socialMedias: [{
      socialMedia: 'instagram',
      url: 'https://www.instagram.com/r1ancss__/'
    },
    {
      socialMedia: 'github',
      url: 'https://github.com/VrCruz06'
    }
  ],
    portfolio: [    {
      title: 'Orion Imobiliária',
      imageUrl: 'https://i.postimg.cc/LXHCKF6w/orion.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida dictum magna eget aliquam'
    }]
  }
]


export default users