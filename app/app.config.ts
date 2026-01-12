export default defineAppConfig({
  global: {
    picture: {
      dark: '/images/foto-sajidan.jpeg',     
      light: '/images/foto-sajidan.jpeg', 
      alt: 'Foto profil Muhammad Sajidan Rifansyah'
    },
    meetingLink: 'https://cal.com/',
    email: 'rifansyahsajidan03@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Built with Nuxt UI • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-whatsapp',
      'to': 'https://wa.me/6281563854329',
      'target': '_blank',
      'aria-label': 'WhatsApp'
    }, {
      'icon': 'i-simple-icons-instagram',
      'to': 'https://instagram.com/sajidanrifansyah_',
      'target': '_blank',
      'aria-label': 'Instagram'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/sajidan03/',
      'target': '_blank',
      'aria-label': 'Github'
    }]
  }
})
