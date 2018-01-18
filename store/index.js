import Vuex from 'vuex'
import mutations from './mutations'

const createStore = () => {
  return new Vuex.Store({
    state: {
      firstTime: true,
      logoEnded: false,
      showMenu: false,
      inputError: true,
      menuView: 'mpMenuIndex',
      contactInputs: [
        {
          item: 1,
          name: 'InputName',
          label: 'Nombre y Apellidos',
          alias: 'Nombre y Apellidos',
          placeholder: 'Nombre y Apellidos',
          icon: 'user',
          validate: 'required|alpha_spaces'
        },
        {
          item: 2,
          name: 'InputEmail',
          label: 'Correo electrónico',
          alias: 'Correo electrónico',
          placeholder: 'tucorreo@ejemplo.com',
          icon: 'envelope',
          validate: 'required|email'
        },
        {
          item: 3,
          name: 'InputPhone',
          label: 'Número Telefónico (opcional)',
          alias: 'Número Telefónico',
          placeholder: '999-999-999',
          icon: 'phone',
          validate: 'numeric'
        }
      ],
      greetings: [
        {id: 1, text: 'a todos !'},
        {id: 2, text: 'amigos !'},
        {id: 3, text: 'Internet !'},
        {id: 4, text: 'Don José !'},
        {id: 5, text: 'mundo !'},
        {id: 6, text: 'invitado !'},
        {id: 7, text: 'Pepito !'},
        {id: 8, text: 'Lizi !'}
      ],
      indexItemsMenu: [
        {item: 1, name: 'Conóceme', link: '/about'},
        {item: 2, name: 'Mírame', link: '/projects'},
        // {item: 3, name: 'Leéme', link: '/blogs'}, por ahora sin blogs
        {item: 4, name: 'Escríbeme', link: '/contact'}
      ],
      projects: [
        {
          item: 1,
          name: 'High TechSchool',
          description: 'Página de una escuela secundaria',
          image: 'hightechschool.jpg',
          tags: ['Jquery', 'Bootstrap', 'ParticleJS'],
          link: 'http://aws-website-hightechschool-qnf7i.s3-website-us-east-1.amazonaws.com/'
        },
        {
          item: 2,
          name: 'Peru Travel',
          description: 'Página de una empresa del rubro turismo',
          image: 'perutravel.jpg',
          tags: ['Javascript', 'Materialize'],
          link: 'http://aws-website-perutravel-3kq2b.s3-website-us-east-1.amazonaws.com/'
        }
      ],
      skills: [
        {item: 1, name: 'HTML5', percent: '90'},
        {item: 2, name: 'CSS3', percent: '80'},
        {item: 3, name: 'SCSS/LESS', percent: '75'},
        {item: 4, name: 'JAVASCRIPT', percent: '80'},
        {item: 5, name: 'JQUERY', percent: '75'},
        {item: 6, name: 'BOOTSRAP', percent: '75'},
        {item: 7, name: 'FOUNDATION', percent: '60'},
        {item: 8, name: 'VUE.JS', percent: '70'},
        {item: 9, name: 'SQL', percent: '65'},
        {item: 10, name: 'REACT.JS', percent: '40'},
        {item: 11, name: 'PHP', percent: '35'}
      ],
      socials: [
        {item: 1, name: 'facebook', link: 'https://www.facebook.com/luisagapito.dev/'},
        {item: 2, name: 'instagram', link: 'https://www.instagram.com/agapo91/'},
        {item: 3, name: 'linkedin', link: 'https://www.linkedin.com/in/luisagapito/'},
        {item: 4, name: 'github', link: 'https://github.com/agapo91/'}
      ],
      homeItemButton: {name: 'home', link: '/'}
    },
    mutations
  })
}

export default createStore
