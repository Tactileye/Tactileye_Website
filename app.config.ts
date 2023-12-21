export default defineAppConfig({
  alpine: {
    // The title of the website
    title: 'Tactileye',
    description: 'The minimalist blog theme',
    image: {
      src: 'https://media.discordapp.net/attachments/1073069076253003901/1122525158784110714/Tactileye_small.png?ex=65917285&is=657efd85&hm=6803747894c3bbb437aee15f1b81f5acad5fd8a1f6db9bc42f3a57a7329b87f9&=&width=600&height=600',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 400
    },
    header: {
      texts:'Tactileye',
      position: 'left', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: 'https://media.discordapp.net/attachments/1073069076253003901/1122525158784110714/Tactileye_small.png?ex=65917285&is=657efd85&hm=6803747894c3bbb437aee15f1b81f5acad5fd8a1f6db9bc42f3a57a7329b87f9&=&width=600&height=600', // path of the logo
        pathDark: 'https://media.discordapp.net/attachments/1073069076253003901/1122525158784110714/Tactileye_small.png?ex=65917285&is=657efd85&hm=6803747894c3bbb437aee15f1b81f5acad5fd8a1f6db9bc42f3a57a7329b87f9&=&width=600&height=600', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'Tactileye', // alt of the logo
      }
    },
    footer: {
      
      credits: {
        enabled: true, // possible value are : true | false
        text:'tactileye',
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: 'nuxtlabs',
      instagram: 'atinuxt',
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/nuxtlabs'
      }
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
